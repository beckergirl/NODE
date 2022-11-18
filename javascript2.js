
///importaba mal
class Professional{

    constructor(name, age, nationality , profession){

        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.profession = profession;
    }
}


/* let profesionales = [ ]; // array vacío de profesionales */

function getProfesionales(){ /// funciona!

    let formulario = document.getElementById("profesionales");
    formulario.innerHTML = " "; /// pedir info del front para rellenar formulario (usuario)

    let position = document.getElementById("position").value; //posicion para acceder a los profesionales.

    if(position){

        let url = "http://localhost:4000/profesionales?position=" + position;

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET" //nunca BODY!! 
    }

    fetch(url, param)
    .then(function(data)
    {
        return data.json();
    })
    .then(function(result)
    {      
        if (!result.error){      
                                       
        formulario.innerHTML +=  `<p><b>Nombre:</b> ${result.name}<br>  
                                 <b>Edad:</b> ${result.age}<br>
                                 <b>Nacionalidad:</b> ${result.nationality}<br>
                                 <b>Posición:</b>${result.profession}<br>
                                 </p>`
                                                        
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error);
    })
    } else {
        let url = "http://localhost:4000/profesionales";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET" /// jamás BODY!
    }

    fetch(url, param)
    .then(function(data)
    {
        return data.json();
    })
    .then(function(result){     

        if(!result.error){        

    result.forEach(function (professional){               
                                 
        formulario.innerHTML += `<p><b>Nombre:</b> ${professional.name}<br>  
                                 <b>Edad:</b> ${professional.age}<br>
                                 <b>Nacionalidad:</b> ${professional.nationality}<br>
                                 <b>Posición:</b>${professional.profession}<br>
                                 </p>`
    })                                                       
        }else{
            showToast("ERROR: " +  result.mensaje, "bg-danger")
        }
    })
    .catch(function(error){

        console.log(error);
        
    })
    }
    
}

function postProfessional(){   // post: añadir datos. (apuntes clase) *está bien! FUNCIONA

    let professional = new Professional(document.getElementById("name").value,
                                        document.getElementById("age").value,
                                        document.getElementById("nationality").value,
                                        document.getElementById("profession").value);
    
    const url = "http://localhost:4000/profesionales";

    if (validar(professional)){

        let param = 

            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(professional),
                method: "POST"
            }

        fetch(url, param)
        .then(function(data){

            return data.json();
        })
        .then(function(result){

            if(result.error){

                showToast("ERROR: " +  result.mensaje, "bg-danger");

            }else{

                showToast("Profesional Creado Correctamente", "bg-success");
            }

            console.log(result);
        })
        .catch(function(error){

            console.log(error);
        })
    }
}


function putProfessional(){  // put: MODIFICAR datos. // funciona / YA NO SE QUE HE HECHO QUE NO

    let position       = document.getElementById("position").value; 

    let putName        = document.getElementById("name").value;
    let putAge         = document.getElementById("age").value;
    let putNationality = document.getElementById("nationality").value;
    let putProfession  = document.getElementById("profession").value;
 

 /* let newProfessional = new Professional(document.getElementById("name").value,
                                        document.getElementById("age").value,
                                        document.getElementById("nationality").value,
                                        document.getElementById("profession").value,
                                        document.getElementById("position").value); */



 let url = "http://localhost:4000/profesionales?position=" + position; // tenía const ?? YA ME FUNCIONAAAAAA!

 let param = 
 {
     headers: {"Content-type": "application/json; charset= UTF-8"},
     body: JSON.stringify({name: putName, age: putAge, nationality: putNationality, profession: putProfession, position }),
     method: "PUT"
 }
 if(position != ""){

     fetch(url, param)
     .then(function(data)
     {
         return data.json();
     })
     .then((data) => {

         console.log(data);
         showToast("Profesional Modificado correctamente","bg-success");
     })
     .catch((error) => {

         console.log(error);
         showToast("ERROR: " +  result.mensaje, "bg-danger");
     })
 }else{
         
     showToast("Completa el campo posición del formulario", "bg-success");

 }

}


function deleteProfessional(){ ///borrar 

    let position = document.getElementById("position").value;

    const url = "http://localhost:4000/profesionales"  //TENÍA CONST

    let param =
    {

        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify({position: position}) ,// la posicion ( como en post MAN)
        method: "DELETE" // 
  
    }

  
    if (position){

        fetch(url,param)
        .then((data) =>{

           return data.json();
        }) 

        .then((data) => {

           console.log(data);

           showToast("Profesional eliminado", "bg-success");
        })
        .catch((error) => {

          console.log(error);
        })
    }else{

        showToast("Rellena el campo posición del formularío", "bg-danger");
    }
}

///////////////////////////////////////////////////////
// validación del prof (apuntes clas )

function validar(professional)
{
    resultado = false
    if (professional.name == "" || professional.name == "null")
    {
        showToast("AVISO: Campo nombre no informado", "bg-warning");
    }
    else if (professional.age == "" || professional.age == "null")
    {
        showToast("AVISO: Campo edad no informado", "bg-warning");
    }
    else if (professional.nationality == "" || professional.nationality == "null")
    {
        showToast("AVISO: Campo altura no informado", "bg-warning");
    }
    else if (professional.profession == "" || professional.profession == "null")
    {
        showToast("AVISO: Campo peso no informado", "bg-warning");
    }
    else
        resultado = true

    return resultado;
}

// TOSTADAS!   (apuntes clase)

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}