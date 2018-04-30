console.log("Hello word");
/* les variables et leurs types*/
// les chaines de caractères
var chaine="Hello John";
console.log(chaine);
console.log(chaine.indexOf("John"));//connaitre la position de John
console.log(chaine.replace("John","Tim"));//remplacé John par Tim
console.log(chaine.length);//remplacé John par Tim
// convertion d'une chaine par un number
var ch=12;
console.log(ch.toString(ch));
// convertion d'un number en string
var n=12;
var n1=12.5;
console.log(parseInt(n));
console.log(parseFloat(n1));
// convertion flaot to string
var f=10.5;
var f1="10.3";
console.log(f.toString(f));
console.log(parseFloat(f1));

// concatenation
 var m1="Hello";
 var m2="John";
 console.log(m1+" "+m2);
//  les operateurs arithmétiques
var o1=5;
var o2=8;
o2+=o1;
// var resultat=o1+o2;

console.log(o2);
// commentaire monoligne 
/*commentaire muultiligne 
qui peut s'étendre sur plusieurs lignes...hahah 
kra kra*/
// les booleans
var bol=(5===5);
console.log(bol);
// condition if else
var age=18;
if(age<18)
{
    console.log("Mineur");
}
else if(age>60)
{
    console.log("Vieux");
}
else
{
    console.log("Majeur");
}
// les switch case
var lg="en";
switch(lg)
{
    case"en":
        console.log("Hello"); break;
    case"fr":
        console.log("Bonjour"); break;
    case"es":
        console.log("Holla"); break;
    case"dl":
        console.log("Geuteng tag"); break;
    default:
        console.log("Inconnue");
}
// boucle while and do while
var i=0;
while(i<=5)
{   
    console.log("Tour n°:"+i);
    i++;
}
// do while la même chose
do
{
    console.log("Tour n°:"+i);
    i++;
}
while(i<=5);
// boucle for
for(j=0;j<6;++j)
{
    console.log(j);
}
// les function in js
function moyenne(x,y)
{
    var moy=(x+y)/2;
    return moy;
}
var calcul=moyenne(4,6);
console.log("la moyenne est :"+calcul);
// les scoop 
function moyenne1(x,y)
{
    // var moy1=(x+y)/2;
    //var moy1 est une variable locale car elle n'est visible cqu'à l'intérieur de la function
    // mais si on veut qelle soit visible partout du coup on l'écrit sans le var du coup elle devient une variable global 
    moy1=(x+y)/2;//sans le var elle devient globale du coup on peut l'utiliser partout maintenant hors de la fucntion
    return moy1;
}
var calcul1=moyenne1(4,6);
console.log("la moyenne est :"+moy1);//on a utilisé moyen1 car elle n'es plus locale mais global
// les tableaux 
var fruits=["pomme",1,2.2,"banane","jus"];
console.log(fruits);
console.log(fruits[3]);
fruits.push("Jembr");//ajouter un élément au tableaux
console.log(fruits.length);
console.log(fruits);
fruits.pop("");//retiré le dernier élément du tableaux
console.log(fruits);
console.log(fruits.length);
console.log(fruits);
console.log(fruits.slice(2,4));
for(cpt=0;cpt<fruits.length;cpt++)
{
    console.log(fruits[cpt]);
}
// les tableaux à plusieurs dimensions
var mytable=[[0,1],[2,3,4],[5,6,7],[8,9,10,18],[15,20,25,36,40]];
console.log(mytable);
console.log(mytable[3][3]);
// les objects
var dog={
    names:"choupette",
    color:"white",
    age:4
};
console.log(dog.age);
console.log(dog["names"]);//autres façons d'acceder aux propriétés d'un objet
// lister toutes les prolporiétes d'un objet à travers u
for(var list in dog)
{
    console.log(dog[list]);
}
// autres maniere de faire un objet
var dogs=new Object();
dogs.namess="choups";
dogs.colors="white";
dogs.agess=5;
dog.aboie=function(number)
{
    while(number>0)
    {
        console.log(number.toString()+" WoufWouf");
        number--;
    }
};
dog.aboie(5);
// les constructeurs
function Dogg (nom,coleur,age)
{
    this.nom=nom;
    this.coleur=coleur;
    this.age=age;
    this.aboie=function()
    {
        console.log(this.nom+" woo");
    }

}
var petitChien=new Dogg("ch","cc",5);
console.log(petitChien);
petitChien.aboie();

var grdChien=new Dogg("chien","coucou",15);
console.log(grdChien);
grdChien.aboie();