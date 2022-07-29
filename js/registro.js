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

}