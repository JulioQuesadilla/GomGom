let loginInfo = {
    "mail": "abueloco@gmail.com",
    "password": "abuehackerman123"
}

let formLoginNav = document.forms["loginDos"];
let correoLoginNav = formLoginNav["correoDos"];
let contraseniaLoginNav = formLoginNav["contraDos"];
let botonLoginNav = document.getElementById("botonLoginDos");

let formLoginPc = document.forms["loginUno"];
let correoLoginPc = formLoginPc["correoUno"];
let contraseniaLoginPc = formLoginPc["contraUno"];
let botonLoginPc = document.getElementById("botonLoginUno");


botonLoginNav.addEventListener("click", validateNavLogin);
botonLoginPc.addEventListener("click", validatePcLogin);
console.log(typeof(loginInfo.mail));

let checkLoginUno = document.getElementById("validaLogin");
let checkLoginDos = document.getElementById("validaLoginNav");
        

async function validateNavLogin() {
    if (correoLoginNav.value == loginInfo.mail && contraseniaLoginNav.value == loginInfo.password) {
        console.log("Logeado");
    }
    else {
        event.preventDefault();
        try{
        checkLoginDos.style.color= "#8B0003";
        checkLoginDos.innerHTML = "No tenemos esa cuenta de gomitas";
        console.log("Sólo abuehackerman puede entrar zi ke zi");
        }
        catch {
            console.log("No kedó");
        }
    }
}

async function validatePcLogin() {
    if (correoLoginPc.value == loginInfo.mail && contraseniaLoginPc.value == loginInfo.password) {
        console.log("Logeado");
    }
    else {
        event.preventDefault();
        try{
        checkLoginUno.style.color= "#8B0003";
        checkLoginUno.innerHTML = "No tenemos esa cuenta de gomitas";
        console.log("Sólo abuehackerman puede entrar zi ke zi");
        }
        catch {
            console.log("No kedó");
        }
    }
}