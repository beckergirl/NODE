///// RETOS //// MODULO 3 / DÍA 2 / RETO 4 

/* Hacer los retos 2, 3 y 4 de ayer utilizando las nuevas formas para gestionar promesas. */

/* Para poder hacer los ejercicios tendrás que hacer dos cosas:
● En primer lugar, importar el módulo fs/promises, para que los métodos de fs devuelvan promesas
● Por otro lado, el módulo readline no tiene ninguna opción para devolver promesas, por lo que tendrás que usar este código para poder tratarlo como una promesa.
Hacer estos retos en una nueva carpeta dentr de la rama dia2 subir los cambios y hacer el merge con la rama master. */


const { readConsole } = require("./readConsole.js");
const { writeAndRead } = require("./writeAndReadObject.js");


readConsole(function (persona) {
    writeAndRead("persona.json", persona)
});