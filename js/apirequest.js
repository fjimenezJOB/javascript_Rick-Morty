/*
    Autor: Fran Jiménez
    Gmail: fjimenezjob@gmail.com
    Version: 0.01

    Apis en Javascript usando JQuery -> Conseguir la siguiente frase plantilla con los datos de los personajes provinientes de la api:
        "Hola mi nombre es Rick Sanchez, mi especie es Human, soy originario de Earth (C-137)"
*/

//  Definimos la URL de la api a la que le vamos a pedir información
const URL_API = "https://rickandmortyapi.com/api/";
const PERSONAJE = "character/:id";
const OPCIONES = { crossDomain : true };

// Arrow function que imprime la frase del personaje
const imprimir = objeto => document.write(`<p class="main-article-contenido">Hola mi nombre es ${objeto.name}, mi especie es ${objeto.species}, provengo de ${objeto.origin['name']}.</p><br><br>`);


function getPersonaje(id){
    // Hace la peticion a la API y envia el resultado a la funcion imprimir para que imprima la frase
    const URL = `${URL_API}${PERSONAJE.replace(':id', id)}`;
    $.get(URL, OPCIONES, imprimir);
}

// Establecemos un array donde se van a cargar los ids de los personajes a consultar
var personajesRq = [];
do{
    var preguntarId = prompt('Introduce las ids de los personajes que desees, cuando quieras consultar escribe:  consultar');
    // Cuando el usuario introduzca 'consultar' la palabra no se añadirá al array de personajesRq
    if(preguntarId !== 'consultar'){
        personajesRq.push(preguntarId);
    }
    // El do while se para cuando introducimos : 'consultar' en el prompt
} while(preguntarId !== 'consultar');

// por cada id en el array de personajesRq llamamos a la funcion para que pida la información de cada uno
for (id of personajesRq){
    getPersonaje(id);
}
