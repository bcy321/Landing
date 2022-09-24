class Header {
    constructor() {
    }

    showHeader() {
        let header = window.document.body.querySelector('#js-header');
        header.classList.add('visible');

        let menu = header.querySelector(':scope > ul.menu');
        let menuItems = menu.querySelectorAll(':scope > li.menu-item');
        for (let i = 0; i < menuItems.length; i++) {
            setTimeout(() => {
                menuItems[i].classList.add('visible');
            }, (i + 1) * 175);
        }
    }
}