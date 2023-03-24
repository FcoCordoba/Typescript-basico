(function () {

    const gigaChad = {
        nombre: 'Lysander',
        clave: 'Señor del capitulo de los Puños Imperiales',
        poder: 'SI'
    }

    const extraer = ({nombre, clave}:any) => {

        //const { nombre, clave } = gigaChad;

        console.log(nombre);
        console.log(clave);
    }

    //extraer(gigaChad);


    const gigaChads: string[] = ['Marneus Calgar', "Tu'shan", 'Azrael'];
    const [Estratega, Fuego, Caballero] = gigaChads;

    //console.log(Estratega);
    //console.log(Fuego);
    //console.log(Caballero);
    
    
    const extraerArr = ([MarneusCalgar, Tu_shan, Azrael]: string[]) =>{
        console.log(MarneusCalgar);
        console.log(Tu_shan);
        console.log(Azrael);
    }

    extraerArr(gigaChads);


})();
