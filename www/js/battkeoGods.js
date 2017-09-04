let vidaGoku = 100;
let vidaSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

let round = 0;
const gokuSigueVivo = () => vidaGoku > 0;
//const supermanSigueVivo = () => vidaSuperman > 0;

const ambosMuertos = () => vidaGoku === 0 && vidaSuperman ===0;

const ambosSiguienVivos = () => vidaGoku > 0 && vidaSuperman > 0

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER ) + MIN_POWER);

while(ambosSiguienVivos()){
	round++;
	console.log(`Round ${round}`);

	const golpeGoku = calcularGolpe();
	const golpeSuperman = calcularGolpe();

	if(golpeGoku <golpeSuperman){
		console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
		vidaSuperman -= golpeGoku;
		console.log(`Superman queda con ${vidaSuperman} de vida`);
	}else{
		console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`);
		vidaGoku -= golpeSuperman;
		console.log(`Goku queda con ${vidaGoku} de vida`);
	}
	
}
if(gokuSigueVivo()){
		console.log(`Goku sigue vivo su vida es de ${vidaGoku}`);
	}else{
		console.log(`Superman sigue vivo su vida es de ${vidaSuperman}`);
	}