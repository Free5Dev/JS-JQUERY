
//fonction textResize()
function textResize(operation){
	//Obtenir les éléments à redimensionner
	var mainContent = document.getElementById('mainContent');
	var mainContentH1 = mainContent.getElementsByTagName("h1");
	var mainContentH2 = mainContent.getElementsByTagName("h2");
	var mainContentP = mainContent.getElementsByTagName("p");
	
	//Créer une array contenant les éléments à redimensionner
	var elementsToResize = [...mainContentH1,...mainContentH2,...mainContentP];
	console.log(elementsToResize);
    return;
	//Tourner autour des éléments à redimensionner
	for (var i=0; i<elementsToResize.length; i++){
		//obtenir la taille des caractères actuelle
		var fontSizeCurrent = window.getComputedStyle(elementsToResize[i], null).getPropertyValue("font-size");
		//retirer le "px" de la taille obtenue
		var fontSizeNumber = fontSizeCurrent.slice(0,fontSizeCurrent.length -2 )
		//Augmenter ou diminuer la taille de l'élément de 2px
		if(operation =="bigger"){
			var newSize = Number(fontSizeNumber) + 2;
		}else if(operation == "smaller"){
			var newSize = Number(fontSizeNumber) - 2;
		}
		//Assigner sa nouvelle taille à l'élément
		elementsToResize[i].style.fontSize = newSize+"px";
	}	
}
window.onload = function(){
	//Récupérer les boutons
	var buttonWrapper = document.getElementById("textResize");
	var textButtons = buttonWrapper.getElementsByTagName("a");
	
	//associer une fonction à chacun des deux boutons
	textButtons[0].onclick = function(){
        textResize("smaller");
    }
	textButtons[1].onclick = function(){
		textResize("bigger");
	}
};