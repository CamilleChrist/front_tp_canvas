const dessin = document.getElementById('monCanvas');

//contexte de rendu
const ctx = dessin.getContext('2d');

//Rectangle rouge
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 200, 100);

//Ligne diagonale
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(200, 250);
ctx.stroke();

//Deuxieme ligne diagonale
ctx.beginPath(); //Balise ouvrante
ctx.moveTo(400, 250);
ctx.lineTo(500, 150);
ctx.lineWidth = 10; // Largeur trait
ctx.lineCap = 'round';
ctx.strokeStyle = 'blue';

ctx.stroke(); // Balise fermante

// ctx.fillStyle = 'cyan';
// ctx.fill();

//Rectangle
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.fillStyle = 'green';
ctx.rect(500, 300, 90, 90);
//ctx.rect(450, 250, 90, 90);
ctx.lineWidth = 10;
ctx.stroke();
ctx.fill();

//Cercle
ctx.beginPath();
ctx.arc(80, 320, 40, 1.5*Math.PI, Math.PI, false);
ctx.stroke();

//Texte
const msg = '20°C';
// Uniquement pour stokeText()
ctx.lineWidth = 2;
ctx.font = '48px sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'top';

// ctx.strokeText(msg, 300, 200); // Contour des caractères seulement

// Décalage de l'ombre selon X et Y
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
// Etendue du flou
ctx.shadowBlur = 4;
// Couleur de l'ombre
ctx.shadowColor = 'black';

ctx.fillText(msg, 300, 200); // Caractères pleins

ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
ctx.shadowColor = 'transparent';

// ctx.clearRect(100, 100, 300, 300); //Efacer une zone

//Créer une image
const image = new Image();
image.src = "metanight.webp";
image.onload = function() {
    ctx.drawImage(this, 120, 120, 100, 100);
    ctx.drawImage(this, 200, 200, 100, 100);
};