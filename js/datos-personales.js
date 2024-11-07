// primera version, se puede refactorizar para hacerlo mas limpio.

// expresiones regulares
const expresionRegularEmail = /^.+\@.+\.(com|org|net)$/; 
const expresionRegularPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
const expresionRegularNombreApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
const expresionRegularDocumento = /^\d+$/;
const expresionRegularNumTel = /^[\d+\-()]+$/;


// validacion form 1

let inputEmail = document.getElementById('email'); // agarro el input del email del html

let inputSubmit = document.getElementById('btn-1'); // agarro el boton

let label = document.getElementById('label-email'); // agarro el label asociado al input del email 
                                                //(donde se pondran los distintos mensajes dependiendo del 
                                                //tipo de norma que no este cumpliendo el usuario)


inputSubmit.classList.remove("boton-guardar-cambios-activado"); // le saco el estilo predeterminado
inputSubmit.classList.add("boton-guardar-cambios-desactivado"); // lo bloqueo de arranque

label.style.color = "red"; // pongo color al label del html 

inputEmail.addEventListener('change',estaVacioElInput); //  al evento "change" (se activa cuando cambian el value del input y le dejan de hacer focus al mismo) 
                                                        //  del input del email le asocio la funcion que afectara al html

function estaVacioElInput(){ 


    if (inputEmail.value == '' || !expresionRegularEmail.test(inputEmail.value)){ // si esta vacio el input o lo que ingreso no cumple el formato de correo entonces 
                                                                                // se aplica borde rojo al input, se hace visible el label con el respectivo mensaje
                                                                                // y se desactiva el boton para que no pueda enviar.
        inputEmail.classList.add("input-error"); // le pongo borde rojo al input
        
        label.classList.remove("invisible"); // le saco la clase invisible al label asi aparece en pantalla

        
        if (inputEmail.value == ''){ // si no tenia nada, se indica con su respectivo mensaje
            label.innerText = "Por favor, llene el campo";
        }else { // en el caso contrario(tenia algo pero no cumplio con el formato del correo), el mensaje sera otro
            label.innerText = "Correo invalido";
        }

        inputEmail.classList.add("input-error");

        inputSubmit.classList.remove("boton-guardar-cambios-activado");
        inputSubmit.classList.add("boton-guardar-cambios-desactivado");
    
        inputSubmit.disabled = true; // desactivamos el boton

    } else { // en caso contrario(ingreso algo y cumplio con el formato de correo),
            // se pone el formato original y se vuelve a hacer invisible el label 
            //(verificar si el label se deberia generar aca en el js o si esta bien en el html)

        inputEmail.classList.remove("input-error");
            
        label.classList.add("invisible"); // se le vuelve a poner la clase invisible al label en caso de que se la hayamos sacado, asi desaparece el mensaje de error.
        
       
        inputSubmit.classList.remove("boton-guardar-cambios-desactivado");
        inputSubmit.classList.add("boton-guardar-cambios-activado");

        inputSubmit.disabled = false; // activamos el boton para que pueda enviar
    } 
}


// validacion form 2

let formPassword = document.getElementById('form-password');
let mensajePassword = document.getElementById('contenedor-mensaje-password');
let password = document.querySelector('#input-password');

formPassword.addEventListener('submit', (e)=>{

    e.preventDefault();
    validarFormPassword();

})

function validarFormPassword(){
    
    mensajePassword.innerHTML = '';
    
    let ingresoInvalido = false;

    if (!expresionRegularPassword.test(password.value)){

        ingresoInvalido = true;
        password.classList.add('input-error');
        let mensaje = document.createTextNode("Password invalida");
        mensajePassword.appendChild(mensaje);
        mensajePassword.style.color = "red";
    } else {
        password.classList.remove('input-error');
    }

    if (!ingresoInvalido){
        formPassword.submit();
    }

}

// validacion form 3

let formInferior = document.getElementById('form-inferior');

let mensajeNombre = document.getElementById('contenedor-mensaje-nombre');
let nombre = document.querySelector('#input-nombre');

let mensajeApellido = document.getElementById('contenedor-mensaje-apellido');
let apellido = document.querySelector('#input-apellido');

let mensajeTipo = document.getElementById('contenedor-mensaje-tipo');
let tipo = document.querySelector('#select-tipo');

