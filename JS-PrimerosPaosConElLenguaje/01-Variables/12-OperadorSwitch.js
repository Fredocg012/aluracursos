const ciudadesDisponibes = ["CDMX", "Puebla", "Oaxaca", "Guerrero", "Veracruz", "Yucatán"];
const ciudadDestino = "Yucatán";

let valorPasaje = 0;

// Condición con if
/*

if(ciudadesDisponibes.indexOf(ciudadDestino) > -1)
{

    if(ciudadDestino == "Guerrero")
    {
        valorPasaje = 50;
    }
    

    else if(ciudadDestino == "Puebla")
    {
        valorPasaje = 200;
    }

    else if(ciudadDestino == "Yucatán")
    {
        valorPasaje = 300;
    }

}


console.log(`El valor del pasaje es: ${valorPasaje}`);

*/

// Condición con switch

switch(ciudadDestino)
{
    case "CDMX":
        valorPasaje = 100;
        break;
    
    case "Yucatán":
        valorPasaje = 200;
        break;

    case "Guerrero":
        valorPasaje = 300;
        break;

    default:
        console.log("Destino no válido");
}

console.log(`El valor de pasaje es: ${valorPasaje}`);