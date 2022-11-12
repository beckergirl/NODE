
///// RETOS //// MODULO 3 / DÍA 2 / RETO 3 TERMINADO!! NO CORREGIDO

/* Hacer los retos 2, 3 y 4 de ayer utilizando las nuevas formas para gestionar promesas. */

/* Para poder hacer los ejercicios tendrás que hacer dos cosas:
● En primer lugar, importar el módulo fs/promises, para que los métodos de fs devuelvan promesas
● Por otro lado, el módulo readline no tiene ninguna opción para devolver promesas, por lo que tendrás que usar estecódigo para poder tratarlo como una promesa.
Hacer estos retos en una nueva carpeta dentr de la rama dia2 subir los cambios y hacer el merge con la rama master. */

const fs = require("fs/promises");
const readline = require("readline");

function pregunta (pregunta){

    const question = new Promise((resolve, reject)=>{

        const rl = readline.createInterface({

            input: process.stdin,
            output: process.stdout
        })
        rl.question(pregunta,(respuesta)=>{

            resolve(respuesta);
            rl.close();
        })
    })
    return question;
}

/// reto 3 /// (ayer)

/* const readline = require("readline"); */
const rl = readline.createInterface(process.stdin, process.stdout);

/* const fs = require("fs") */


let persona2 = { name : "",surname : " ",age : "" }; 


/* 
rl.question("Name?",(name) => {

    console.log("Your name is " + name);

    persona2.name = name;

    rl.question("Surname?",(surname) => {

        console.log("Your surname is " + surname);

        persona2.surname = surname;

        rl.question("Age?", (age) => {

            console.log("Your age ir " + age);

            persona2.age = age;

            rl.close();

            fs.writeFile("reto3.json", JSON.stringify(persona2), function(){

                fs.readFile("reto3.json", "utf-8",(err, persona2) => {
            
                    if(err){
            
                        console.log(err);
            
                    }else{
            
                        console.log(JSON.parse(persona2));
            
                    }})})})})})

 */
/// THEM / CATCH ///

pregunta("Name? ")

.then((name)=>{

    persona2.name = name;
    return pregunta ("Surname? ");
})
.then((surname) =>{

    persona2.surname = surname;
    return pregunta ("Age? ");
    
})
.then((age) =>{

    persona2.age = age;
    return fs.writeFile("./persona2.json", JSON.stringify(persona2))
    
})
.then(()=>{

    return fs.readFile("./persona2.json", "utf-8");
}) 
.then((data)=>{

    console.log(JSON.parse(data));
})
.catch(err =>{

    console.log(err);

})

/// ASYNC / AWAIT ///

async function asyncAwait(){

    try{

        let name = await pregunta("Name? ");
        persona2.name = name;

        let surname = await pregunta("Surname? ");
        persona2.surname = surname;

        let age = await pregunta("Age? ");
        persona2.age = age;
        
        await fs.writeFile("persona2.json", JSON.stringify(persona2));
        const nuevo = await fs.readFile("persona2.json", "utf-8");

        console.log(JSON.parse(nuevo));

    }catch{

        console.log(error);
    }
} 
asyncAwait() 




