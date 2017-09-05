
let x1 = Math.round(Math.random() * (100 - 1) + 1);
let y1 = Math.round(Math.random() * (100 - 1) + 1);
let x2 = Math.round(Math.random() * (100 - 1) + 1);
let y2 = Math.round(Math.random() * (100 - 1) + 1);

var objeto1 = new Object();
objeto1.x1 = x1;
objeto1.y1 = y1;

var objeto2 = new Object();
objeto2.x2 = x2;
objeto2.y2 = y2;

console.log(objeto2);
console.log(objeto1);

//console.log(xr);
function calcularDistancia(objeto1.x1 , objeto1.y1,objeto2.x1,objeto2.y2){

	var distancia = sqrt(
							((objeto2.x2)- (objeto1.x1) * (objeto2.x2) -(objeto1.x1)) + 
							((objeto2.y2)- (objeto1.y1) * (objeto2.y2) - (objeto2.y2))
						) ;
	console.log(distancia);
}