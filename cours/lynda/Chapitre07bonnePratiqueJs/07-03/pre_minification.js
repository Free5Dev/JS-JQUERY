// Voici du JavaScript à passer dans un minificateur

// Créer quelques variables
var currentPos = 0;
var intervalHandle;

// Animer la boîte sur la page.
function beginAnimate() {
   document.getElementById("join").style.position = "absolute";
   document.getElementById("join").style.left = "0px";
   document.getElementById("join").style.top = "100px";
   // Ceci cause l'appel de la fonction animateBox()
   // On utilise setInterval() pour appeler animateBox() toute les 50 miliseondes,
   intervalHandle = setInterval(animateBox,50);
}

function animateBox() {
   // Assigner la nouvelle position
   currentPos+=5;
   document.getElementById("join").style.left = currentPos + "px";
   // Vérifier si la boîte n'a pas bougé hors champ
   if ( currentPos > 900) {
      // clear interval
      clearInterval(intervalHandle);
      // Remise à zéro des styles personnalisés
      document.getElementById("join").style.position = "";
      document.getElementById("join").style.left = "";
      document.getElementById("join").style.top = "";
   }
}

// Quand la page a fini de charger, attendre 5 secondes
// Puis, appeler la fonction beginAnimate()
window.onload =  function() {
   setTimeout(beginAnimate,5000);
};


