const dessin = document.getElementById('monCanvas');

//contexte de rendu
const ctx = dessin.getContext('2d');

//Rectangle rouge
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 200, 100);