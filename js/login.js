let submit = document.getElementById('input-submit');

const inputEmail = document.getElementById('input-email');
const labelEmail = document.getElementById('label-input-email');

 

function verificarEmail(){

    let valorVerificadoEmail = /^[a-zA-Z_]+@[a-zA-Z]+\.(com|org|net)$/;
    let emailAceptado = valorVerificadoEmail.test(inputEmail.value);

    if(inputEmail.value.trim() === ''){
        labelEmail.textContent = 'Completar campo';
        labelEmail.style.color = 'red';
        labelEmail.style.paddingBottom = '5px';
    } else if(!emailAceptado){
        labelEmail.textContent = 'Email invalido'; 
        labelEmail.style.color = 'red';    
    }else{
        labelEmail.textContent = '';
    }
};

inputEmail.addEventListener('change', verificarEmail);

const inputContraseña = document.getElementById('input-contraseña');
const labelContraseña = document.getElementById('label-input-contraseña');

function verificarContraseña(){

    let valorVerificadoContraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
    let contraseñaAceptada = valorVerificadoContraseña.test(inputContraseña.value);

    if(inputContraseña.value.trim() === '' ){
        labelContraseña.textContent = 'Ingresar contraseña';
        labelContraseña.style.color = 'red';
    } else if(!contraseñaAceptada){
        console.error('contraseña no aceptada');              
        labelContraseña.textContent = 'Contraseña invalida'; 
        labelContraseña.style.color = 'red';               
    }else{
        labelContraseña.textContent = '';
    }

};

inputContraseña.addEventListener('change', verificarContraseña);


function verificarInputs(){

    let valorVerificadoContraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
    let contraseñaAceptada = valorVerificadoContraseña.test(inputContraseña.value);
    let valorVerificadoEmail = /^[a-zA-Z_]+@[a-zA-Z]+\.(com|org|net)$/;
    let emailAceptado = valorVerificadoEmail.test(inputEmail.value);

    if(inputContraseña .value.trim() !== '' && inputEmail.value.trim() !== '' && contraseñaAceptada == true && emailAceptado == true){
        submit.disabled = false;
        submit.style.opacity = '1';
        submit.style.backgroundColor = '#586e30';
    }else if(inputContraseña .value.trim() === '' || inputEmail.value.trim() === '' || !contraseñaAceptada || !emailAceptado ){
        submit.disabled = true;
        submit.style.backgroundColor = 'gray';
    }
}


inputContraseña.addEventListener('change', verificarInputs);
inputEmail.addEventListener('change', verificarInputs);


