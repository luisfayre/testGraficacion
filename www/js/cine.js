var edadPersona = 17;
var personaAcompanado = true;

const mayorDeEdad = () => edadPersona >= 18;



if(mayorDeEdad()){
    console.log(`Puede pasar a ver la pelicula (Mayor de edad)`); //Maor de edad
}else{
    if(personaAcompanado){
        console.log(`Puede pasar a ver la pelicula (Acompañado)`);
    }else{
        console.log(`No puede pasar a ver la pelicula`); 
    }
   // console.log(`No se le permite el paso no cumple con la edad minima para entrar`);
}