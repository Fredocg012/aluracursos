// Operadores de coomparación.

const ciudadesDisponibes = ["CDMX", "Puebla", "Oaxaca", "Guerrero", "Veracruz"];
const ciudadDestino = "Yucatán";

// if : Evalua una condición
if (ciudadesDisponibes.indexOf("Oaxaca"))
{
    console.log("Pasaje disponible para venta");
}
else
{
    console.log("Pasaje no disponible para venta");
}

// === extrictamente idéntico
const valorPasaje = "1000";
if (valorPasaje === 1000)
{
    console.log("El pasaje vale: $1000");
}
else
{
    console.log("No hay precio para el pasaje");
}

// Operadores lógicos
//  Y(AND) - O (OR) - NO (NOT)
//  AND = &&
//  OR = ||
//  NOT = !

// AND
const edadPasajero = 17;
if ((ciudadesDisponibes.indexOf("Oaxaca")) && edadPasajero > 18)
{
    console.log("Pasaje disponible para venta");
}
else
{
    console.log("Pasaje no disponible para venta");
}

// OR

if ((ciudadesDisponibes.indexOf("Oaxaca")) || edadPasajero > 18)
{
    console.log("Pasaje disponible para venta");
}
else
{
    console.log("Pasaje no disponible para venta");
}

// Combinando AND y OR
var estaAcompañado = true;

if ((ciudadesDisponibes.indexOf("Oaxaca")) &&(( edadPasajero > 18) || estaAcompañado))
{
    console.log("Pasaje disponible para venta");
}
else
{
    console.log("Pasaje no disponible para venta");
}

// NOT
estaAcompañado = false;

if (!(ciudadesDisponibes.indexOf("Oaxaca")) &&(( edadPasajero > 18) || estaAcompañado))
{
    console.log("Pasaje disponible para venta");
}
else
{
    console.log("Pasaje no disponible para venta");
}
