function validar() {
	
    var name, email, expresion;
    
	name = document.getElementById("name").value;
	email = document.getElementById("email").value;
	
	expresion = /\w+@\w+\.+[a-z]/;
	
	if (name === "" || email === ""){
		alert("Completa los campos vacios");
		return false;
	}
	else if(name.length>30){
		alert("El Nombre es muy largo");
		return false;
	}
	else if(email.length>100){
		alert("El E-Mail es muy largo");
		return false;
	}
	else if(!expresion.test(email)){
		alert("El E-Mail no es válido");
		return false;
	}
}