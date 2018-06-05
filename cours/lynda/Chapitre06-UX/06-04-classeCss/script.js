// Modifier les classes CSS avec JavaScript
function preparePage() {
	document.getElementById("mainContent").onclick = function() {
        if ( document.getElementById("mainContent").className == "example") {
             document.getElementById("mainContent").className = "";
        } else {
           document.getElementById("mainContent").className = "example";
        }
	};
}
//on attend qua la page fini de la charger
window.onload =  function() {
	preparePage();
};