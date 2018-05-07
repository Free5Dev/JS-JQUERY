var mainTitle=document.getElementById('mainTitle');
console.log(mainTitle);//pour recuperer mainTitle dans js et le manipuler comme bon le semble
console.log("Cet element est de type:"+mainTitle.nodeType);//pour connaitre le type de noeud cad element noeud
console.log("Cet element à "+mainTitle.childNodes.length+" noeuds enfants");//nombre de noeuds enfants

var links=document.getElementsByTagName('a');// le total des liens
console.log("il ya "+links.length+" liens dans cette page ");

var homeNav=document.getElementById("homeNav");
var linksBar=homeNav.getElementsByTagName('a');
console.log('il ya '+linksBar.length+" liens dans homeNav");