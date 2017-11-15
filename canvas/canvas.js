var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
autosetcanvassieze(canvas)
div = document.createElement("div")
canvas.appendChild(div)
Listening(canvas)
//=====
function autosetcanvassieze(canvas){
    CnavasSize()
    window.onresize = function () {
        CnavasSize()
    }
}
function CnavasSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
}
function drawCicle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
}
function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}
function Listening(click){
    var Using = false
    var LastPoint = { "x": undefined, "y": undefined }
   click.onmousedown = function (fun) {
        var x = fun.clientX;
        var z = fun.clientY;
        Using=true
        if (Eraser) {
            context.clearRect(x-5,z-5,10,10)
        } else {
            LastPoint = { "x": x, "y": z }
            drawCicle(x, z, 0.0001)
        }
    }
    click.onmousemove = function (bi) {
        var x = bi.clientX;
        var z = bi.clientY;
        if(!Using){return}
       
            if(Eraser){
                Using=true
                context.clearRect(x-5,z-5,10,10) 
            }
        else{
           
                var newPoint = { "x": x, "y": z }
                drawCicle(x, z, 1)
                drawLine(LastPoint.x, LastPoint.y, newPoint.x, newPoint.y)
                LastPoint = newPoint
           
        }
    }
    click.onmouseup = function () {
        Using = false
    }
}


var Eraser = false
eraser.onclick = function () {
    Eraser = !Eraser
}