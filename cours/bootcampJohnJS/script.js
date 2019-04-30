// 42 - Les console 
console.log("Hello word");
// 43 - On ecrit du js dans les fichiers externes 
// 44 - syntaxes et variables 
var entier=22;
var chaine="Hello said";
var ch="12.56";
var bol=true;
var float=12.12;
console.log(typeof(entier)+" =>"+entier);
console.log(typeof(chaine)+" =>"+chaine);
console.log(typeof(bol)+" =>"+bol);
console.log(typeof(float)+" =>"+float);
// 45 - convertion numbers, string, float
console.log(parseInt(ch));
console.log(parseFloat(ch));
console.log(entier.toString());
console.log(chaine.indexOf("said"));
console.log(chaine.replace("Hello", "Hola"));
console.log(chaine.length);
// 46 - Les operateurs
let a=5;
let b=6; 
let res= a+b;
console.log(a+b);
console.log(++a);
// ceci est un commentaire monoligne
/* Et ceci est un commentaire multiligne  
*
*
qui peut s'ettendre sur plusieurs lignes  */
// 48 - Les booleeans et comparaison avec choix ternaires
console.log(   bol===true ? "Right"  : "False"  );
// 49 - les conditions if else
if(entier===22){
    console.log("Happy Birthdays Mr : "+chaine);
}else{
    console.log("Sorry ! it's not you'r birthday");
}
// 50 - Les Boucles 
for(i=1; i<=5; i++){
    console.log("Hello "+i);
}
console.log("Fin pour le boucle for");
var i=1;
while(i<=5){
    console.log("Hello : "+i);
    i++;
}
console.log("Fin Boucle while tant que");
// 51 - Les function et scoop
function moyenne(a, b){
    var res=(a+b)/2;
    return res;
}
var resultat=moyenne(4,6);
console.log("La moyenne est:"+resultat);//le scoop cad on ne peut acceder à une variable en dehors de sa porté
// 52 - Les arrays
var array=["chaine",22,true, 12.12];
console.log(array);
console.log("Votre jour de naissance est:"+array[1]);
console.log(array.push("Ajout"));
console.log(array);
console.log(array.splice(4, 1, "Remplace"));
console.log(array);
console.log(array.pop());
console.log(array);
console.log("Le tableau est de longueur:"+array.length);
// 53 - Les Objects 
var dog={name: "choupette", color: "white", age: 4};
console.log(dog);
console.log(dog['color']);
for(property in dog)
{
    console.log(dog[property]);
}
var chat= new Object();
chat.name="Chat";
chat.color="Black";
chat.age=2;
console.log(chat);
console.log(chat['name']);
for(property in chat){
    console.log(chat[property]);
}
chat.crie=function(number){
    while(number>0){
        console.log("miahh miahh "+number.toString()+" fois");
        number --;
    }
}
chat.crie(5); //objet.method()
// 55 - Les constructeurs
function Chien(nom, couleur, age){
    this.nom= nom;
    this.couleur= couleur;
    this.age= age;
    this.aboie=function(){
        console.log(this.nom+" aboie wou");
    }
}
var petitChien= new Chien("petit", "blanc", 1);
console.log(petitChien);
petitChien.aboie();
var grandChien= new Chien("grand", "jaune", 2);
console.log(grandChien);
grandChien.aboie();