class ContextMenu {
    static disableContextMenu() {
        document.oncontextmenu = function (event) {
            const target = event.target;
            if (target.tagName === 'img') {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                return false;
            }
        }
        document.addEventListener('contextmenu', event => event.preventDefault());
    }
}

module.exports = ContextMenu;



