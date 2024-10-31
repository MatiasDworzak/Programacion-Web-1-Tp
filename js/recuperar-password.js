// primera version, se puede refactorizar para hacerlo mas limpio.

const expresionRegularEmail = /^.+\@.+\.(com|org|net)$/;

function estaVacioElInput(){

    let inputSubmit = document.getElementById('btn');
    let label = document.getElementById('info-email');

    if (inputEmail.value == '' || !expresionRegularEmail.test(inputEmail.value)){ // si esta vacio o no se cumple el formato de correo 
                                                                                // se aplica borde rojo, se hace visible el label y se desactiva el boton
        inputEmail.style.borderColor = "red";
        
        label.classList.remove("invisible");

        if (inputEmail.value == ''){
            label.innerText = "Por favor, llene el campo";
        }else {
            label.innerText = "Correo invalido";
        }
        
        // aplicamos estilos al boton para darle un aspecto de desactivado.
        inputSubmit.style.backgroundColor = "#d3d3d3";
        inputSubmit.style.color = "#9a9a9a;"
        inputSubmit.style.border = "1px solid #c0c0c0";
        inputSubmit.style.opacity = "0.6";
    
        inputSubmit.disabled = true; // desactivamos el boton

    } else { // en caso contrario, se pone el formato original y se vuelve a hacer invisible el label 
            //(verificar si el label se deberia generar aca en el js o si esta bien en el html)
        inputEmail.style.cssText = ""; // borro los estilos aplicados en caso de que fueran aplicados en la parte verdadera del if
        label.classList.add("invisible");
        
        inputSubmit.style.cssText = ""; // borro los estilos aplicados en caso de que fueran aplicados en la parte verdadera del if
        inputSubmit.disabled = false; // activamos el boton
    } 
}

let inputEmail = document.getElementById('email');

if (inputEmail != null){

    inputEmail.addEventListener('change',estaVacioElInput);

}

