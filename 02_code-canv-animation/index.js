console.log("JS loaded !");

const canvas = document.getElementById("example");
const ctx = canvas.getContext("2d");
/* 
const myImg = new Image(); //document.createElement("img");

myImg.src = "https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg";

myImg.addEventListener("load", () => ctx.drawImage(myImg, 50, 50, 150, 100)); */

const shootButton = document.querySelector("#shoot");
const stopButton = document.querySelector("#stop");

const fireballImg = document.createElement("img");
// create new image object
// "src" has to point as the image will be used in HTML file
fireballImg.src = "fireball.png";

let frameId;

function draw(x = -75, y = canvas.height) {
  if (frameId) cancelAnimationFrame(frameId);
  // We must clear canvas to make sure no old graphics disturbs the new drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(fireballImg, x, y, 150, 100);

  x += 5;
  y -= 5;

  frameId = requestAnimationFrame(() => draw(x, y));
  console.log(frameId);
  if (frameId > 100) {
    alert("You forgot to STOP!");
    cancelAnimationFrame(frameId);
  }
}

fireballImg.addEventListener("load", () => {
  shootButton.addEventListener("click", () => draw());
  stopButton.addEventListener("click", () => cancelAnimationFrame(frameId));
});

/* 
let timeoutId;

function draw(x = 0, y = 0) {
  // We must clear canvas to make sure no old graphics disturbs the new drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(fireballImg, x, y, 150, 100);

  x += 5;
  y += 2.5;

  timeoutId = setTimeout(() => draw(x, y), 17); // 17 is 1000 ms divided by 60 frames/sec which is the normal refres rate of monitors
}

//fireballImg.addEventListener("load", () => {
shootButton.addEventListener("click", () => {
  if (timeoutId) clearTimeout(timeoutId);
  draw();
});

stopButton.addEventListener("click", function () {
  clearTimeout(timeoutId);
});

//});
 */
