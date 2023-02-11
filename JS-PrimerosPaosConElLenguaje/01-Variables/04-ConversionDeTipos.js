// Tipos de datos
// Alfanumérico

let nombrePasajero = "Alfredo Correa";
console.log(nombrePasajero);
nombrePasajero = "Pulgar Correa";
console.log(nombrePasajero);

// Numérico
let valorboleto = 1650;
console.log(valorboleto);
const tasaEmbarque = 60;
var gestionAgencia = 120.5;


// Lógicos
let boletoActivo = true;
console.log(boletoActivo);

// Operaciones aritméticas
// Suma

let totalBoletos = 1700 + 300 + 801 + 10;
console.log(totalBoletos);

totalBoletos = totalBoletos + tasaEmbarque + gestionAgencia;
console.log(totalBoletos);

// Orden de presedencia

let totalBoletos2 = valorboleto + valorboleto*tasaEmbarque + gestionAgencia;
console.log(totalBoletos2);

totalBoletos2 = (valorboleto + valorboleto) *tasaEmbarque + gestionAgencia;
console.log(totalBoletos2);

// Concatenación de texto
let nombrePasajero2 = "Alfredo";
let apellidoPasajero2 = "Correa";

let nombreCompleto = nombrePasajero2 + (" ") + apellidoPasajero2;
console.log(nombreCompleto);



