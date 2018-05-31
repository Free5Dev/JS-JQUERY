// Deux méthodes pour les timers - setTimeout() et SetInterval() (uique / répétitif)

function simpleMessage() {//simple function de creation d'alert
	alert("Je suis une simple alerte !");
}

// settimeout est en milisecondes
//setTimeout(simpleMessage,5000);//pour affiché l'alert simpleMessage quand fait 5000ms sur la page

var myImage = document.getElementById("mainImage");//recuperage de mainimage du dom

var imageArray = ["_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
				  "_images/bigSur.jpg","_images/flag_photo.jpg","_images/mission_look.jpg"];//array qui prend l'adresse des images
var imageIndex = 0;//variable initalisé à 0

function changeImage() {//function qui change l'image
	myImage.setAttribute("src",imageArray[imageIndex]);//setAttribute pour affecter l'adresse des images du array
	imageIndex++;//incrementation de l'index de l'image
	if (imageIndex >= imageArray.length) {//cdt pour respecter le parcours des images du tableaux
		imageIndex = 0;
	}
}

// setInterval est aussi en milisecondes
var imageInterval = setInterval(changeImage,5000);//pour changé les images du tableau un à un 

myImage.onmouseover=function(){//pour stopper le parcour des images pointées par le curseur
	clearInterval(imageInterval);//netoie imageInterval
}
myImage.onmouseout=function(){
	imageInterval=setInterval(changeImage,5000);//pour reprendre le parcour des images
};