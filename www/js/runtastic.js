const nombre = "Luis Angel"

const dias =[ 		//ARREGLO DE DIAS
"Lunes",
"Martes",
"Miercoles",
"Jueves",
"Viernes",
"Sabado",
"Domingo"
]

function promedioCorrer() {
	const min = 5
	const max = 15
	//MATH.ROUND (VALORES ENTERIOS)
	return Math.round((Math.random() * (max - min)) + min);		
}

let totalKms = 0
const length = dias.length

for (let i = 0; i < length; i++) {
	const kms = promedioCorrer()
	totalKms += kms //SE LE ASIGNA EL TOTAL DE KILOMETROS A LOS KILOMETORS (kms)
	console.log(`El dia ${dias[i]}, ${nombre} corrio ${kms} kms`)
}

const promedioKms = totalKms / length
console.log(`En promedio, ${nombre} corrio ${promedioKms.toFixed(2)} kms, en la semana`)