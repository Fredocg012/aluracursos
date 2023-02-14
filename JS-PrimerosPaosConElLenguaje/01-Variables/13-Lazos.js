const ciudadesDisponibes = ["CDMX", "Puebla", "Oaxaca", "Guerrero", "Veracruz", "Yucatán"];
const ciudadDestino = "Yucatán";
const precioViaje = new Array(100, 200, 300, 400, 500, 600);
const presupuesto = 400;

// While... 0 o más veces.
// Do... 1 o más veces.

let i = 0;

while(precioViaje[i] < presupuesto && i < ciudadesDisponibes.length )
{
    if(i == ciudadesDisponibes.length)
    {
        console.log("No tenemos ciudades disponibles");
    }
    
    else
    {
        console.log("Puedes comprar pasaje para: " + ciudadesDisponibes[i]);
    }
    
    i++;
}

