var nombre = "Alonso";

function saludar(){
	if(true){
		var nombre = "Erick";
	}

	console.log(`Hola ${nombre}`);
}

function saludar10(){
	let i=0;
	for(i; i<10; i++){
		console.log(`Hola ${nombre}`);  //Las llaves para interpolar variables sirve para concatenar
	}
	console.log(`El valor de i es ${i}`);
}