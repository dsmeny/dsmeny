'use strict';

var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

//      upper left corner
        context.moveTo(25, 135); 
        context.lineTo(25, 40);
        context.lineTo(135, 40);

//      lower right corner
        context.moveTo(495, 310); 
        context.lineTo(495, 410);
        context.lineTo(400, 410);

//      styles
        context.shadowColor = 'rgba(0,0,0,0.3)';
        context.strokeStyle = '#fc9807';
        context.shadowOffsetX = 5;
        context.shadowBlur = 6;
        context.lineWidth = 5;

        context.stroke();


//Canvas animation




