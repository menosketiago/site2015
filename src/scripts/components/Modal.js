class Modal {

    constructor(element) {
        this.dom = {
            modal: element,
            article: element.querySelector('article'),
            id: element.id
        }

        this.triggersArray = document.querySelectorAll('#work .item');
        this.btnClose = document.getElementById('close-modal');

        this._state = {
            isVisible: this.dom.modal.classList.contains('is-visible')
        };
    }

    setState(props) {
        this._state = Object.assign(this._state, props);
        this._updateDom();
    }

    _updateDom() {
        if (this._state.isVisible) {
            this.dom.modal.classList.add('is-open');
            this.dom.article.focus();
            this.dom.article.classList.add('is-loading');
        }
        else {
            this.dom.modal.classList.remove('is-open');
            this.dom.article.blur();

            // Remove the previous fetched content abd the dark mode class
            this.dom.article.innerHTML = '';
            this.dom.modal.classList.remove('dark-mode');
        }
    }

    init() {
        this.eventHandler();
    }

    eventHandler() {
        document.addEventListener('click', (e) => {
            // Listen to trigger click to open modal
            Array.from(this.triggersArray).forEach(trigger => {
                if (e.target === trigger) {
                    this.show();

                    this.fetchContent(trigger);
                }
            });

            // Listen to veil click
            if (e.target === this.dom.modal) this.hide();

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
    }

    hide() {
        this.setState({isVisible: false});
    }

    fetchContent(trigger) {
        // Check if the modal should open in dark mode
        if (trigger.hasAttribute('data-dark')) {
            this.dom.modal.classList.add('dark-mode');
        }

        fetch('./work/' + trigger.id + '.html')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);

                    return;
                }

                response.text().then(
                    function(html) {
                        const contentWrapper = document.getElementById('content-wrapper');

                        contentWrapper.classList.add('is-fading');

                        setTimeout(() => {
                            contentWrapper.classList.remove('is-fading');
                            contentWrapper.classList.remove('is-loading');
                            contentWrapper.innerHTML = html;
                        }, 200);
                    }
                );
            }
        )
        .catch(function(error) {
            console.log('Fetch Error :-S', error);
        });
    }

    hideLoading() {

    }

}

export default Modal;
