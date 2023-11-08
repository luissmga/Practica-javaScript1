const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

ctx.fillStyle = 'grey';
ctx.beginPath();
ctx.arc(290, 110, 30, 4.6, Math.PI / 1.4);
ctx.fill();

ctx.fillStyle = 'grey';
ctx.beginPath();
ctx.arc(330, 150, 27, 5.5, Math.PI / 1.2, 0);
ctx.fill();

ctx.fillStyle = 'grey';
ctx.beginPath();
ctx.arc(365, 200, 25, 5.5, Math.PI / 1.2);
ctx.fill();

ctx.fillStyle = 'grey';
ctx.beginPath();
ctx.arc(205, 100, 55, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'grey';
ctx.beginPath();
ctx.arc(118, 110, 30, 4.6, Math.PI * 0.25, 8);
ctx.fill();

ctx.fillStyle = 'grey';
ctx.beginPath();
ctx.arc(70, 150, 27, 4, Math.PI * 0.15, 8);
ctx.fill();

ctx.fillStyle = 'grey';
ctx.beginPath();
ctx.arc(35, 200, 25, 4, Math.PI * 0.15, 10);
ctx.fill();

ctx.font = "16px sans-serif";
ctx.textAlign = "center";

const img = new Image();
img.src = "https://interactive-examples.mdn.mozilla.net/media/examples/star.png";
img.onload = () => {
  const originalWidth = img.width;
  const originalHeight = img.height;
  
  // Reducir la imagen a la mitad de su tamaño original
  const newWidth = originalWidth / 4;
  const newHeight = originalHeight / 4;
  

  ctx.drawImage(img, 30, 20, newWidth, newHeight);
  ctx.drawImage(img, 330, 25, newWidth, newHeight);
  ctx.drawImage(img, 40, 70, newWidth, newHeight);
  ctx.drawImage(img, 80, 230, newWidth, newHeight);
  ctx.drawImage(img, 300, 290, newWidth, newHeight);
  ctx.drawImage(img, 320, 230, newWidth, newHeight);
  ctx.drawImage(img, 380, 260, newWidth, newHeight);
  ctx.drawImage(img, 100, 190, newWidth, newHeight);
  ctx.drawImage(img, 170, 176, newWidth, newHeight);
  ctx.drawImage(img, 130, 67, newWidth, newHeight);
  ctx.drawImage(img, 200, 15, newWidth, newHeight);
  ctx.drawImage(img, 230, 220, newWidth, newHeight);
}

ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(10, 390, 50, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(60, 385, 50, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(100, 395, 50, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(130, 385, 70, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(170, 385, 50, 40, Math.PI * 2.6, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(230, 385, 40, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(270, 385, 50, 40, Math.PI * 2.6, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(330, 385, 50, 40, Math.PI * 2.6, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(370, 385, 40, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.ellipse(390, 385, 50, 40, Math.PI * 2.6, 0, Math.PI * 1.5);
ctx.fill();