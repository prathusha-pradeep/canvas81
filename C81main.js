function clr()
{
pen.clearRect(0, 0, 800, 600)
}
//canvas is like a paper on which we can draw
var canvas=document.getElementById("myCanvas");

//pen is needed to draw something on the paper
var pen=canvas.getContext("2d");

//i want the computer  to draw circle on the screen for which i want it to know when and where it is being clicked and what action it should take.
window.addEventListener("click", action)
function action(event){
console.log(event)

var clickX=event.clientX-canvas.offsetLeft;
var clickY=event.clientY-canvas.offsetTop;
circle(clickX, clickY)
}

// down below are the steps to make a circle 
function circle(x,y){
    pen.beginPath();
pen.lineWidth=2;
pen.strokeStyle=document.getElementById("Color").value;
//      x, y, radius, start angle, end angle
pen.arc(x,y, 60,0,2*Math.PI);

// stroke is used to put in the screen.
pen.stroke();
}
// down below is the instruction to make circle. 
8

