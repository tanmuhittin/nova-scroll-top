import animateScrollTo from 'animated-scroll-to';

Nova.booting(() => {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        this.addEventListener('load', function() {
            if (this.readyState === 4 && this.status === 422 && document.getElementsByClassName('modal').length < 1) {
                setTimeout(() => {
                    if (document.querySelector('.error-text'))
                        animateScrollTo(document.querySelector('.error-text').parentNode)
                }, 200);
            }
        });
        origOpen.apply(this, arguments);
    };
});
