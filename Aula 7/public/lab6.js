const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'book1.jpg'; 

let mouseX = 150; 
let mouseY = 150;

const imgWidth = 40;
const imgHeight = 40;

canvas.addEventListener('mousemove', function(event) {
  const rect = canvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;

  mouseX = Math.max(imgWidth / 2, Math.min(mouseX, canvas.width - imgWidth / 2));
  mouseY = Math.max(imgHeight / 2, Math.min(mouseY, canvas.height - imgHeight / 2));
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, mouseX - imgWidth / 2, mouseY - imgHeight / 2, imgWidth, imgHeight);
  requestAnimationFrame(draw);
}

img.onload = function() {
  draw();
};

canvas.addEventListener('mouseleave', function() {
});
