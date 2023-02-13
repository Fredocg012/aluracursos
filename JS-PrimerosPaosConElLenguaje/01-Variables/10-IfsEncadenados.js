// Operadores de coomparación.

const ciudadesDisponibes = ["CDMX", "Puebla", "Oaxaca", "Guerrero", "Veracruz"];
const ciudadDestino = "Yucatán";

let edadPasajero = 17;
let estaAcompañado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);

// Verificando si cumple las reglas

if(edadPasajero >= 18 || estaAcompañado)
{
    // Evaluamos si está disponible para viajar
    if(ciudadesDisponibes.lastIndexOf(ciudadDestino) > -1)
    {
        console.log("Pasaje disponible para la venta");
    }
    else
    {
        console.log("Ciudad no disponible para viajar");
    }
}

else
{
    if(edadPasajero >= 16 && ciudadDestino == "Puebla")
    {
        
        console.log("Pasajero no cumple las reglas");
    }
    else
    {
        console.log("El pasajero cumple las reglas");
    }
}