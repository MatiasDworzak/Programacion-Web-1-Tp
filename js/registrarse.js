let form = document.querySelector("#registroForm");
let mensaje = document.querySelector("#mensaje");
let boton = document.querySelector("#boton-registrarse");

form.addEventListener("input", () => {
    // Habilitar el botón solo si ambos campos están completos
    let mail = document.querySelector("#input-mail").value;
    let contrasenia = document.querySelector("#input-contrasenia").value;
    boton.disabled = !(mail && contrasenia); // Habilitar o deshabilitar según el contenido
});

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    validar();
})

function validar(){
    let error= false;
    let mail = document.querySelector("#input-mail").value;
    let contrasenia = document.querySelector("#input-contrasenia").value;
    let mensajeError = "";
    let contieneArroba = /@/;
    let terminaConValido = /\.(com|org|net)$/
    let tieneNumeros = /[0-9]/;
    let tieneMinuscula = /[a-z]/;
    let tieneMayuscula = /[A-Z]/;
    let longitudMinima = 8;
    let caracteresEspeciales = /[:#?!%$]/;    
    console.log(mail);
    console.log(contrasenia);
    if(!contieneArroba.test(mail)){
        mensajeError += "<p>El mail debe contener @</p>";
        error = true;
    }

    
    if(!terminaConValido.test(mail)){
        mensajeError += "<p>El mail debe terminar con .com, .org o .net</p>";
        error = true;
    }
    



    if(contrasenia.length<longitudMinima){
        mensajeError += "<p>La contrasenia tiene que tener 8 caracteres como minimo.</p>"
        error = true;
    }

    if(!tieneMayuscula.test(contrasenia)){
        mensajeError += "<p>La contrasenia tiene que tener 1 Mayuscula</p>";
        error = true;
    }
    if(!tieneMinuscula.test(contrasenia)){
        mensajeError += "<p>La contrasenia tiene que tener 1 Minusucula</p>";
        error = true;
    }
    if(!tieneNumeros.test(contrasenia)){
        mensajeError += "<p>La contrasenia tiene que tener 1 Numero</p>";
        error = true;
    }
    if(!caracteresEspeciales.test(contrasenia)){
        mensajeError += "<p>La contrasenia tiene que tener Alguno de estos caracteres especiales  # ? ! % $</p>";
        error = true;
    }
    console.log(mensajeError);
    if(error){
        mensaje.innerHTML= mensajeError;
    } else {
        mensaje.innerHTML="";
        console.log("El mail es: "+ mail);
        console.log("La contrasenia es: "+ contrasenia);

        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");

        // Redirigir a la página de inicio de sesión después de 2 segundos
        setTimeout(() => {
            window.location.href = "login.html"; // Cambia esto a la URL de tu página de inicio de sesión
        }, 2000); // 2000 milisegundos = 2 segundos

        form.submit(); // Enviar el formulario, esto hará el refresco
    }  }



