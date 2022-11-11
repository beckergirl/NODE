
//// RETO 3 //// MODULO 3 / DÍA 1

/* • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el módulo
readline de node y solicita los valores del name, surname y age a través de la consola.

• Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método readline.
• Este ejercicio debe hacerse en una única ejecución de JavaScript. */

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const fs = require("fs")


let persona2 = { name : "",surname : " ",age : "" }; 


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

            fs.writeFile("persona2.json", JSON.stringify(persona2), function(){

                fs.readFile("persona2.json", "utf-8",(err, persona2) => {
            
                    if(err){
            
                        console.log(err);
            
                    }else{
            
                        console.log(JSON.parse(persona2));
            
                    }})})})})})
        

