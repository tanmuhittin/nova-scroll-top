import animateScrollTo from 'animated-scroll-to';

Nova.booting((Vue, router) => {
    router.beforeEach(function (to, from, next) {
        setTimeout(() => {
            if(typeof document.activeElement.type !== 'undefined' && document.activeElement.closest('div[dusk*=index-component]')){
                animateScrollTo(document.activeElement.closest('div[dusk*=index-component]').offsetTop);
            }else{
                animateScrollTo(0);
            }
        }, 100);
        next();
    });
});
