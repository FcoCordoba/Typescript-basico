(function () {

function getEdad() {
    return 10000 + 500 + 500;
}
    
const nombre = 'Roboute';
const apellido = 'Guilliman';
const edad = 10000;

// Roboute Guilliman (11000)
//const salida = nombre + " " + apellido + " (" + edad+")";
//const salida = `${ nombre } ${ apellido } (${ edad })`;
const salida = `${ nombre } \n${ apellido } \n(${ getEdad() })`;

console.log(salida);
}) ();
 