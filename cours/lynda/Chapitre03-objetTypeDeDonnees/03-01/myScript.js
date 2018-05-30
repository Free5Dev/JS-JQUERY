/*Différentes maniere de déclaration d'un objet */
var player=new Object();
player.name="said";
player.age=27;
// creation d'une function de l'objet
function details()
{
    console.log("Bonjour M."+this.name+" vous avez "+this.age+" ans");
}
console.log(player);//affichage du contenu de l'objet
console.log(player.name);//affichage d'un attribut spécifique d'un objet
player.contenuDetails=details;//initialisation de l'attribut contenuDetails à la function details
player.contenuDetails();
// ------------------------------------------------deuxieme maniere de declaration plus simple d'une method---------------------
var joueur={
    nom:"soumah",
    nombre:28

    
};
function detailsJoueur()
{
        console.log("Bonjour M."+this.nom+" vous avez "+this.nombre+" ans");
 }
console.log(joueur);//affichage du contenu de l'objet
console.log(joueur.nom);;//initialisation de l'attribut contenuDetails à la function details
joueur.capacite=detailsJoueur;//initialisation de l'attribut capacite à la function detailsJours
joueur.capacite();
