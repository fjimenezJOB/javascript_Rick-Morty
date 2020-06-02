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

const imprimir = objeto => document.write(`<p class="main-article-contenido">Hola mi nombre es ${objeto.name}, mi especie es ${objeto.species}, provengo de ${objeto.origin['name']}.</p><br><br>`);


function getPersonaje(id){
    const URL = `${URL_API}${PERSONAJE.replace(':id', id)}`;
    $.get(URL, OPCIONES, imprimir);
}

var personajesRq = [];
do{
    var preguntarId = prompt('Introduce la id del personaje, cuando quieras consultar escribe:  consultar');

    if(preguntarId !== 'consultar'){
        personajesRq.push(preguntarId);
    }

} while(preguntarId !== 'consultar');


for (id of personajesRq){
    getPersonaje(id);
}
