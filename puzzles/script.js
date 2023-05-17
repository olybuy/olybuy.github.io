container.onpointerdown = function (event) {
    let target = event.target;

    if (target.classList.contains('image')) { // если клик был на картинке (в выборе или на поле)
        target.style.position = 'absolute';
        target.style.zIndex = 1000;
        document.body.append(target);
        moveAt(target, event.pageX, event.pageY);

        function onPointerMove(event) {
            moveAt(target, event.pageX, event.pageY);
        }

        document.addEventListener('pointermove', onPointerMove);

        target.onpointerup = function(event) {
            document.removeEventListener('pointermove', onPointerMove);
            target.onpointerup = null;
            target.style.width = '150px';
            target.style.height = '150px';

            target.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            if (elemBelow.classList.contains('element-cell') || elemBelow.classList.contains('image-part')) {
                target.style.cssText = 'none';
                elemBelow.append(target);
                target.hidden = false;
            }
        };
        target.ondragstart = function() {
            return false;
        };
    }
}

function moveAt(target, pageX, pageY) {
    target.style.left = pageX - target.offsetWidth / 2 + 'px';
    target.style.top = pageY - target.offsetHeight / 2 + 'px';
}