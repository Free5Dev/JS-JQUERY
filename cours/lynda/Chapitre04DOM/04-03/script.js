// reperage d'élément grace aux dom
var mainTitle=document.getElementById('mainTitle');
console.log(mainTitle);//pour recuperer mainTitle dans js et le manipuler comme bon le semble
// le type d'element du node ave note type
console.log("Cet élément est de type:"+mainTitle.nodeType+" cad un element node");//pour connaitre le type de noeud cad element noeud
// pour afficher le nombre de node enfants
console.log("Cet element à:"+mainTitle.childNodes.length+" nodes enfants");//pour connaitre le nombre de nodes enfants
// reperage de plusieurs elements grace aux noms de la balise utilisés dans l'elements....
var links=document.getElementsByTagName('a');//pour recuperer le nombre de lien dans la page
console.log(" il ya:"+links.length+" liens dans cette page");//.length pour renvoie le nombre en chiffre sans affiché sous forme de array
// pour connaitre le nombre de lien dans une section proporementide
var linsBar=document.getElementById('homeNav');
var liens=linsBar.getElementsByTagName('a');
console.log("il ya "+liens.length+" liens dans la page");