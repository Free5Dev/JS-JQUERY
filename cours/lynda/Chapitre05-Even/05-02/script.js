
//document.onclick = function() {
	//alert("Vous avez cliqué dans le document");
//};

function prepareEventHandlers(){//on crer une function prepareEventHandlers dans la quelle on met l'event onclick
	var myImage = document.getElementById("mainImage");
		myImage.onclick =  function() {
			alert("Vous avez cliqué sur l'image");
		}
}

window.onload = function() {//appel de la function quand la page est preparer avec window onload cad quand on lit la page
	// Préparer ce dont on a besoin
	prepareEventHandlers();
};
