/**
 * Script para página de registro.
 * Creado por jatg-eca, abue, para GomGom
 * durante el Sprint#1: Front-end y maquetado
 * 
 * Este Script valida el registro de una persona usuaria
 * 
 * PODEROSÍSIMO TIIM JAVAJAVADOOOOOOOOO
 */

/*Se localiza el botón de registro
y se le añade un event listener, que al dar click
comienza la función asíncrona validarRegistro*/
let botonRegistro = document.getElementById("boton-registro");
botonRegistro.addEventListener("click", validarRegistro);

/**
 * La función asíncrona validarRegistro se enfoca en ver que las contraseñas
 * coincidan
 */
async function validarRegistro() {
    /*Se guarda el formulario de registro
    y los valores en los inputs de contraseñas.
    */
    let formularioRegistro = document.forms["registroFormulario"];
    let contraUno = formularioRegistro["validarContraUno"].value;
    let contraDos = formularioRegistro["validarContraDos"].value;
    /*La variable de validación recuerda dónde se encuentra un párrafo para añadir información
    coincidencia de las contraseñas*/
    let validacion = document.getElementById("validaContraTxt");

    //Si la contraseña es igual o mayor a seis caracteres
    if (contraUno.length >= 6) {
        //...se revisa que ambas contraseñas del formulario estén bien
        if (contraUno == contraDos) {
            validacion.style.color= "green";
                validacion.innerHTML = "¡Casi todo listo para las gomitas!";
          console.log("tan iguales");
        } else {  //de lo contrario, evita el envío del formulario
            event.preventDefault();
           
                validacion.style.color= "#8B0003";
                validacion.innerHTML = "¡Ups! Creo que las contraseñas no son iguales...";
          
        }
    }
    //Si la contraseña no tiene seis o más caracteres, se pide una nueva contra
    else {
        event.preventDefault();
     
            validacion.style.color= "#8B0003";
            validacion.innerHTML = "Para acceder por Gomitas, la contraseña debe tener 6 o más caracteres"
        
    }

    //-------
    //Validar correo:

    //Se guarda una Regular Expresion para los correos
    /*Un correo bien validado tiene la siguiente forma: un string y si existe un arroba
    ya no deja poner arrobas. Se pueden poner puntos y continuar escribiendo,
    pero se verifica que al final se termine con letras, no con signos de puntuación*/
    let regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+\w$/);
    let correoInput = formularioRegistro["validarCorreo"].value;
    let validationCorreo = document.getElementById("validaCorreoTxt");
    console.log(regex.test(correoInput));
    if (regex.test(correoInput)) {
        validationCorreo.style.color= "green";
        validationCorreo.innerHTML = "¡Bonito correo!";
    }
    else {
        event.preventDefault();

        console.log(regex.test(correoInput.value));
 
        validationCorreo.style.color= "#8B0003";
        validationCorreo.innerHTML = "Creo que esa no es una dirección de correo válida..."   
    }

    //Validar un username corto
    let user_propuesto = formularioRegistro["validarUsuario"].value;
    let validationUser = document.getElementById("validaUserTxt");
    let regexUser = new RegExp(/^\S+\w+\S$/);
    if (user_propuesto.length > 18) {
        validationUser.style.color= "#8B0003";
        validationUser.innerHTML = "Intentemos un nombre de usuario más corto, mejor..."
    }
    else {
        if (regexUser.test(user_propuesto)) {
            validationUser.style.color= "green";
            validationUser.innerHTML = `¡Gran nombre!: ${user_propuesto}`;
        }
        else {
            validationUser.style.color= "#8B0003";
            validationUser.innerHTML = "Mejor un username sin espacios, por favor de Gomita"
        }
        }


}