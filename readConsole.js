/* • Crear un directorio que se llame proyecto_node.
• Dentro, inicia un proyecto de Node.
• Una vez ahí, crea tres archivos, index.js, writeAndReadObject.js y readConsole.js.
• Mete la parte de fs en una función en writeAndReadObject, su cabecera debe ser: writeAndRead(path, obj)
En esta función se debe escribir en el fichero cuyo nombre está en el parámetro path el objeto literal guardado en el parámetro obj. Y luego leer dicho fichero y mostrarlo
por consola.
Ejemplo: writeAndRead(“./miFichero.json”, {calle: “Teruel”, numero: 8}) */
/* 
• Mete la parte de readline en otra función en readConsole.js, su cabecera debe ser: readConsole(callback)
Esta función debe preguntar por consola por el name, surname y age del usuario. Guardar dichos datos en un objeto literal, y aplicarle la callback recibida como parámetro de entrada de readConsole.
Ejemplo: readConsole(console.log) Debe imprimir por consola el objeto creado.
• Estas dos funciones deben ser independientes, esto es que si se desea escribir y leer los datos de un objeto en un fichero se pueda hacer independiente de si este objeto se ha creado a mano o con el módulo readConsole.
• Además la importanción de los módulos creados se debe hacer solo en el fichero index.js. De tal forma que con una sola llamada desde index.js obtengamos el mismo resultado que en el ejercicio anterior. */


const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);


function readConsole (callback){

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
    
}
/* 
readConsole(console.log); */

module.exports = {readConsole}