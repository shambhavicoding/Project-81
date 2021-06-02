canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth="1";
ctx.rect(150,143,430,200);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth="2";
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth="2";
ctx.arc(300,310,40,0,2*Math.PI);
ctx.stroke();
