'use strict';

var img = document.querySelector('img[alt="logo"]');

function screenSize(){
    var size = window.innerWidth;
    
    if(size <= 999){
            img.src = 'resources/img/logo_white.png';
       }else{
            img.src = 'resources/img/logo_black.png';
       }
};


window.addEventListener('resize', screenSize);