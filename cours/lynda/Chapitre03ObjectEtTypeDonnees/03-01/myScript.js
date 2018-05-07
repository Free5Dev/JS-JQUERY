//premier methode de declaration d'une variable
var player=new Object();
player.name="Fredd";
player.score=10000;
player.rank=1;
console.log(player);
var players={
    name:"Fred",
    score:10000,
    rank:1
};
function jouer()
{
    console.log(this.name+ " à un score de: "+this.score+" et un rank de "+this.rank);
}
console.log(players);
console.log(players.name);
players.details=jouer;//initialisation de la variable details à la function jouer
player.details=jouer;
players.details();//appel de la variable details comme une function car elle etais affecter à une function
player.details();

