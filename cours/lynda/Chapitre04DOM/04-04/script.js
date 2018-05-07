//pour modifier l'allignement d'un texte
var mainContent=document.getElementById('mainContent');//recuperage d'abord du mainContent
mainContent.setAttribute("align","right");//attribution de l'alignement à droite avec setAttribute
console.log(mainContent);//affichage de l'alignement.
//pour modifier le texte
var mainTitle=document.getElementById('mainTitle');//recuperage d'abord du mainTitle
mainTitle.innerHTML="Autre texte";
console.log(mainTitle.innerHTML);//affichage du texte de h1
// sidebar
var sidebar = document.getElementById("sidebar");
console.log(sidebar.innerHTML);

var arrayOfH1s = mainContent.getElementsByTagName("h1");
arrayOfH1s[0].innerHTML = "Voici un nouveau titre";