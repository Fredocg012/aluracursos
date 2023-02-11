// Palabra reservada Const
/*  Espacio en memoria que luego de ser asignado en
    memoria no cambia en el tiempo.
*/

const valorPasaje = 1650;
console.log(valorPasaje);

const nombrePasajero = "Alferdo";
const apellidoPasajero = "Correa";
console.log(nombrePasajero);
console.log(apellidoPasajero);

// Palabra let
/*
    Espacio en memoria que puede cambiar durante la ejecución
    del programa.
*/

let nombreComlpletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreComlpletoPasajero);

// Palabra reservada var
/*
    Espacio de memoria que puede cambiar durante la ejecución
    del programa.
    El alcance
*/

var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoDelPasajero);

// Bloque
{
    let nombreComlpletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Variable con let: " + nombreComlpletoPasajero);
    console.log("Variable con var: " + nombreCompletoDelPasajero);
}