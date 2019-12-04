class Modal {

    constructor(element) {
        this.dom = {
            modal: element,
            loading: element.querySelector('.loading'),
            content: element.querySelector('#work-content'),
            id: element.id
        }

        this.triggersArray = document.querySelectorAll('#work .item');
        this.btnClose = document.getElementById('close-modal');

        if (location.hash) this.modalRoute = location.hash.split('&modal=')[1];

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
        }
        else {
            this.dom.modal.classList.remove('is-open');
            this.dom.loading.classList.remove('is-hidden');

            // Remove the previous fetched content and any theme classes
            this.dom.content.innerHTML = '';
            this.dom.modal.className = 'modal';
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
                    this.setModalTheme(trigger);
                }
            });

            // Listen to veil click
            if (e.target === this.dom.modal) this.hide();

            // Listen to the close button click
            if (e.target === this.btnClose) this.hide();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();

                this.btnClose.focus();
            }
        });

        document.addEventListener('keyup', (e) => {
            // Close modal on Esc keypress
            if (e.key === 'Escape') this.hide();

            // Listen to trigger click to open modal
            Array.from(this.triggersArray).forEach(trigger => {
                if (e.target === trigger && e.key === 'Enter') {
                    this.show();

                    this.fetchContent(trigger);
                    this.setModalTheme(trigger);
                }
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
                        const contentWrapper = document.getElementById('work-content');
                        const loading = contentWrapper.parentElement.querySelector('.loading');
                        const imagesLoaded = require('imagesloaded');

                        // Add the content to the container
                        contentWrapper.innerHTML = html;

                        // Reinitialize the JS components
                        window.initComponents();

                        // Remove loading spinner after images are loaded
                        imagesLoaded(contentWrapper, function() {
                            loading.classList.add('is-hidden');
                        });
                    }
                );
            }
        )
        .catch(function(error) {
            console.log('Fetch Error :-S', error);
        });
    }

    setModalTheme(trigger) {
        let modalTheme = trigger.getAttribute('data-theme');

        // Check if the modal should open in dark mode
        if (trigger.hasAttribute('data-dark')) this.dom.modal.classList.add('dark-mode');

        // Check if a theme exists and assign it
        if (modalTheme) this.dom.modal.classList.add(modalTheme);
    }

    openFromRoute() {
        this.show();

        let trigger = document.getElementById(this.modalRoute);

        this.fetchContent(trigger);
        this.setModalTheme(trigger);
    }

}

export default Modal;
