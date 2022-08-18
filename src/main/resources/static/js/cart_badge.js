/**
 * JS para medallita de carrito.
 * Made by Abuelin JATG-eca
 */

//Se recupera la medallita y se añade una clase de bootstrap para ocultar
let badge = document.getElementById("cartbadge");

if (localStorage.getItem("carritos") == null) {
    console.log("no hay carritos");

} else {
    let carritos = (JSON.parse(localStorage.getItem("carritos")));
}
let contadorComprados=0;

carrito = JSON.parse(localStorage.getItem("carritos"));
for (const producto in carrito) {
    ++contadorComprados;
}

//Si hay un nuevo elemento en localStorage, se aumenta contador
if (carrito) {
    badge.innerHTML = contadorComprados;
}
else {
    badge.className = "d-none";
}




