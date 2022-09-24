let header = new Header();
let main = new Main({
    'element' : window.document.body.querySelector('#js-main'),
});

window.addEventListener('load', () => {
    // setTimeout(f, t) > t 밀리초 후에 f 함수 실행
    setTimeout(() => {
        window.document.body.classList.remove('preload');
    }, 100);
    setTimeout(() => {
        header.showHeader();
    }, 250);
    setTimeout(() => {
        main.showPercent();

        main.activatePage(main.childrenElements[0]);
    }, 500);
});