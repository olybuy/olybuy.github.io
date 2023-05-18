container.onpointerdown = function (event) {
    const target = event.target;
    target.hidden = true;
    const elemBelowTarget = document.elementFromPoint(event.clientX, event.clientY);
    target.hidden = false;

    if (target.classList.contains('image')) {
        target.style.position = 'absolute';
        target.style.zIndex = 1000;
        document.body.append(target);
        moveAt(event.pageX, event.pageY);

        function onPointerMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('pointermove', onPointerMove);

        target.onpointerup = function(event) {
            document.removeEventListener('pointermove', onPointerMove);
            target.onpointerup = null;

            target.hidden = true;
            const elemBelow = document.elementFromPoint(event.clientX, event.clientY);

            if (elemBelow.classList.contains('element-cell')) {
                target.style.width = '150px';
                target.style.height = '150px';
                placeImage(target, elemBelow);
                elemBelowTarget.remove();
            } else if (elemBelow.classList.contains('image')) {
                const placeForImage = document.createElement('div');
                placeForImage.classList.add('image-part');
                placeImage(target, placeForImage);
                const elem = elemBelow.parentNode;
                elem.after(placeForImage);
            } else {
                placeImage(target, elemBelowTarget);
            }
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
