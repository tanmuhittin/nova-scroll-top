import animateScrollTo from 'animated-scroll-to';

Nova.booting((Vue, router) => {
    router.beforeEach(function (to, from, next) {
        setTimeout(() => {
            if(to.path != from.path) {
                animateScrollTo(0);
            }
        }, 100);
        next();
    });
});
