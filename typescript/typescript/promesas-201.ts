( () =>{

    const retirarNenero = (cuantoRetirar: number): Promise<number> =>{

        let neneroActual = 25000;

        return new Promise((resolve, reject) =>{
            if (cuantoRetirar > neneroActual) {
                reject('No puedes sacar más de lo que tienes grillao');
            }else{
                neneroActual -= cuantoRetirar;
                resolve(neneroActual);
            }
        });
    }
    
    retirarNenero(300)
        .then(neneroActual => console.log(`Me quedan ${neneroActual} euros`))
        .catch(console.warn);

})();
