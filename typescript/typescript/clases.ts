(() => {

    /*class Primaris{

        nombre: string;
        capitulo: string;
        rango: string;
        puedePelear: boolean;
        participacionBatallas: number;


        constructor(nombre:string, capitulo:string){
            this.nombre = nombre;
            this.capitulo = capitulo;

        }
    }*/



    class Primaris {

        //nombre: string;
        //capitulo: string;
        //rango: string;
        //puedePelear: boolean;
        //participacionBatallas: number;


        constructor(public nombre: string, public capitulo: string, public rango?: string,
            public puedePelear: boolean = true, public participacionBatallas: number=250) {


        }
    }
    const titus = new Primaris('Titus', 'Ultramarines');

    console.log(titus);

})();
