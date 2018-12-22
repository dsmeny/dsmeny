'use strict';

function scrollEvent(){
    var container = document.querySelector('.container'),
        winScroll = Math.round(window.scrollY);
    
    if(winScroll <= 599){
        container.style.display = 'var(--disp-g)';

        if (winScroll => 600){
            container.style.display = 'none';
        }
    }
}

window.addEventListener('scroll', scrollEvent);