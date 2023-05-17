container.onmousedown = function (event) {
    let target = event.target;

    target.style.position = 'absolute';
    target.style.zIndex = 1000;
    document.body.append(target);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        target.style.left = pageX - target.offsetWidth / 2 + 'px';
        target.style.top = pageY - target.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    target.onmouseup = function(event) {
        document.removeEventListener('mousemove', onMouseMove);
        target.onmouseup = null;
        target.style.width = '150px';
        target.style.height = '150px';

        target.hidden = true;

        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        if (elemBelow.classList.contains('element-cell')) {
            target.style.cssText = 'none';
            elemBelow.append(target);
            target.hidden = false;
        }

        if (elemBelow.classList.contains('image-part')) {
            target.style.cssText = 'none';
            elemBelow.append(target);
            target.hidden = false;
        }
    };

    target.ondragstart = function() {
        return false;
    };
}