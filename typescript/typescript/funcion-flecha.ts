(function () {
    // Ejemplo con string
    // Funcion asignada a una variable
   const miFuncion = function(a: string){
        return a.toUpperCase();
   }

   const miFuncionF = (a: string) => a.toUpperCase();
    
   console.log(miFuncion('Normal'));
   console.log(miFuncionF('Con flecha'));

   // Ejemplo con numeros
   const sumarN = function (a: number, b: number) {
        return a + b;
   }

   const sumarF = (a: number, b:number) => a + b;

   console.log(sumarN(25,3));
   console.log(sumarF(5,30));

   // Ejercicio
   const guilliman = {
    nombre: 'Roboute',
    excelPrime(){

        setTimeout(  () => {
            console.log(`${this.nombre} Guilliman`);
        }, 1000)
        
    }
   }

   guilliman.excelPrime();

})();
