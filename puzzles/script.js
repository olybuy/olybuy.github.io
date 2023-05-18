container.onpointerdown = function (event) {
    const target = event.target;
    target.hidden = true;
    const startPoint = document.elementFromPoint(event.clientX, event.clientY);
    target.hidden = false;

    if (target.classList.contains('image')) {
        target.style.position = 'absolute';
        target.style.zIndex = 1000;
        document.body.append(target);
        moveAt(event.pageX, event.pageY);

        document.addEventListener('pointermove', onPointerMove);
        function onPointerMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        target.onpointerup = function(event) {
            document.removeEventListener('pointermove', onPointerMove);
            target.onpointerup = null;

            target.hidden = true;
            const endPoint = document.elementFromPoint(event.clientX, event.clientY);

            if (startPoint.classList.contains('image-part') && endPoint.classList.contains('element-cell')) {
                target.style.width = '150px';
                target.style.height = '150px';
                placeImage(target, endPoint);
                startPoint.remove();

            } else if (startPoint.classList.contains('element-cell') && endPoint.parentNode.classList.contains('image-part')) {
                const placeForImage = document.createElement('div');
                placeForImage.classList.add('image-part');
                placeImage(target, placeForImage);
                const parentElement = endPoint.parentNode;
                parentElement.after(placeForImage);

            } else if (startPoint.classList.contains('element-cell') && endPoint.classList.contains('element-cell')) {
                placeImage(target, endPoint);

            } else if(startPoint.classList.contains('element-cell') && endPoint.classList.contains('elements')) {
                const placeForImage = document.createElement('div');
                placeForImage.classList.add('image-part');
                placeImage(target, placeForImage);
                endPoint.append(placeForImage);

            } else {
                placeImage(target, startPoint);
            }

            setTimeout(checkElementPlace, 300);
        };

        function moveAt(pageX, pageY) {
            target.style.left = pageX - target.offsetWidth / 2 + 'px';
            target.style.top = pageY - target.offsetHeight / 2 + 'px';
        }

        function placeImage(image, place) {
            image.style.cssText = 'none';
            place.append(image);
            image.hidden = false;
        }

        target.ondragstart = function() {
            return false;
        };
    }
}

function checkElementPlace() {
    let deskImagesArr = [];
    let n = 0;
    deskImagesArr = document.querySelectorAll('.element-cell > .image');
    if (deskImagesArr.length === 9) {
        for (let i = 0; i <= deskImagesArr.length-1; i++) {
            if (+deskImagesArr[i].id === i) {
                n++
            }
        }
    }
    if (n === 9) {
        let deskCellsArr = document.querySelectorAll('.element-cell');
        for (let elem of deskCellsArr) {
            elem.classList.add('element-cell-frameless');
        }
        alert('YOU ARE THE WINNER');
    }
}