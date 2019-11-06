class Modal {

    constructor(element) {
        this.dom = {
            modal: element,
            article: element.querySelector('article'),
            id: element.id
        }

        this.triggersArray = document.querySelectorAll('#work .item');
        this.btnClose = this.dom.modal.querySelector('.close');
        this.btnRight = document.querySelector('.scroll.right');

        this._state = {
            isVisible: this.dom.modal.classList.contains('is-visible')
        };
    }

    init() {
        this.eventHandler();
        // this.fetchContent();
    }

    setState(props) {
        this._state = Object.assign(this._state, props);
        this._updateDom();
    }

    _updateDom() {
        if (this._state.isVisible) {
            this.dom.modal.classList.add('is-open');
        }
        else {
            this.dom.modal.classList.remove('is-open');
        }
    }

    eventHandler() {
        document.addEventListener('click', (e) => {
            // Listen to trigger click to open modal
            Array.from(this.triggersArray).forEach(trigger => {
                if (e.target === trigger) this.show();
            });

            // Listen to the close button click
            if (e.target === this.btnClose) this.hide();
        });

        document.addEventListener('keyup', (e) => {
            // Close modal on Esc keypress
            if (e.key === 'Escape') this.hide();

            // Listen to trigger click to open modal
            Array.from(this.triggersArray).forEach(trigger => {
                if (e.target === trigger && e.key === 'Enter') this.show();
            });
        });
    }

    show() {
        this.setState({isVisible: true});

        // Hide the work nav button
        this.btnRight.classList.add('is-hidden');
    }

    hide() {
        this.setState({isVisible: false});

        // Show the work nav button
        this.btnRight.classList.remove('is-hidden');
    }

    fetchContent() {
        async function fetchHtmlAsText(url) {
            return await (await fetch(url)).text();
        }

        async function fetch() {
            const fetchTarget = document.getElementById('fetch-target');

            fetchTarget.innerHTML = await fetchHtmlAsText('work/test.html');
        }
    }

}

export default Modal;
