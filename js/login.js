let permitirEnvio = false;
let submit = document.getElementById('input-submit');

submit.style.backgroundColor = "#d3d3d3";
submit.style.color = "#9a9a9a;"
submit.style.border = "1px solid #c0c0c0";
submit.style.opacity = "0.6";
submit.disabled = true;



function verificarMail(){

    let labelEmail = document.getElementById("label-email");   

    if(email.value.trim() === '') {
        labelEmail.innerText = 'Por favor ingresa un email';
        labelEmail.classList.add("labels-error");
        submit.disabled = true;
    } else {
        labelEmail.textContent = '';
        labelEmail.classList.remove("labels-error");
        submit.style.backgroundColor = 'red';
        submit.style.border = '2px solid black';
        submit.style.color = 'white';
        submit.disabled = false;
    }
}


function verificarContraseña(){
    let labelContraseña = document.getElementById("label-contraseña");

    if(contraseña.value.trim() === ''){
        labelContraseña.innerText = 'Ingresa la contraseña';
        labelContraseña.classList.add("labels-error");
        submit.disabled = true;
    }else {
        labelContraseña.textContent = '';
        labelContraseña.classList.remove("labels-error");
        submit.style.backgroundColor = 'red';
        submit.style.border = '2px solid black';
        submit.style.color = 'white';
        submit.disabled = false;
    }


}


let contraseña = document.getElementById("input-contraseña");
contraseña.addEventListener('change', verificarContraseña);

let email = document.getElementById("input-email");
email.addEventListener('change', verificarMail);