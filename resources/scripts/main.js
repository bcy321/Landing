class Main {
    constructor(params) {
        this.containerElement = params['element'];
        this.containerElement.addEventListener('wheel', (e) => {
            if (e.deltaY > 0) {
                this.nextPage();
            } else if (e.deltaY < 0) {
                this.previousPage();
            }
        });

        this.childrenElements = this.containerElement.querySelectorAll(':scope > section');
        for (let i = 0; i < this.childrenElements.length; i++) {
            this.childrenElements[i].style.left = `${i * 100}%`;
        }
        this.currentIndex = 0;

        let background = window.document.body.querySelector('#js-background');
        background.style.width = `calc(100% + ${this.childrenElements.length * 10}rem)`;
    }

    nextPage() {
        if (this.currentIndex === this.childrenElements.length - 1) {
            return;
        }
        // currentIndex = 1
        this.deactivatePage(this.childrenElements[this.currentIndex++]); // 1 : Skills
        this.activatePage(this.childrenElements[this.currentIndex]);     // 2 : Projects
        for (let i = 0; i < this.childrenElements.length; i++) {
            this.childrenElements[i].style.left = `${(i - this.currentIndex) * 100}%`;
        }
        this.setPercent();
        this.moveBackground();
    }

    previousPage() {
        if (this.currentIndex === 0) {
            return;
        }
        this.deactivatePage(this.childrenElements[this.currentIndex--]);
        this.activatePage(this.childrenElements[this.currentIndex]);
        for (let i = 0; i < this.childrenElements.length; i++) {
            this.childrenElements[i].style.left = `${(i - this.currentIndex) * 100}%`;
        }
        this.setPercent();
        this.moveBackground();
    }

    setPercent() {
        let percent = (this.currentIndex / (this.childrenElements.length - 1)) * 100;
        let progress = window.document.body.querySelector('#js-progress');
        let progressValue = progress.querySelector(':scope > div.value');
        progressValue.style.width = `${percent}%`; // percent 가 33이라면 > '33%'
    }

    showPercent() {
        let progress = window.document.body.querySelector('#js-progress');
        progress.classList.add('visible');
    }

    activatePage(page) {
        let content = page.querySelector(':scope > div.main-item-content');
        let contentElements = content.querySelectorAll(':scope > *');
        for (let i = 0; i < contentElements.length; i++) {
            setTimeout(() => {
                contentElements[i].classList.add('visible');
            }, (i + 1) * 250);
        }
    }

    deactivatePage(page) {
        let content = page.querySelector(':scope > div.main-item-content');
        let contentElements = content.querySelectorAll(':scope > *');
        for (let i = 0; i < contentElements.length; i++) {
            setTimeout(() => {
                contentElements[i].classList.remove('visible');
            }, (i + 1) * 250);
        }
    }

    moveBackground() {
        let background = window.document.body.querySelector('#js-background');
        background.style.left = `calc(50% + ${this.currentIndex * -10}rem)`;
    }
}
















