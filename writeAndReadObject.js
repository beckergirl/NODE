/* • Crear un directorio que se llame proyecto_node.
• Dentro, inicia un proyecto de Node.
• Una vez ahí, crea tres archivos, index.js, writeAndReadObject.js y readConsole.js.
• Mete la parte de fs en una función en writeAndReadObject, su cabecera debe ser: writeAndRead(path, obj)
En esta función se debe escribir en el fichero cuyo nombre está en el parámetro path el objeto literal guardado en el parámetro obj. Y luego leer dicho fichero y mostrarlo
por consola.
Ejemplo: writeAndRead(“./miFichero.json”, {calle: “Teruel”, numero: 8}) */

const fs = require('fs');


function writeAndRead(path, persona){

    fs.writeFile(path, JSON.stringify(persona), (any)=> {

                fs.readFile(path, "utf-8",(any, persona)=>{console.log(JSON.parse(persona))});

                },); 

};

/* writeAndRead("./persona.json", { name: "Irene", surmane: "Becker", age: 40}); */

module.exports = { writeAndRead }