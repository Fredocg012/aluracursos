const ciudad_1 = "CDMX";
const ciudad_2 = "Puebla";
const ciudad_3 = "Oaxaca";


//  Definición de una lista con tipo de dato alfanumérico
const ciudadesDisponibes = new Array("CDMX", "Puebla", "Oaxaca");
console.log(ciudadesDisponibes);

// Definición de una  lista de forma abreviada.
const paisesDisponibles = ["México", "Francia", "Italia"];
console.log(paisesDisponibles);

// Agregar elementos al final con la función push()
{
    ciudadesDisponibes.push("Guerrero");
    paisesDisponibles.push("Alemania");
}

console.log(ciudadesDisponibes);
console.log(paisesDisponibles);

// Agregar elementos al principio con la función unshift()

ciudadesDisponibes.unshift("Durango");
paisesDisponibles.unshift("Suiza");

console.log(ciudadesDisponibes);
console.log(paisesDisponibles);

// Mostrar el elemento en la posición n
console.log("");
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibes[0]);

// Borrar elementos yagregar elementos
console.log("");
paisesDisponibles.splice(0,1,"Brasil", "Usurguay");
console.log(paisesDisponibles);










