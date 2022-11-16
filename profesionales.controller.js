// reto 3 (NODE) apiRest con professionales //////NO ME FUNCIONA EL DELETE !!

const { Professional } = require("../professional")


let profesionales = [ ]; // array vacío de profesionales


function getStart(request, response){ //este paso es igual

    let respuesta = {error: true, codigo: 200, mensaje: "Punto de inicio"}
    response.send(respuesta);
} 


function getProfesionales(request, response){ // get: pedir datos.

    let posicion = request.body.position //declaro una variable nueva para acceder a la posición de cada profesional.
    let respuesta;

    if(posicion == null){

        respuesta = profesionales;                   

    }else if (profesionales[posicion] != null){           

        respuesta = profesionales[posicion];              

    }else{

        respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
    } 

    response.send(respuesta);
}


function postProfessional(request, response){  // post: añadir datos.

    let anotherProfessional = new Professional(request.body.name,
                                               request.body.age,
                                               request.body.nationality,
                                               request.body.profession);

    let respuesta;
    console.log(request.body);

    if( anotherProfessional !== null){

        profesionales.push(anotherProfessional);  // añade un nuevo profesional.

        respuesta = { error: false, codigo: 200,
                      mensaje: "Profesional creado", resultado: anotherProfessional}

    }else{

        respuesta = { error: true, codigo: 200,
                      mensaje: "El Profesional ya existe", resultado: null}
    }  

    response.send(respuesta);          
}


function putProfessional(request, response){  // put: modificar datos.

    let respuesta;

    let posicion = request.body.position;
    let anotherProfessional = new Professional(request.body.name,
                                               request.body.age,
                                               request.body.nationality,
                                               request.body.profession);
    if (profesionales[posicion] != null){

        profesionales[posicion] = anotherProfessional;
        respuesta = {error: false, codigo: 200,
                     mensaje: "Profesional actualizado", resultado: anotherProfessional}
    }else{

        respuesta = {error: true, codigo: 200,
                     mensaje: "El profesional no existe", resultado: anotherProfessional}

    }
                    
    response.send(respuesta);
}


function deleteProfessional(request, response){  // delete: borrar datos.

    let respuesta;
    let posicion = request.body.position;

    if(profesionales[posicion] != null){ /// splice() que elimina por posición. 1 es el elemento que se va a borrar.
    
        profesionales.splice(posicion,1);/// eliminar con shift() / sólo elimina el último
        respuesta = {error: false, codigo: 200,
                     mensaje: "Profesional borrado"} //he probado con pop() /elimina sólo el primer elemento y el shift() sigue diciendo "el profesional no existe"
    }else{

        respuesta = {error: true, codigo: 200,
                     mensaje: "El profesional no existe", resultado: profesionales[posicion]}
    }
    response.send(respuesta);
}




module.exports = { getStart, getProfesionales, postProfessional, putProfessional, deleteProfessional };