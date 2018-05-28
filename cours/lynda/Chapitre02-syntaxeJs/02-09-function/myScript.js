//var result; on le declare de façon global
function calcul(a,b){

   var  result=a+b;
    return result;
}
var n=calcul(4,5);
console.log(n);
//console.log(result); on ne peut l'utiliser car elle n'est visible qu'a l'interieur de son scope