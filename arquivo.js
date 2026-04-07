let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'red';
ctx.arc(300,100,50,0,2*Math.PI)
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(110, 48, 33)';
ctx.strokeStyle = 'rgb(110, 48, 33)';
ctx.fillRect(150,160,108,180,0.2*Math.PI);
ctx.strokeRect(150,160,108,180);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(93, 168, 211) ';
ctx.strokeStyle = 'rgb(93, 168, 211) ';
ctx.fillRect(157,210,35,35,0.2*Math.PI);
ctx.strokeRect(157,210,35,35);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(93, 168, 211) ';
ctx.strokeStyle = 'rgb(93, 168, 211) ';
ctx.fillRect(208,210,40,35,0.2*Math.PI);
ctx.strokeRect(208,210,40,35);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(126, 69, 16) ';
ctx.strokeStyle = 'rgb(126, 69, 16) ';
ctx.fillRect(185,270,30,60,0.2*Math.PI);
ctx.strokeRect(185,270,30,60);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(80,250,35,0,2*Math.PI)
ctx.fill();
ctx.closePath();

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(285,300,30,80);
ctx.strokeRect(285,300,30,80);
ctx.closePath();
	

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(300,300,35,0,2*Math.PI)
ctx.fill();
ctx.closePath();

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(65,280,30,80);
ctx.strokeRect(65,280,30,80);
ctx.closePath();
	
// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'gray';
ctx.strokeStyle = 'gray';
ctx.fillRect(0,330,400,400);
ctx.strokeRect(0,330,400,400);
ctx.closePath();
