
//RETO TERMINADO  // no corregido, comprobado en local host y post man(get)


/// HTTP /// apuntes clase
/* 
const http = require("http")

const server = http.createServer( function(request, response){ //(petición, respuesta)

         console.log("Request received from client");
         console.log("Header Request: " + request.headers.host)
         console.log("Request Method: " + request.method)
         console.log("Request URL: " + request.url)
         console.log("Response Status code: " + response.statusCode)
         response.writeHead(200,{"Content-Type":"text/plain"}); /// 200 errores que hemos visto
         response.write("Hello from server!"); /// como recibe la respuesta
         response.end();  /// sale la respuesta (una sóla respuesta siempre)

})
server.listen(3000); */ /// número de puerto por el que está escuchando el servidor. Todo lo creado estará siendo
//"escuchado" en el puerto 3000. (127.0.0.01 local Host / localhost:3000)
/* 
/* app.use(function(request, response, next){

    console.log("Petición recibida del cliente")
    next();
});

app.listen(4000); */
/* 
                         retos día 3 de NODE / RETO 1

Crea un servidor web con el módulo express que realice las siguientes tareas:
1. Debe mostrar por consola ‘Petición recibida del cliente’ por cada conexión que se haga desde el
cliente.
2. Debe mostrar por consola la url, método y el user-agent por el que se está haciendo la petición.
3. Le retorne al usuario un mensaje del tipo application/json con el status code 200 y un mensaje con
este contenido: { ok: true, message: ‘Recibido!’ }.
4. Si alguien entra en /bye debe devolver un mensaje del tipo application/json, statusCode: 200 y un
mensaje con este contenido: { ok: true, message: ‘Adios!’ }. */ 


const express = require("express")
const app = express()

app.get("/", function (request, response){

    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);

    response.send("Petición recibida por el cliente")
    response.status(200).json({ok: true, message: "¡Recibido!"});
})

app.get("/bye", function (request, response){

    response.status(200).json({ok: true, message: "¡Adiós!"});
})

app.listen(4000);


