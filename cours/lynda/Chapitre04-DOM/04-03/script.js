//recuperer un element unique dans la page grace à son id
var mainTitle=document.getElementById('mainTitle');
console.log(mainTitle);
// recuperer un element grace aux nom de balise
var links=document.getElementsByTagName('a');
console.log("cette page contient: "+links.length+" liens.");
// recuperer un element d'un bloc specifique grace à son nom de balise
var homeNav=document.getElementById('homeNav');//on recupere d'abord l'identifiant du bloc
console.log(homeNav);
var linksbar=homeNav.getElementsByTagName('a');
console.log(" le bloc homeNav contient: "+linksbar.length+" liens");
// var linksbar=homeNav.getElementsByTagName('a');
// console.log(" Le HomeNav contient "+linksbar.length+" liens");