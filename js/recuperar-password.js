// primera version, se puede refactorizar para hacerlo mas limpio.

const expresionRegularEmail = /^.+\@.+\.(com|org|net)$/; 

let inputEmail = document.getElementById('email'); // agarro el input del email del html

inputEmail.addEventListener('change',estaVacioElInput); //  al evento "change" (se activa cuando cambian el value del input y le dejan de hacer focus al mismo) 
                                                        //  del input del email le asocio la funcion que afectara al html

function estaVacioElInput(){ 

    let inputSubmit = document.getElementById('btn'); // agarro el boton
    let label = document.getElementById('info-email'); // agarro el label asociado al input del email 
                                                    //(donde se pondran los distintos mensajes dependiendo del 
                                                    //tipo de norma que no este cumpliendo el usuario)

    if (inputEmail.value == '' || !expresionRegularEmail.test(inputEmail.value)){ // si esta vacio el input o lo que ingreso no cumple el formato de correo entonces 
                                                                                // se aplica borde rojo al input, se hace visible el label con el respectivo mensaje
                                                                                // y se desactiva el boton para que no pueda enviar.
        inputEmail.style.borderColor = "red"; // le pongo borde rojo al input
        
        label.classList.remove("invisible"); // le saco la clase invisible al label asi aparece en pantalla

        
        if (inputEmail.value == ''){ // si no tenia nada, se indica con su respectivo mensaje
            label.innerText = "Por favor, llene el campo";
        }else { // en el caso contrario(tenia algo pero no cumplio con el formato del correo), el mensaje sera otro
            label.innerText = "Correo invalido";
        }
        
        // aplicamos estilos al boton para darle un aspecto de desactivado.
        inputSubmit.style.backgroundColor = "#d3d3d3";
        inputSubmit.style.color = "#9a9a9a;"
        inputSubmit.style.border = "1px solid #c0c0c0";
        inputSubmit.style.opacity = "0.6";
    
        inputSubmit.disabled = true; // desactivamos el boton

    } else { // en caso contrario(ingreso algo y cumplio con el formato de correo),
            // se pone el formato original y se vuelve a hacer invisible el label 
            //(verificar si el label se deberia generar aca en el js o si esta bien en el html)

        inputEmail.style.cssText = ""; // borro los estilos aplicados de la parte verdadera del if (si es que entro ahi) al input del email.

        label.classList.add("invisible"); // se le vuelve a poner la clase invisible al label en caso de que se la hayamos sacado, asi desaparece el mensaje de error.
        
        inputSubmit.style.cssText = ""; // borro los estilos aplicados de la parte verdadera del if (si es que entro ahi) al boton.

        inputSubmit.disabled = false; // activamos el boton para que pueda enviar
    } 
}

