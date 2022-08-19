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
//Se localiza formulario
let formularioRegistro = document.forms["registroFormulario"];
console.log("ok");

/**
 * La función asíncrona validarRegistro se enfoca en ver que las contraseñas
 * coincidan
 */
async function validarRegistro() {
    /*Se guarda el formulario de registro
    y los valores en los inputs de contraseñas.
    */
    //let formularioRegistro = document.forms["registroFormulario"];
    let contraUno = formularioRegistro["validarContraUno"].value;
    let contraDos = formularioRegistro["validarContraDos"].value;
    /*La variable de validación recuerda dónde se encuentra un párrafo para añadir información
    coincidencia de las contraseñas*/
    let validacion = document.getElementById("validaContraTxt");

    //Si la contraseña es igual o mayor a seis caracteres
    if (contraUno.length >= 6) {
        //...se revisa que ambas contraseñas del formulario estén bien
        if (contraUno == contraDos) {
            validacion.style.color = "green";
            validacion.innerHTML = "¡Casi todo listo para las gomitas!";
            console.log("tan iguales");



        } else {  //de lo contrario, evita el envío del formulario
            event.preventDefault();

            validacion.style.color = "#8B0003";
            validacion.innerHTML = "¡Ups! Creo que las contraseñas no son iguales...";

        }
    }
    //Si la contraseña no tiene seis o más caracteres, se pide una nueva contra
    else {
        event.preventDefault();

        validacion.style.color = "#8B0003";
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
        validationCorreo.style.color = "green";
        validationCorreo.innerHTML = "¡Bonito correo!";
    }
    else {
        event.preventDefault();

        console.log(regex.test(correoInput.value));

        validationCorreo.style.color = "#8B0003";
        validationCorreo.innerHTML = "Creo que esa no es una dirección de correo válida..."
    }

    //Validar un username corto
    let user_propuesto = formularioRegistro["validarUsuario"].value;
    let validationUser = document.getElementById("validaUserTxt");
    let regexUser = new RegExp(/^\S+\w+\S$/);
    if (user_propuesto.length > 18) {
        event.preventDefault();
        validationUser.style.color = "#8B0003";
        validationUser.innerHTML = "Intentemos un nombre de usuario más corto, mejor..."
    }
    else {
        if (regexUser.test(user_propuesto)) {
            validationUser.style.color = "green";
            validationUser.innerHTML = `¡Gran nombre!: ${user_propuesto}`;
        }
        else {
            event.preventDefault();
            validationUser.style.color = "#8B0003";
            validationUser.innerHTML = "Mejor un username sin espacios, por favor de Gomita"
        }
    }

}
//si ****todo cool****, se postea la info a DB

async function postUser() {
    let nombre = formularioRegistro["validarNombre"].value;
    let apellido = formularioRegistro["validarApellido"].value;
    let usuario = formularioRegistro["validarUsuario"].value;
    let domicilio = formularioRegistro["validarDomicilio"].value;
    let correo = formularioRegistro["validarCorreo"].value;
    let contraseña = formularioRegistro["validarContraUno"].value;
    if (nombre != "" && apellido != "" && usuario != "" && domicilio != "" && correo != "" && contraseña != "") {
        Swal.fire({
            title: '<b class="naranja">¡Bienvenido!</b>',
            html: '<b class="naranja">¡Ya estás registrado!</b>',
            icon: 'success',
            iconColor: '#8B0003',
            confirmButtonColor: '#ef8100',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "registro_login.html";
            }
        });
        event.preventDefault();
        fetchInfo("https://gomgominolas.herokuapp.com/api/Users");
    }
    else {
        console.log("no cumple");
    }
}

function fetchInfo(url) {
    //Se localizan campos de formulario
    let nombre = formularioRegistro["validarNombre"].value;
    let apellido = formularioRegistro["validarApellido"].value;
    let usuario = formularioRegistro["validarUsuario"].value;
    let domicilio = formularioRegistro["validarDomicilio"].value;
    let correo = formularioRegistro["validarCorreo"].value;
    let contraseña = formularioRegistro["validarContraUno"].value;
    let idUsuario;

    let datosUsuario = {
        "nombre": `${nombre}`,
        "apellido": `${apellido}`,
        "domicilio": `${domicilio}`,
        "username": `${usuario}`,
        "correo": `${correo}`,
        "contraseña": `${contraseña}`
    }

    //Se envían los datos a la API
    fetch('https://gomgominolas.herokuapp.com/api/Users', {
        method: "POST",
        body: JSON.stringify(datosUsuario),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => idUsuario = json.idUsuario)
        .then(userNum => postClients(userNum))
        .then(responseTwo => responseTwo.json())
        .then(newJson => console.log(newJson))
        .catch(err => console.log(err))
    //.finally(formularioRegistro.submit());

    //setTimeout((window.location.href="registro_login.html"), 3500)

}

async function getUsers() {
    //Se hace un GET para conseguir el id con el que fue guardado el usuario
    fetch('https://gomgominolas.herokuapp.com/api/Users')
        .then(response => response.json())
        .then(array => {

            array.forEach(objeto => {
                if (objeto.nombre = nombre) {
                    idUsuario = objeto.idUsuario;
                }
            })

            alert("Se hizo el GET");
        });
}

async function postClients(idUsuario) {
    //Se hace el post a clientes
    let datosCliente = {
        "role": {
            "idRoles": 3
        },
        "user": {
            "idUsuario": idUsuario//`${idUsuario}`
        }
    }

    fetch('https://gomgominolas.herokuapp.com/api/Clients', {
        method: "POST",
        body: JSON.stringify(datosCliente),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => console.log(json))

}