let mensajeDocumento = document.getElementById('contenedor-mensaje-documento');
let documento = document.querySelector('#input-documento');

let mensajeNacimiento = document.getElementById('contenedor-mensaje-nacimiento');
let nacimiento = document.querySelector('#input-nacimiento');

let mensajeNumTel = document.getElementById('contenedor-mensaje-num-tel');
let numTel = document.querySelector('#input-num-tel');

let mensajeEmailSecundario = document.getElementById('contenedor-mensaje-email-secundario');
let emailSecundario = document.querySelector('#input-email-secundario');

formInferior.addEventListener('submit', (e)=> {
    e.preventDefault();
    validarFormInferior();
});

function validarFormInferior(){

    mensajeNombre.innerHTML = '';
    mensajeApellido.innerHTML = '';
    mensajeTipo.innerHTML = '';
    mensajeDocumento.innerHTML = '';
    mensajeNacimiento.innerHTML = '';
    mensajeNumTel.innerHTML = '';
    mensajeEmailSecundario.innerHTML = '';

    let ingresoInvalido = false;

    // validacion nombre

    if (!expresionRegularNombreApellido.test(nombre.value)){
        ingresoInvalido = true;
        nombre.classList.add('input-error');
        let mensaje = document.createTextNode("Nombre invalido");
        mensajeNombre.appendChild(mensaje);
        mensajeNombre.style.color = "red";

    }else {
        nombre.classList.remove('input-error');
    }

    // validacion apellido

    if (!expresionRegularNombreApellido.test(apellido.value)){
        ingresoInvalido = true;
        apellido.classList.add('input-error');
        let mensaje = document.createTextNode("Apellido invalido");
        mensajeApellido.appendChild(mensaje);
        mensajeApellido.style.color = "red";

    }else {
        apellido.classList.remove('input-error');
    }

    // validacion Tipo

    if (!(tipo.value > 0 && tipo.value <= tipo.options)){
        ingresoInvalido = true;
        tipo.classList.add('input-error');
        let mensaje = document.createTextNode("Elija un Tipo");
        mensajeTipo.appendChild(mensaje);
        mensajeTipo.style.color = "red";

    }else {
        tipo.classList.remove('input-error');
    }

    // validacion documento

    if (!expresionRegularDocumento.test(documento.value)){
        ingresoInvalido = true;
        documento.classList.add('input-error');
        let mensaje = document.createTextNode("Documento invalido");
        mensajeDocumento.appendChild(mensaje);
        mensajeDocumento.style.color = "red";

    }else {
        documento.classList.remove('input-error');
    }

    // validacion fecha de nacimiento

    let fechaIngresada = new Date(nacimiento.value);
    let fechaActual = new Date(); // si no le pasas nada por constructor, es la de hoy

    let aniosDiferencia = fechaActual.getFullYear() - fechaIngresada.getFullYear();

    if (fechaActual.getMonth() < fechaIngresada.getMonth() || 
    (fechaActual.getMonth() === fechaIngresada.getMonth() && fechaActual.getDate() < fechaIngresada.getDate())) { 
    aniosDiferencia--;
    }

    if (aniosDiferencia < 16){

        ingresoInvalido = true;
        nacimiento.classList.add('input-error');
        let mensaje = document.createTextNode("Edad insuficiente");
        mensajeNacimiento.appendChild(mensaje);
        mensajeNacimiento.style.color = "red";

    }else {
        nacimiento.classList.remove('input-error');
    }

    // validacion fecha de nacimiento

    if (!expresionRegularNumTel.test(numTel.value)){

        ingresoInvalido = true;
        numTel.classList.add('input-error');
        let mensaje = document.createTextNode("Numero invalido");
        mensajeNumTel.appendChild(mensaje);
        mensajeNumTel.style.color = "red";

    }else {
        numTel.classList.remove('input-error');
    }

     // validacion email secundario

     if (!expresionRegularEmail.test(emailSecundario.value)){

        ingresoInvalido = true;
        emailSecundario.classList.add('input-error');
        let mensaje = document.createTextNode("Email invalido");
        mensajeEmailSecundario.appendChild(mensaje);
        mensajeEmailSecundario.style.color = "red";

    }else {
        emailSecundario.classList.remove('input-error');
    }

    if (!ingresoInvalido){
        formInferior.submit();
    }

    



};
