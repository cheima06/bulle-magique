let container = $('.container');
// Fonction pour générer une couleur RGBA aléatoire
function RandomColor() {
    // Générer des valeurs aléatoires pour chaque composante de la couleur
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var alpha = Math.random().toFixed(2); // Générer une valeur aléatoire entre 0 et 1 avec deux décimales
  
    // Créer la couleur RGBA en utilisant les valeurs générées aléatoirement
    var rgbaColor = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
  
    // Retourner la couleur RGBA aléatoire
    return rgbaColor;
  }
  

  // Créer un tableau vide pour stocker les cases
var cases = [];

// Boucle pour créer 16 cases
for (var i = 0; i < 16; i++) {
  // Créer une nouvelle case
  var caseElement = document.createElement('div');
  
  // Ajouter la classe "case" à chaque case créée
  caseElement.className = 'case';
  
  // Ajouter la case au tableau
  cases.push(caseElement);
  div.css("border","1px solid black");
}

// Ajouter les cases au document
 container = document.getElementById('container'); // Remplacez 'container' par l'ID de votre conteneur
for (var i = 0; i < cases.length; i++) {
  container.appendChild(cases[i])
}