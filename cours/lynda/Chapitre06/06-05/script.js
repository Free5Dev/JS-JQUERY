var currentPos = 0;
var intervalHandle;

function beginAnimate() {
	document.getElementById("join").style.position = "absolute";
	document.getElementById("join").style.left = "0px";
    document.getElementById("join").style.top = "100px";
    // Appelle la fonction animateBox() toutes les 50 ms
    intervalHandle = setInterval(animateBox,50);
}

function animateBox() {
    // Définir une nouvelle position
    currentPos+=5;
    document.getElementById("join").style.left = currentPos + "px";
    // 
    if ( currentPos > 900) {
        // Arrêter l'animation
        clearInterval(intervalHandle);
        // Remettre les styles à zéro
        document.getElementById("join").style.position = "";
        document.getElementById("join").style.left = "";
        document.getElementById("join").style.top = "";
    }
}

window.onload =  function() {
	setTimeout(beginAnimate,5000);
};

