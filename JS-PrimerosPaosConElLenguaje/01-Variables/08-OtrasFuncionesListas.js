const ciudadesDisponibes = ["CDMX", "Puebla", "Oaxaca", "Guerrero", "Veracruz"];
const paisesDisponibles = ["México", "Francia", "Italia", "España", "Croacia"];

// Contar el númerod e elementos de una lista
const cantidadDeCiudades = ciudadesDisponibes.length;
const cantidadDePaises = paisesDisponibles.length;

console.log(`Cantidad de ciudades = ${cantidadDeCiudades}`);
console.log(`Cantidad de paises= ${cantidadDePaises}`);

// Eleminar el primer elemento de la lista
ciudadesDisponibes.shift();
console.log(ciudadesDisponibes);

// Eliminar el último elemento.
paisesDisponibles.pop();
console.log(paisesDisponibles);

console.log(`Cantidad de ciudades = ${ciudadesDisponibes.length}`);
console.log(`Cantidad de paises= ${paisesDisponibles.length}`);

// Filtrar elementos de la lista.
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

// Unificar los elementos de una cadena.
console.log(paisesDisponibles.join(" "));

// Ordenar la lista
console.log(paisesDisponibles.sort());

// Conociendo la posición
console.log(`México está en la posición: ${paisesDisponibles.indexOf("México")}`);

// Unificar dos listas.
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibes);

console.log(listaPaisesYCiudades.join(" "));



