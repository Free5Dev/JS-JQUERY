// les base du javascript alert et console.log
alert("Bonjour"); //affiche une boite de dialogue à l'écran avec bonjour
console.log("sava????");//affiche un text à l'ecran  avec SAVA???
// les variables en js se declare avec le mots var
var name="said";
console.log(name);//appel de la variable name
// les differentes types de variable en js
var number=12;
var string="said";
var float=12.5;
console.log(number+"==> "+string+"==>"+float);//affichage de la valeur des differentes types de variables
// convertion d'un number en string
var xToString=number.toString();
console.log(xToString);//oubien on peut l'ecrire comme ça encore// console.log(number.toString());
//convertion d'un float en string
console.log(float.toString());
// convertion d'un string en number
var n="12", n2="8.5";
console.log(parseInt(n));//pour transformer string en number
console.log(parseFloat(n2));//pour transformer string en float
// concatenation de deux variables
var nom="soumah",prenom="said";
console.log("Nom:"+nom+" Prénom:"+prenom);

// longueur d'une chaine
console.log(" la longueur du nom: "+nom+" est de :"+nom.length+" caractères");
// la position d'un mots
var hello="Hello said";
console.log(hello.indexOf("said"));//renvoi la  posiition du mots said
// remplacé un mots
console.log(hello.replace("said","soumah"));//remplace le nom said par soumah :// var replace=hello.replace("",""); console.log(replace);
console.log(typeof hello);//permets de connaitre le type d'une variable
// les operateurs en js
var nb1=12;
var nb2=15;
var result=nb1+nb2;
console.log(result);
// commentaire monoligne
/*comentaire multiligne qui peut s'étaler sur plusoeurs lignes
voir meme plusieurs encore*/
// les booleans
var booleans=(4===4);// en js pour tester l'egalite on utilise trois signes égales
console.log(booleans);
// les conditions avec ifelse
var speed=70;
if(speed<80)
{
    if(speed<50)
    {
        console.log("Roule un petit peuplus vite");
    }
    else
    {
        console.log("Tu roule bien");
    }
}
else if(speed<100)
{
    console.log("u roule un peu vide ");
}
else
{
    console.log("C'est mortel diminue beaucoup");
}
// les conditions avec switch case le cas des conditions7
var lg="en";
switch(lg)
{
    case"en":
        console.log("Hello");break;
    case"fr":
        console.log("bonjour");break;
    case"es":
        console.log("Hola");break;
    case"dg":
        console.log("geuteng tag");break;
    default:
        console.log("Langue inconnue, veuilleez renseighez une langue connue");
}
// boucle while
var i=5
while(i>0)
{
    console.log("Encore :"+i+" tour à faire");
    i--;//incrémentation
}
console.log("Fin de boucle....");
// mêm chose avec do while
var j=5
do
{
    console.log("Encore :"+j+" tour à faire");
    j--;//incrémentation
}
while(j>0);//condition
console.log("Fin de boucle....");
// même chose avec for
for(var cpt=5;cpt>0;cpt--)
{
    console.log("Encore :"+cpt+" tour à faire");
}
console.log("Fin de boucle....");
// les function en js 
function moyenne(x, y,unit)
{
    var somme=x+y;
    var moy=somme/2;
    moy +=unit;
    var tab=[somme,moy];
    return tab;
}
var calcul=moyenne(4,6," euros");
console.log("la  somme est :"+calcul[0]+" la moyenne est:"+calcul[1]);
// les function en js  en 2
function moyenness(a, b,c)
{
    var somme=a+b;
    var moy=somme/2;
    moy +=c;
    return moy;
}
var calcul1=moyenness(4,6," euros");
console.log("La moyenne est:"+calcul1);
// les scopes pour rendre une variable en js global il suffit de retirer le mots var qui précède la variable
function moy(n1,n2)
{
    // var my=(n1+n2)/2;//si on console.log("la moyenne est:"+my); il yaura une erreur pour régler l'erreur il faut enlever le var comme ci dessous
    my=(n1+n2)/2;//si on console.log("la moyenne est:"+my); il yaura une erreur pour régler l'erreur il faut enlever le var
    return my;
}
var calM=moy(6,8);
console.log("la moyenne est:"+my);
// les tableaux en js se déclare à l'interieur des crochets
var myArray=["pomme","bannane",12,2.5,true,"orange"];//un tableau en js peut prendre differents formats
console.log(myArray);//affiche tout le contenu du tableau
console.log(myArray[3]);//affiche le 4 ème element du tableau à savoir l'indice d'un tableau commence tjrs par 0.
//ajouter un element au tableau
myArray.push("Kiwi");//push("nom ou valeur") pour ajouter le dernier élément du tableaux
//retourner un element du tableau
console.log(myArray);
myArray.pop();//pour retirer le dernier élément du tableau du coup pop() ne prend pas de parametre
console.log(myArray);
// slice 
console.log(myArray.slice(2,4));//prend deux parametre l'indice de debut et celle de la fin
for(q=0;q<myArray.length;q++)
{
    console.log(myArray[q]);//parcourir un tableau 
}
// les objets en js se declare à l'interieur des accolades 
var dog={
    name:"choupette",
    color:"white",
    age:4
};
console.log(dog);//affiche l'objet dog avec ses proporitees et valeurs
console.log(dog.name);//affiche la valeur de la   propiete name//oubien console.log(dog["name"]);
console.log(dog["age"]);
console.log("---------------------------------------------------------------");
// une boucle pour parcourir tous les objets
for(proporiete in dog)
{
    console.log(dog[proporiete]);
}
// autre maniere de créer un object
var humain=new Object();
humain.nom="ss";
humain.col="black";
humain.ag=5;
humain.parler=function(number)
{
    while(number>0)
    {
        console.log(number.toString()+"Bonjour");
        number--;
    }
   
}
console.log(humain);
for(value in humain)
{
    console.log(humain[value]);
}
humain.parler(5);
// les constructeurs
function Chat(nom,couleur, age)
{
    this.nom=nom;
    this.couleur=couleur;
    this.age=age;
    this.mioul=function()
    {
        console.log("Miah Miah => "+this.nom);
    }
}
var petitChat=new Chat("chioup","blant",5);
var grosChat=new Chat("ZAPA","Black",8);
console.log(petitChat);
console.log(grosChat);
petitChat.mioul();
grosChat.mioul();