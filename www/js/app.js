//Rectangulo
var base = 5;
var altura = 6;
//Triangulo
var baseT = 7;
var alturaT = 8;
//Circulo
var radioCirculo = 8;
//Esfera
var radioEsfera = 8;

var areaRectangulo = base * altura; //Area Rectangulo
var areaTriangulo = baseT * alturaT / 2; //Area Triangulo
var areaCirculo = (radioCirculo * radioCirculo) * 3.141516;
var volumenEsfera = (radioEsfera * radioEsfera * radioEsfera) * 3.141516 * (4/3);

console.log("El area de rectangulo es igual: " + areaRectangulo);
console.log("El area de triangulo es igual: " + areaTriangulo);
console.log("El area de triangulo es igual: " + areaCirculo);
console.log("El area de triangulo es igual: " + volumenEsfera);





//TAREA 1	
var Nombre = "Luis Angel"; //Nombre


console.log("Hola " + funNombre()); //Concatenar la funcion 

function funNombre(){  //Funcion
    return Nombre;
}