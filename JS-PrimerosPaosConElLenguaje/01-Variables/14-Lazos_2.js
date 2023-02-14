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

do
{
    if(datos[i].precio < presupuestoDisponible)
    {
        ciudadSeleccionada = datos[i].ciudad;
    }
    i++;
}while(i < datos.length && ciudadSeleccionada == "") // Verificar primero que tienes espacio en la lista
//console.log(i);
if(i > datos.length)
{
    console.log("No tenemos pasajes disponibles");
}

else
{
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}