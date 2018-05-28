var i=1;
while(i<=10){
    console.log(i);
    i++;
}
console.log("Fin de boucle");

// ----------------------------------------------------------------------
var j=1;
do{
    console.log(j);
    j++;
}while(j<=10);
console.log("Fin de boucle");
// -----------------------------------------------------------------------
for(var cpt=1;cpt<10;cpt++){
   if(cpt===5) break;//continue
    console.log(cpt);
}
console.log("Fin de boucle");