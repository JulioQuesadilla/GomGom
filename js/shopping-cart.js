let entrega = document.getElementById("puntosMedios");
let opciones = document.getElementsByName("puntosMedios");
let circulos = document.getElementsByClassName("circulo-2");
let circulitos = document.getElementsByClassName("circulito-2");

// opciones.forEach(elemento=>elemento.style.visibility = "hidden");
// circulos.forEach(elemento=>elemento.style.display = "none");
// circulitos.forEach(elemento=>elemento.style.display = "hidden");

function showOptions(){

    let opciones = document.getElementsByName("puntosMedios");
    opciones.forEach(elemento=>elemento.style.visibility = "visible");
    
}

entrega.addEventListener("onclick", showOptions);
entrega.addEventListener("onclick", ()=>alert("Se hizo click"));
