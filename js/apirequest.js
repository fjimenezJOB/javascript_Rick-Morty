/*
    Autor: Fran Jiménez
    Gmail: fjimenezjob@gmail.com
    Version: 0.01

    Apis en Javascript usando JQuery -> Conseguir la siguiente frase con los datos provinientes de la api:
        "Hola mi nombre es Rick Sanchez, mi especie es Human, soy originario de Earth (C-137)"
*/

//  Definimos la URL de la api a la que le vamos a pedir información
const URL_API = "https://rickandmortyapi.com/api/";
const RICK = "character/:id";
const OPCIONES = { crossDomain : true };



// METODOS
const imprimir = personaje => document.write(`Hola mi nombre es ${personaje.name}, mi especie es ${personaje.species}, provengo de ${personaje.origin['name']}.<br><br>`);


function getPersonaje(id){
    const URL = `${URL_API}${RICK.replace(':id', id)}`;
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