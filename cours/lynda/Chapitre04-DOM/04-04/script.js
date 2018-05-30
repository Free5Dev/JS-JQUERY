//modifier l'alignement du text avec l'attribut setAttribute qui prend deux parametre l'action et la propriéte
var mainContent=document.getElementById('mainContent');//on recupere mainContent
mainContent.setAttribute("align","right");//on l'affecte l'attribut

var mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML="autre text";//on attribut un nouveau texte dans mainTitle
console.log(mainTitle.innerHTML);//on affiche dans la console la valeur de innerHTML

var sidebar = document.getElementById("sidebar");
//console.log(sidebar.innerHTML);

var arrayOfH1s = mainContent.getElementsByTagName("h1");//recuperer toutes les  balise h1 dans mainCOntent
arrayOfH1s[0].innerHTML = "Voici un nouveau titre";//la premiere balise h1 modifier son innerHtml



