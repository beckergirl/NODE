//NODE DÍA 3 / RETO 2

// paso 3 // funciona perfectamente y está corregido.

const { Professional } = require("../professional")

let professional = null; 

function getStart(request, response){ //este paso es igual

    let respuesta = {error: true, codigo: 200, mensaje: "Punto de inicio"};
    response.send(respuesta);
} 

function getProfessional(request, response){ // get: pedir datos.

    let respuesta;

    if(usuario != null)

       respuesta = professional;
    else 
       
       respuesta = {error: true, código: 200, mensaje: "El profesional no existe"}

    response.send(respuesta);
}


function postProfessional(request, response){ // post: añadir datos.

    let respuesta;

    console.log(request.body)

    if(professional === null){

       professional = new Professional(request.body.name,
                                       request.body.age,
                                       request.body.nationaliy,
                                       request.body.profession);

        respuesta = {error: false, codigo: 200,
                     mensaje: "Profesional creado", resultado: professional}   
                    
    }else{

        respuesta = {error: true, codigo: 200,
                     mensaje: "El profesional ya existe", resultado: null}
    }         
    response.send(respuesta);                
}


function putProfessional(request, response){ // put: modificar datos.

    let respuesta;

    if(professional != null){

        professional.name = request.body.name;
        professional.age = request.body.age;
        professional.nationality = request.body.nationality;
        professional.profession = request.body.profession;

        respuesta = {error: false, codigo: 200,
                     mensaje: "Profesional actualizado", resultado: professional}

    }else{

        respuesta = {error: true, codigo: 200,
                     mensaje: "El profesional no existe", resultado: professional}
    }
    response.send(respuesta);
}


function deleteProfessional(request, response){ // delete: borrar datos.

    let respuesta;

    if(professional != null){

        professional = null;
        respuesta = {error: false, codigo: 200,
                     mensaje: "Profesional borrado", resultado: professional}

    }else{

        respuesta = {error: true, codigo: 200,
                     mensaje: "El profesional no existe", resultado: professional}
    }

    response.send(respuesta);
}



module.exports = { getStart, getProfessional, postProfessional, putProfessional, deleteProfessional }