// quand la fenetre du navigateur as fnis de se charger on peut aussi ecrire une notation racourci svte
/*  $(function(){

}); 
*/
$(document).ready(function(){

    //Les selecteurs en jquery
    $("h1").hide(); // permet de cacher un element 
    $(".paragraphe1").hide();   //le selecteur class
    $("#paragraphe2").hide(); // le selecteur id

    // les evenements en jquery
    $(".p1").click(function(){ //quand on click sur p1 on cache p5
        $(".p5").hide(); //show function de masque
    });
    $(".p2").mouseenter(function(){ //quand la sourie rentre sur le p2 on cache p5
        $(".p5").hide(); //show function de masque
    });
    $(".p2").mouseleave(function(){ // quand la sourie de de p2 on affiche p5
        $(".p5").show(); //show function d'affiche
    });
    $(".p3").hover(function(){ //la function hover joue deux roles quand on rentre la sourie et quand on sort la sourie 
        $(".p4").hide(); //on cache
    },
    function(){
        $(".p4").show(); // on affiche
    }
    );
    // liés plusieurs evenements à un selecteur par exemple le selecteur p4
    // $(".p5").on({
    //     mouseenter: function(){
    //         $(".p1").hide();
    //     },
    //     mouseleave: function(){
    //         $(".p1").show();
    //     },
    //     click: function(){
    //         $(".p2").hide();
    //     }
    // });

    // les effects
    $(".p4").mouseenter(function(){ 
        $(".p1").hide(3000, function(){ // le callback c'est la function qui sera apple apres l'event on peut faire autant de callBack
            $(".p2").hide(3000);
        });
    });
    $('.p5').click(function(){
        $('.p3').toggle(3000); // le toggle quand on click sur p5 disparait p3 et quand on reclick sur p5 apparait p3 
    });
    $("h2").click(function (){
        $(".p1").fadeToggle(3000); //fadeToggle joue le role de fade out et de fade in disparait et reapparait dans un rendu fondu
    }); 
    // pour l'animate
    $("#start").click(function(){
        $("div").animate({
            left: '600px',
            opacity: 0.2,
            width: '+=150px',
            height: '+=150px'
        }, 5000);
        $("div").animate({ width: '200px',}, 5000);
        $("div").animate({height: '200px'}, 5000);
    });
    $("#stop").click(function(){
        $("div").stop(true, true);
    });
});