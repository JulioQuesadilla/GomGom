/**
 * SCRIPT PARA VALIDACIÓN DE LOGIN
 * jatg-eca el abuehackerman pal mundo clarokezi ultrayes sí señor_/A/e
 * 
 * Realizado para GomGom
 * Product Owner: Hector Mora
 * Scrums: MoisesCH14 y el abuelin
 * Lead Devs: Venus, JulionQuesadillonALCESARLOKEESDELCESAR, LeoKawicha, AdriánLimón
 * (textrañamos,Lau & Moi)
 * 
 * JAVAJAVA-DO!
 *  
 * 
*/

/*Vilma: al iniciar el código se hace un fetch de un JSON
 que simula una base de datos de usuarios registrados y una variable
 que guarda la información de login */
let loginInfo;
fetchInfo("../json/login.json");

/*Checar expiración de login*/

/*------------*/
//Se guarda una variable que modifica el tiempo de expiración que puede tener una persona
//loggeada

let timeExpir = Date.now() + 1000*60;
/**---------- */

if (localStorage.getItem("logged") && JSON.parse(localStorage.getItem("expirationInfo")).expiration <= Date.now()) {
    localStorage.clear();
}
else if (localStorage.getItem("logged")) {
    let user = localStorage.getItem("logged");
    let botonesLogin = document.getElementById("grupo-botonesPC");
    let listaLogin = document.getElementById("grupo-botonesNav");
    botonesLogin.innerHTML = `<p class="text-center justify-content-center align-content-center" style="color: #ef8100;">¡Hola de nuevo, ${user}!</p>`;
    listaLogin.innerHTML = `<hr><br><p class="text-center justify-content-center align-content-center">¡Hola de nuevo, ${user}!</p>`;
}



/*Este es un (piedra) formulario para tabletas y celulares (prehistóricos)
 Se almacena el input para correo y la contraseña del piedraFormulario,
 y se recuerda el botón de login que acompaña en la navbar que tiene offcanvas*/
let formLoginNav = document.forms["loginDos"];
let correoLoginNav = formLoginNav["correoDos"];
let contraseniaLoginNav = formLoginNav["contraDos"];
let botonLoginNav = document.getElementById("botonLoginDos");

/*Estas variables declaradas recuerdan un (piedra) formulario para verlo
 en la piedracomputadora. Igual que el formulario para tabletas y celulares,
 se almacenan los inputs para correo, constraseña, y se recuerda el botón de login
 de la navbar para piedraComputadoras*/
let formLoginPc = document.forms["loginUno"];
let correoLoginPc = formLoginPc["correoUno"];
let contraseniaLoginPc = formLoginPc["contraUno"];
let botonLoginPc = document.getElementById("botonLoginUno");


/* (JAVAJAVADO!) Se les pone un dino Escuchador de Eventos a los botones de
 inicio de sesión, para que al momento de escuchar un click de la persona cliente,
 se valide el inicio de sesión para PC o celular*/
botonLoginNav.addEventListener("click", validateNavLogin);
botonLoginPc.addEventListener("click", validatePcLogin);

/*En el HTML se puso un pequeño párrafo que indica si hay algún error
 al iniciar sesión.
 El declararlos variables aquí es una herramienta secreta que nos ayudará más tarde*/
let checkLoginUno = document.getElementById("validaLogin");
let checkLoginDos = document.getElementById("validaLoginNav");
        

/**
 *Una función asíncrona que se realiza para celulares, al dar click en iniciar sesión 
 */
async function validateNavLogin() {

    //Se revisa que los valores del input coincidan con el JSON
    //Si está bien, se loggea
   
    //Se iteran los elementos del JSON
    for (i = 0; ; i++) {
        if (i < loginInfo.data.length) {
            //y se revisa que coincidan con la info del JSON
            if (correoLoginNav.value == loginInfo.data[i].mail &&
                contraseniaLoginNav.value == loginInfo.data[i].password) {
                //en caso de que encuentre coincidencia, rompe el loop y deja iniciar sesión
                console.log("Logeado");
                logged = true;
                //y crea un local storage con datos de expiración
                localStorage.setItem("logged", JSON.stringify(loginInfo.data[i].usuario));
                localStorage.setItem("expirationInfo", JSON.stringify ({
                    expiration: timeExpir,
                    }));

                break;
            }
            //En caso contrario, continúa el loop, buscando cuenta...
            else {
                continue;
            }
        } else { //una vez terminados de iterar los elementos, si no hay coincidencias, no deja entrar
            event.preventDefault();
            checkLoginDos.style.color = "#8B0003";
            checkLoginDos.innerHTML = "No tenemos esa cuenta de gomitas";
            console.log("Sólo abuehackerman puede entrar zi ke zi");
            console.log("...y JulioQuesadillas ps");
            break;
        }
    }
}

/**
 * Una función asíncrona que se realiza para compu, al dar click en iniciar sesión 
 */
async function validatePcLogin() {
    //Se revisa que los valores del input coincidan con el JSON
    //Si está bien, se loggea
   
    //Se iteran los elementos del JSON
    for (i = 0; ; i++) {
        if (i < loginInfo.data.length) {
            //y se revisa que coincidan con la info del JSON
            if (correoLoginPc.value == loginInfo.data[i].mail &&
                contraseniaLoginPc.value == loginInfo.data[i].password) {
                //en caso de que encuentre coincidencia, rompe el loop y deja iniciar sesión
                console.log("Logeado");
                logged = true;
                //y crea un local storage con datos de expiración
                localStorage.setItem("logged", JSON.stringify(loginInfo.data[i].usuario));
                localStorage.setItem("expirationInfo", JSON.stringify ({
                    expiration: timeExpir,
                }));
                
                break;
            }
            //En caso contrario, continúa el loop, buscando cuenta...
            else {
                continue;
            }
        } else { //una vez terminados de iterar los elementos, si no hay coincidencias, no deja entrar
            event.preventDefault();
            checkLoginUno.style.color = "#8B0003";
            checkLoginUno.innerHTML = "No tenemos esa cuenta de gomitas";
            console.log("Sólo abuehackerman puede entrar zi ke zi");
            console.log("...y JulioQuesadillas ps");
            break;
        }
    }

    
}


/**
 * Esta función obtiene los datos de la URL.
 */
//(HOISTING POWAH!)
 function fetchInfo(url) {
    fetch(url)
    .then(response => response.json())
    .then(data=> {
        loginInfo=data;
    }
    )
 }

 //D. R. Y.

