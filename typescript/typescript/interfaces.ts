( () => {

    interface adepCustode {
        nombre: string;
        edad: number;
    }

     const enviarMision = (adepCustode: adepCustode) => {
         
        console.log(`Enviando a ${adepCustode.nombre} a la mision`)
     }

     const regresarATerra = (adepCustode: adepCustode) => {
         
        console.log(`Enviando a ${adepCustode.nombre} a la mision`)
     }

     const captnGeneral: adepCustode = {
        nombre: 'Trajan Valoris',
        edad: 1000
     }

     enviarMision(captnGeneral);
     regresarATerra(captnGeneral);

})();
