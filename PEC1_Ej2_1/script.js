const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


//Mostrar mensaje de error
function mostrarError(input,mensaje){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const smallMensaje = formControl.querySelector('small');
    smallMensaje.innerText = mensaje;
}

//Mostrar mensaje de exito
function mostrarExito(input,mensaje){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    // const smallMensaje = formControl.querySelector('small');
    //smallMensaje.innerText = mensaje;
}

//Comprobar email valido
function checkEmail(input){
    const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(input.value)){
        mostrarError(input, "email mal formado")
    }else{
        mostrarExito(input);
    }
}

//Comprobar campos vacios
function checkVacio(listaCampos){
    listaCampos.forEach(function(input){
        if (input.value.trim() === ''){
            mostrarError(input,"el campo no puede estar vacio");
        }else{
            mostrarExito(input);
        }

    });
}
 
//Comprobar longitud de input
function checkLongitudInput(input, min, max){
    if (input.value.length < min){
        mostrarError(input, "longitd mínima de "+min+" caracteres")
    }else if (input.value.length > max){
        mostrarError(input, "longitd máxima de "+max+" caracteres")
    }else{
        mostrarExito(input);
    }
}

//Comprobar password iguales
function checkPasswordIguales(input1, input2){
    if (input1.value !== input2.value){
        mostrarError(input2, "Los dos passwords deben ser iguales")
    }
    else{

    }
}

//Comprobar edad valida entre 0 y 1000
function checkEdad(input){
    if (input.value<0 || input.value>1000){
        mostrarError(edad, "Edad no posible. Solo valores entre 0 y 1000");
    } else{
         mostrarExito(edad);
    }     
}

//Comprobar el password valido
function checkPassword(input){
    const regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\(\)_+=-])/;
    const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    
    const regexEspecialChar = /^(?=.*[!@#$%_+=-])/;
    //ojo con el -

    //Longitud entre 8 y 30
    if (input.value.length<4 || input.value.length>30){
        mostrarError(input,"La longitud debe estar entre 4 y 30 caracteres")
    }
    else if (!regex.test(input.value)){
        mostrarError(input, "Necesario mayuscula, minuscula, numero y !@#$%^&*()_+=-");
    }
    // else if (!regexEspecialChar.test(input.value)){
    //     mostrarError(input, "Necesario signo entre !@#$%");
    // }    
    else{
        mostrarExito(input);
    }


}


form.addEventListener('submit',function(e){
    e.preventDefault();

    checkVacio([username,edad,email,password,password2]);
    checkLongitudInput(username, 3, 15);
    //checkLongitudInput(password, 8, 15);
    checkEmail(email);
    checkPassword(password)
    checkPasswordIguales(password, password2);
    checkEdad(edad);
    

    
    // //Comprobamos edad
    // if (edad.value===''){
    //     mostrarError(edad, "Edad de usuario necesario");
    // } else if (edad.value<0 || edad.value>1000){
    //     mostrarError(edad, "Edad no posible. Solo valores entre 0 y 1000");
    // } else{
    //     mostrarExito(edad);
    // }

    // //Comprobamos email
    // if (email.value===''){
    //     mostrarError(email, "Email necesario");
    // } else if (!checkEmail(email.value)){
    //     mostrarError(email, "Email mal formado");
    // } else{
    //     mostrarExito(email);
    // }

    // //Comprobamos  password
    // if (password.value===''){
    //     mostrarError(password, "Password necesario");
    // } else{
    //     mostrarExito(password);
    // }

    // //Comprobamos password2
    // if (password2.value===''){
    //     mostrarError(password2, "Password2 necesario");
    // } else{
    //     mostrarExito(password2);
    // }



});

