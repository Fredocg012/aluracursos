const presupuestoDisponible = 410;

//Lista de mapas
const datos = 
[
    {
        'ciudad' : 'CDMX',
        'precio' : 500
    },

    {
        'ciudad' : 'Puebla',
        'precio' : 400
    },

    {
        'ciudad' : 'Oaxaca',
        'precio' : 380
    },

    {
        'ciudad' : 'Guerrero',
        'precio' : 200
    },
];

let i = 0;
let ciudadSeleccionada = '';

for(i = 0; i< datos.length; i++)
{
    if(datos[i].precio < presupuestoDisponible)
    {
        ciudadSeleccionada = datos[i].ciudad;
    }
}

if(ciudadSeleccionada == "")
{
    console.log("No tenemos pasajes disponibles");
}

else
{
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}