// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"

(function () {

    function activar(quien:string, poder?: number, objeto: string='Arco') {
         if (poder) {
             console.log(`${quien} es un ${objeto} de poder ${poder}.`)
         }else{
             console.log(`${quien} es un ${objeto}.`);
         }
    }
 
    activar('Surca Cielos', 2500);  
 
 })();



