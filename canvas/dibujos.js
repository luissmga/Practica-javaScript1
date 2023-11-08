const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');


ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 100, 80, 0, 2 * Math.PI, false);
ctx.closePath();
ctx.fill();


ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(80, 100, 40, 0, Math.PI, true);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(40, 100, 40, 0, Math.PI, true);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(20, 100, 20, 0, Math.PI, true);
ctx.closePath();
ctx.fill();

ctx.save();
ctx.scale(-1, 1); // Reflejar horizontalmente.

ctx.beginPath();
ctx.arc(-80, 100, 40, 0, Math.PI, true);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(-40, 100, 40, 0, Math.PI, true);
ctx.closePath();
ctx.fill();

function drawStar(x, y, radius, spikes, rotation) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.moveTo(0, -radius);
    for (let i = 0; i < spikes; i++) {
        ctx.lineTo(0, -radius * 0.5);
        ctx.rotate(Math.PI / spikes);
        ctx.lineTo(0, -radius);
        ctx.rotate(Math.PI / spikes);
    }
    ctx.closePath();
    ctx.fillStyle = 'white'; // Cambia el color de la estrella.
    ctx.fill();
    ctx.restore();
}