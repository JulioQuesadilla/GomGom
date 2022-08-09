window.onbeforeunload = function() {
    window.location.reload(true);
    window.history.pushState('', null, './');
  }
/* * * * * * * * * * * * * INICILIZACIONES * * * * * * * * * * * * */
let direccion = "../json/shopping-cart.json";

cargarLocal();
// cargarFetch(direccion);
asignaDescuentos(50);
calculaSubtotal();

/* * * * * * * * *  Funciones  * * * * * * * * * * * */

function cargarFetch(url) {
    fetch(url)
        .then(response => response.json())
        .then(datos => {
            carrito = datos.data[0].carrito;
            carrito.forEach(producto => {
                creaTabla(producto.idproducto, producto.imagen, producto.articulo, producto.cantidad, producto.preciounitario);
            });
        });

}

/**
 * 
 * @param {number} num de item iniciando desde 1
 * @param {string} url 
 * @param {string} titulo del item
 * @param {number} cantidad de elementos del item
 * @param {number} precio unitario del item
 */
function creaTabla(num, url, titulo, cantidad, precio) {
    // Se crea tabla y cuerpo de tabla
    document.getElementById("items").appendChild(document.createElement("table")).id = `producto${num}`;
    let body = document.getElementById(`producto${num}`).appendChild(document.createElement("tbody"));

    // Se crea primera fila: imagen y título
    let fila1 = body.insertRow();
    let cell1 = fila1.appendChild(document.createElement("td"));
    let imagen = cell1.appendChild(document.createElement("img"));

    cell1.setAttribute("rowspan", 2);
    imagen.setAttribute("class", "producto");
    imagen.src = url;
    fila1.insertAdjacentHTML("beforeend", `<td colspan="4" class="titulo-elemento">${titulo}</td>`);

    // Se crea segunda fila
    let fila2 = body.insertRow();

    //Se crean botones e input de cantidad
    fila2.insertCell().insertAdjacentHTML("afterbegin",
        `<img class="botones" id="btn-menos-${num}" src="https://i.ibb.co/mq7XTJ1/pandita-rojo.png" alt="pandita-rojo">
         <input id="cantidad-${num}" type="number" class="cantidad text-center" disabled>
         <img class="botones" id="btn-mas-${num}" src="https://i.ibb.co/F7nPFbK/pandita-verde-antonio.png" alt="pandita-verde-antonio">`
    );

    document.getElementById(`btn-mas-${num}`).setAttribute("onclick", `sumarUno(${num})`);
    document.getElementById(`btn-menos-${num}`).setAttribute("onclick", `restarUno(${num})`);

    fila2.cells[0].colSpan = 2;
    //se asigna valor de cantidad
    document.getElementById(`cantidad-${num}`).value = cantidad;

    //Se crean precios
    fila2.insertCell();
    fila2.cells[1].insertAdjacentHTML("beforeend", `<input id="precio-${num}" type="text" class="precio" placeholder="$$$" disabled>`);
    document.getElementById(`precio-${num}`).value = "$ " + precio;

    //Se crea trash can
    fila2.appendChild(document.createElement("td")).insertAdjacentHTML("beforeend", `<button class="btn" id="borrar-${num}">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      class="bi bi-trash-fill" viewBox="0 0 16 16">
      <path
        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
    </svg>
  </button>`);

    document.getElementById(`borrar-${num}`).setAttribute("onclick", `borrarUno(${num})`);

}

function sumarUno(num) {
    let cantidadUno = Number(document.getElementById(`cantidad-${num}`).value);
    document.getElementById(`cantidad-${num}`).value = cantidadUno + 1;

    /* * * * * * * * *  LocalStorage * * * * * * * *  */
    //Jala el carrito
    let carritos = JSON.parse(localStorage.getItem("carritos"));

    //Modifica cantidad
    carritos[`producto${num}`].cantidad = ++cantidadUno;

    //Guarda el nuevo carrito en el LocalStorage
    localStorage.setItem("carritos", JSON.stringify(carritos));

    //Recalcula subtotal y total
    calculaSubtotal();

}

function restarUno(num) {
    let valor = document.getElementById(`cantidad-${num}`);
    Number(valor.value) == 1 ? valor.value = 1 : valor.value = Number(valor.value) - 1;

    /* * * * * * * * *  LocalStorage * * * * * * * *  */
    //Jala el carrito
    let carritos = JSON.parse(localStorage.getItem("carritos"));

    //Modifica cantidad
    carritos[`producto${num}`].cantidad = Number(valor.value);

    //Guarda el nuevo carrito en el LocalStorage
    localStorage.setItem("carritos", JSON.stringify(carritos));

    //Recalcula subtotal y total
    calculaSubtotal();
}

function borrarUno(num) {
    //Jala el nombre del producto
    let producto = document.getElementById(`producto${num}`);

    //Borra del HTML
    document.getElementById("items").removeChild(producto);

    //Jala el carrito
    let carritos = JSON.parse(localStorage.getItem("carritos"));

    // elimina el producto
    delete carritos[producto.id];

    //Guarda el nuevo carrito en el LocalStorage
    localStorage.setItem("carritos", JSON.stringify(carritos));

    //Recalcula subtotal y total
    calculaSubtotal();
}

//Traer desde LocalStorage:
function cargarLocal() {
    carrito = JSON.parse(localStorage.getItem("carritos"));
    for (const producto in carrito)
        creaTabla(producto.replace(/((?:producto0*))/, ""), carrito[producto].imagen, carrito[producto].producto, carrito[producto].cantidad, carrito[producto].precio);
}

function calculaSubtotal() {
    let cantidades = document.getElementsByClassName("cantidad");
    let descuentos = document.getElementById("descuentos");
    let totales = document.getElementById("totales");
    let subtotales = document.getElementById("subtotales");
    if (cantidades.length!=0){
        let suma = 0;
    for (let i = 0; i < cantidades.length; i++) {

        let cantidad = Number(cantidades[i].value);
        let numId = cantidades[i].id.replace(/((?:cantidad-))/, "");
        let precioElement = document.getElementById(`precio-${numId}`);
        let precioValue = Number(precioElement.value.replace(/((?:\$ ))/, ""));

        suma += cantidad * precioValue;
    }
    subtotales.innerHTML = suma;
    if (Number(descuentos.innerHTML)+100>suma) { //El monto mínimo es de 100
        totales.innerHTML = suma;
        descuentos.innerHTML = "";
    }
    else {
        totales.innerHTML = suma - Number(descuentos.innerHTML);
        
    }

    totales.style = "font-weight: bold";

} else {
    descuentos.innerHTML = "";
    totales.innerHTML = "";
    subtotales.innerHTML = "";
}
}

function asignaDescuentos(num){
    descuentos.innerHTML = num; //Unidades en pesos;
}

