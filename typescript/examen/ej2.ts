(() => {

// Cree una interfaz que sirva para validar el siguiente objeto

  interface heroe {
    nombre: string;
    artesMarciales: string[];
}

 const nombreHeroe = (heroe: heroe) => {
     
    console.log(`Su nombre es: ${heroe.nombre} y derrota a los malos`)
 }

 const comoLucha = (heroe: heroe) => {
     
    console.log(`Usa estas artes marciales: ${heroe.artesMarciales} `)
 }

 const heroeNoche: heroe = {
    nombre: 'Bruce Wayne',
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
 }

 nombreHeroe(heroeNoche);
 comoLucha(heroeNoche);


})();
