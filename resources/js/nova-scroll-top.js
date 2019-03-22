import animateScrollTo from 'animated-scroll-to';

Nova.booting((Vue, router) => {
    router.beforeEach(function (to, from, next) {
        setTimeout(() => {
            animateScrollTo(0);
        }, 100);
        next();
    });
});
