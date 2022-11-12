///// RETOS //// MODULO 3 / DÍA 2 / RETO 4 

/* Hacer los retos 2, 3 y 4 de ayer utilizando las nuevas formas para gestionar promesas. */

/* Para poder hacer los ejercicios tendrás que hacer dos cosas:
● En primer lugar, importar el módulo fs/promises, para que los métodos de fs devuelvan promesas
● Por otro lado, el módulo readline no tiene ninguna opción para devolver promesas, por lo que tendrás que usar este código para poder tratarlo como una promesa.
Hacer estos retos en una nueva carpeta dentr de la rama dia2 subir los cambios y hacer el merge con la rama master. */

const fs = require("fs/promises");


/// THEM / CATCH ///

function writeAndRead(path, persona) {
    fs.writeFile(path, JSON.stringify(persona))

        .then(() => {
            return fs.readFile(path, "utf-8")

        })
        .then(data => {
            console.log(JSON.parse(data));
        })
        .catch(err => {
            console.log(err);
        })

}
writeAndRead("./persona.json", { name: "Ann", surname: "Becker",age: 62 })

/// ASYNC / AWAIT ///

function writeAndRead2(path, persona) {

    async function asyncAwait() {
        await fs.writeFile(path, JSON.stringify(persona))
        const guardBox = await fs.readFile(path, "utf8")
        console.log(JSON.parse(guardBox));

    }
    asyncAwait()

}

writeAndRead("./persona2.json", { name: "Angela", surname: "Martinez" , age: 29})

module.exports = { writeAndRead,  writeAndRead2};