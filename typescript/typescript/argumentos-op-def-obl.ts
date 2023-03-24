(function () {

   function activar(quien:string, momento?: string, objeto: string='Desmebradora') {
        if (momento) {
            console.log(`${quien} reparo la ${objeto} durante el milenio ${momento}.`)
        }else{
            console.log(`${quien} reparo la ${objeto}.`);
        }
   }

   activar('Angron', '40000');  

})();
