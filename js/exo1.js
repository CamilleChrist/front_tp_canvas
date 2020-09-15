const canvas = document.getElementById('monCanvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener("click", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;

    rayon = Math.random() * Math.floor(80);
    color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.arc(mouseX, mouseY, rayon, 0, 2*Math.PI, false);
    ctx.stroke();
    ctx.save();
})

;