
var emailField = document.getElementById("email");

emailField.onfocus = function() {//quand on rentre dans le champs
	if ( emailField.value == "Votre e-mail") {
		emailField.value = "";
	}
};

emailField.onblur = function() {//quand on quitte le champs
	if ( emailField.value == "") {
		emailField.value = "Votre e-mail";
	}
};
