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

fireballImg.addEventListener("load", () =>
  ctx.drawImage(fireballImg, 50, 50, 150, 100)
);
