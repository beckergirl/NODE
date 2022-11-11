
///// RETO 2 //// MODULO 3 / DÍA 1
/* 
• Crea un objeto con las siguientes propiedades: name, surname, age.
• Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
objeto e imprimelo por consola.
• Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
ejecutar el archivo de nuevo. */



let persona = { name: "Irene", surmane: "Becker", age: 40};


const fs = require ("fs");


fs.writeFile("persona.json", JSON.stringify(persona), function(){

    fs.readFile("persona.json", "utf-8",(err, data) => {

        if(err){

            console.log(err);

        }else{

            console.log(JSON.parse(data));

        }
    })
        
});

