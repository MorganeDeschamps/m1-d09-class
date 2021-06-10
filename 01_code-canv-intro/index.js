console.log("JS has loaded ok");

const canvas = document.getElementById("example");
const ctx = canvas.getContext("2d");

ctx.font = "24px monospace";
ctx.fillText("Hello PizzaBytes", 20, 100);

ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = "orange";
ctx.moveTo(25, 25);
ctx.lineTo(50, 50);
ctx.stroke();
ctx.moveTo(75, 75);
ctx.lineTo(75, 175);
setTimeout(() => ctx.stroke(), 2000);
ctx.closePath();

setTimeout(() => {
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}, 3000);
/* 
ctx.fillRect(0, 0, 5, 5);

ctx.fillStyle = "purple";

//ctx.fillRect( x_postion, y_postion, width, height)
ctx.fillRect(25, 25, 50, 50);

ctx.strokeStyle = "blue";
ctx.lineWidth = 6;

ctx.strokeRect(50, 50, 50, 50);

ctx.fillRect(75, 75, 50, 50);

ctx.strokeRect(100, 100, 50, 50);

// Time to erase ( x_postion, y_postion, width, height)
setTimeout(() => ctx.clearRect(75, 75, 50, 50), 2500);

setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 3000);
 */
