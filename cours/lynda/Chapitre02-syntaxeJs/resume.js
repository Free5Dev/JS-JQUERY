var lastName="Soumah",firstName="Said",age=26,i=1,amount=500;
while(i<10)
{
    if(i==5) break;
    console.log(i);
    if(i==6) continue;
    console.log(i);
    i++;
}
console.log("Fin de boucle");
console.log(typeof age);
console.log("Bonjour "+lastName+" "+firstName+" vous avez "+age+" ans et votre amount est:"+amount);