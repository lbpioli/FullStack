let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "20px Arial"
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento Web",200,100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(0,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(350,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(0,350,50,50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(350,350,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(50,150,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(350,150,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(200,200,50,0,1*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'blue';
ctx.moveTo(400,0);
ctx.lineTo(0,400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.stroke();
ctx.closePath();
