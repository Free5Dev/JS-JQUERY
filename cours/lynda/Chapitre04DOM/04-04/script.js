var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align","right");

mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML="autre texte";
console.log(mainTitle.innerHTML);

var sidebar = document.getElementById("sidebar");
console.log(sidebar.innerHTML);

var arrayOfH1s = mainContent.getElementsByTagName("h1");
arrayOfH1s[0].innerHTML = "Voici un nouveau titre";



