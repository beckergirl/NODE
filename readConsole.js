///// RETOS //// MODULO 3 / DÍA 2 / RETO 4 

/* Hacer los retos 2, 3 y 4 de ayer utilizando las nuevas formas para gestionar promesas. */

/* Para poder hacer los ejercicios tendrás que hacer dos cosas:
● En primer lugar, importar el módulo fs/promises, para que los métodos de fs devuelvan promesas
● Por otro lado, el módulo readline no tiene ninguna opción para devolver promesas, por lo que tendrás que usar este código para poder tratarlo como una promesa.
Hacer estos retos en una nueva carpeta dentr de la rama dia2 subir los cambios y hacer el merge con la rama master. */

/// reto 4 /// (ayer)

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);


/* function readConsole (callback){

    let persona = {};

    rl.question("introduce tu nombre: ", (name) => {

        persona.name = name;

        rl.question("Introduce tu apellido: ", (surname) => {

            persona.surname = surname;
  
            rl.question("Introduce tu edad: ", (age) => {
                
                persona.age = age;
        
                rl.close();
    
                callback(persona);
            })
        })
    })
    
} */
/* 
readConsole(console.log); */
 

/// THEM / CATCH ///

function readConsole (callback){

    let persona = {};

    pregunta("Name? ")

        .then((name) => {
            persona.name = name;
            return pregunta("Surname? ");
        })
        .then((surname) => {
            persona.surname = surname;
            return pregunta("Age? ");
        })
        .then((age) => {
            persona.age = age;
            return callback(persona);
        })
        .catch((err) => {
            console.log(err);
        })
}



/// ASYNC / AWAIT ///

async function readConsole2 (callback){

    try {

        let persona2 = {};

        let preguntaName = await pregunta("Name? ")
        persona2.name = preguntaName;

        let preguntaSurname = await pregunta("Surname? ")
        persona2.surname = preguntaSurname;

        let preguntaAge = await pregunta("Age? ")
        persona2.age = preguntaAge;

        await callback(persona2)

    } catch (err) {

        console.log(err);
    }
} 


module.exports = { readConsole, readConsole2 }
