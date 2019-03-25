import animateScrollTo from 'animated-scroll-to';
import xhook from 'xhook'


Nova.booting(() => {
    xhook.after(function(request, response) {
        if(response.status === 422){
            console.log("validation error");
            setTimeout(() => {
                if(document.querySelector('.border-danger'))
                    animateScrollTo(document.querySelector('.border-danger'))
            }, 200);
        }
    });
});
