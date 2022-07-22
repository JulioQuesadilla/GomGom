console.log("Catálogo GomGom")

let botonRegistro = document.getElementById("boton-registro");
botonRegistro.addEventListener("click", validarRegistro);



async function validarRegistro() {
    let formularioRegistro = document.forms["registroFormulario"];
    let contraUno = formularioRegistro["validarContraUno"].value;
    let contraDos = formularioRegistro["validarContraDos"].value;
    let validacion = formularioRegistro["validacion"];

    if (contraUno.length > 6) {
        if (contraUno == contraDos) {
          console.log("tan iguales");
        } else {
            event.preventDefault();
            try {
                validacion.value = "¡Ups! Creo que las contraseñas no son iguales...";
            } catch (error) {
                console.log("nanai");
            }
        }
    }
    else {
        event.preventDefault();
        try {
            validacion.value = "Para acceder por Gomitas, la contraseña debe tener 6 o más caracteres"
        } catch (error) {
            console.log("nanai");
        }
    }

}