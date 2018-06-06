// basic
document.getElementById("mainArticle").className = "highlight";

// Utiliser jQuery - basic
//jQuery("#mainArticle").addClass("highlight");

// Trouver tous les éléments avec une classe particulière
//jQuery(".tourDescription").addClass("highlight");

// Trouver tous les éléments utilisant une certaine balise HTML 
//jQuery("li").addClass("highlight");

// Trouver le dernier élément de liste
//jQuery("li:last").addClass("highlight");

// Trouver tous les paragraphes qui contiennent le mot 'volutpat'
//jQuery("p:contains('volutpat')").addClass("highlight");

// EFFETS

// Cacher tous les paragraphes.
//$("p").hide(4000);

//$("p").fadeOut(4000);

// EVENEMENTS

// Simple clic
//$("#pageID").click(function() {
//   $("#pageID").text("Vous m'avez cliqué!");
//});

// ajouter $(this) pour faire référence à l'élément en cours
//$("h2").click(function() {
//   $(this).text("Vous m'avez cliqué!!");
//});

// ajouter des effet - Chaque paragraphe disparaît lorsqu'on les clique.
//$("p").click(function() {
//  $(this).fadeOut(2000);
//});

// ready() vs window.onload()
//$(document).ready(function () {
//  $("#pageID").text("Le DOM est prêt!");
//});

// Vous pouvez appeler cette fonction plusieurs fois.
//$(document).ready(function () {
//   $("h1").css("color","red");
//});