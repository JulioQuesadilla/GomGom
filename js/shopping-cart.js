let direccion = "../json/shopping-cart.json";

// cargarLocal();
cargarFetch(direccion);
let descuentos = document.getElementById("descuentos");
let subtotales = document.getElementById("subtotales");
let totales = document.getElementById("totales");

descuentos.innerHTML = 30; //Unidades en pesos;
subtotales.innerHTML = 200;

totales.innerHTML = Number(subtotales.innerHTML) - Number(descuentos.innerHTML);
totales.style = "font-weight: bold";

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
    document.getElementById("items").appendChild(document.createElement("table")).id = `elemento-${num}`;
    let body = document.getElementById(`elemento-${num}`).appendChild(document.createElement("tbody"));

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

}

function restarUno(num) {
    let valor = document.getElementById(`cantidad-${num}`);
    Number(valor.value) == 1 ? valor.value = 1 : valor.value = Number(valor.value) - 1;
}

function borrarUno(num) {
    document.getElementById("items").removeChild(document.getElementById(`elemento-${num}`));
}

//Traer desde LocalStorage:
function cargarLocal() {
    carrito = JSON.parse(localStorage.getItem("carritos"));
    for (const producto in carrito)
        creaTabla(producto.replace(/((?:producto0*))/, ""), carrito[producto].imagen, carrito[producto].producto, carrito[producto].cantidad, carrito[producto].precio);
}


