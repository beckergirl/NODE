///// RETOS //// MODULO 3 / DÍA 2 / RETO 2 CORREGIDO!!!!

/* Hacer los retos 2, 3 y 4 de ayer utilizando las nuevas formas para gestionar promesas. */

/* Para poder hacer los ejercicios tendrás que hacer dos cosas:
● En primer lugar, importar el módulo fs/promises, para que los métodos de fs devuelvan promesas
● Por otro lado, el módulo readline no tiene ninguna opción para devolver promesas, por lo que tendrás que usar este código para poder tratarlo como una promesa.
Hacer estos retos en una nueva carpeta dentr de la rama dia2 subir los cambios y hacer el merge con la rama master. */

/// reto 2 /// (ayer)
let persona = { name: "Irene", surmane: "Becker", age: 40};


/* const fs = require ("fs");  */ 
const { error } = require("console");

const fs = require("fs/promises");

const readline = require("readline");
/* 

fs.writeFile("reto2.json", JSON.stringify(persona), function(){

    fs.readFile("reto2.json", "utf-8",(err, data) => {

        if(err){

            console.log(err);

        }else{

            console.log(JSON.parse(data));

        }
    })
    
}); */

/// THEM / CATCH ///

fs.writeFile("persona.json", JSON.stringify(persona))
.then(()=>{

    return fs.readFile("persona.json", "utf-8");
})
.then(data =>{

    console.log(JSON.parse(data));
})
.catch(err =>{

    console.log(err);

})
/// ASYNC / AWAIT ///

async function asyncAwait(){

    try{
        await fs.writeFile("reto2.json", JSON.stringify(persona));
        const nuevo = await fs.readFile("reto2.json", "utf-8");
        console.log(JSON.parse(nuevo));
    }catch{

        console.log(error);
    }
} 

