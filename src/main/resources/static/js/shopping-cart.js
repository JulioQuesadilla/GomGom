/* * * * * * Recargar la página si se acceder por el historial * * * * * */
window.addEventListener('pageshow', (event) => {
    if (event.persisted) window.location.reload();
});

/* * * * * * * * * * * * * INICIALIZACIONES * * * * * * * * * * * * */
let direccion = "../json/shopping-cart.json";

cargarLocal();
// cargarFetch(direccion);
calculaTotal();

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

    cell1.setAttribute("rowspan", 4);
    imagen.setAttribute("class", "producto");
    imagen.src = url;
    fila1.insertAdjacentHTML("beforeend", `<td colspan="4" class="titulo-elemento">${titulo}</td>`);

    //Fila sabores
    let filaSabor = body.insertRow();
    let cellSabor = filaSabor.appendChild(document.createElement("td"));
    cellSabor.setAttribute("colspan",6);
    cellSabor.setAttribute("id",num);
    cellSabor.innerHTML = "Aqui van los sabores"
    // AQUI SE JALAN LOS DATOS DESDE EL LOCALSTORAGE
    // filaSabor.style.backgroundColor = "red"


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

function sumarUno(num) { //p**-*,*,*
    let cantidadUno = Number(document.getElementById(`cantidad-${num}`).value);
    document.getElementById(`cantidad-${num}`).value = cantidadUno + 1;

    /* * * * * * * * *  LocalStorage * * * * * * * *  */
    //Jala el carrito
    let carritos = JSON.parse(localStorage.getItem("carritos"));

    //Modifica cantidad
    carritos[`p${num}`].cantidad = ++cantidadUno;

    //Guarda el nuevo carrito en el LocalStorage
    localStorage.setItem("carritos", JSON.stringify(carritos));

    //Recalcula subtotal y total
    calculaTotal();

}

function restarUno(num) {
    let valor = document.getElementById(`cantidad-${num}`);
    Number(valor.value) == 1 ? valor.value = 1 : valor.value = Number(valor.value) - 1;

    /* * * * * * * * *  LocalStorage * * * * * * * *  */
    //Jala el carrito
    let carritos = JSON.parse(localStorage.getItem("carritos"));

    //Modifica cantidad
    carritos[`p${num}`].cantidad = Number(valor.value);

    //Guarda el nuevo carrito en el LocalStorage
    localStorage.setItem("carritos", JSON.stringify(carritos));

    //Recalcula subtotal y total
    calculaTotal();
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
    calculaTotal();
}

//Traer desde LocalStorage:
function cargarLocal() {
    carrito = JSON.parse(localStorage.getItem("carritos"));
    for (const producto in carrito)
        creaTabla(producto.replace(/((?:producto0*))/, ""), carrito[producto].imagen, carrito[producto].producto, carrito[producto].cantidad, carrito[producto].precio);
}

function calculaTotal() {
    let cantidades = document.getElementsByClassName("cantidad");
    let totales = document.getElementById("totales");

    if (cantidades.length != 0) {
        let suma = 0;
        for (let i = 0; i < cantidades.length; i++) {

            let cantidad = Number(cantidades[i].value);
            let numId = cantidades[i].id.replace(/((?:cantidad-))/, "");
            let precioElement = document.getElementById(`precio-${numId}`);
            let precioValue = Number(precioElement.value.replace(/((?:\$ ))/, ""));

            suma += cantidad * precioValue;
        }

        if (document.getElementById("chamoy").checked) suma += 10;
        totales.innerHTML = `$${suma} pesos`;
        totales.style = "font-weight: bold";

    } else {
        totales.innerHTML = "";
        document.getElementById("chamoy").disabled = true;
    }
}


/* Función de estilos para el chamoy */

let check = document.getElementById("chamoy");
let checkbox = document.getElementById("checkbox");

check.addEventListener("change", () => {
    if (check.checked) {
        checkbox.classList.add("selected");
    } else {
        checkbox.classList.remove("selected");
    }
    calculaTotal();
})

/* Para los radio inputs */
let envios = Array.from(document.getElementsByClassName("envios-group"));
let pagos = Array.from(document.getElementsByClassName("pagos-group"));
let puntosEntregas = Array.from(document.getElementsByClassName("puntosEntregas-group"));
let entregas = document.getElementById("puntosEntregas");


envios.forEach((e) => { //Para cada elemento de las opciones de envíos
    e.addEventListener("click", () => { //Se añade un eventListener
        envios.forEach(i => { //En donde para cada elemnto de las opciones de envíos

            i.querySelector(".dot").classList.remove("selected"); //Se elimina la clase selected al elemento dentro de cada opción cuya clase es dot

        });
        e.querySelector(".dot").classList.add("selected"); //Luego, se añade la clase selected al elemento target del click
        if (e.firstElementChild.id == "entregas") entregas.classList.remove("hide"); //Se le elimina la clase hide i el id es entregas
        else {
            puntosEntregas.forEach(element => element.querySelector(".dot").classList.remove("selected")); //Se eliminan los dots
            entregas.classList.add("hide");//De lo contrario, se le agrega.
        }
    });
});

pagos.forEach(e => {
    e.addEventListener("click", () => {
        pagos.forEach(i => {
            i.querySelector(".dot").classList.remove("selected");
        });
        e.querySelector(".dot").classList.add("selected");
    });
});

puntosEntregas.forEach(e => {
    e.addEventListener("click", () => {
        puntosEntregas.forEach(i => {
            i.querySelector(".dot").classList.remove("selected");
        });
        e.querySelector(".dot").classList.add("selected");
    });
});

/* Evento POST */

function enviarPedido() {
    let indiceSabores = [1, 2, 3, 4];
    let sabores = []
    let cantidades = []
    let cantidad = 3;
    for (let index = 0; index < indiceSabores.length; index++) {

        let gomita = {
            "idGomita": indiceSabores[index]
        }
        sabores.push(gomita);
    }

    /* let paquetes = document.querySelectorAll(".cantidad");
    paquetes.forEach(e =>{
       let indice =  e.value;

    }) */

    let precio = document.getElementById("totales").innerHTML;
    let precioFinal = Number(precio.replace(/((?:\$))/, "").replace(/((?: pesos))/, ""));

    if (document.getElementById("checkbox").classList.contains("selected")) conOsinChamoy = 2;
    else conOsinChamoy = 1;


    for (let i = 1; i <= cantidad; i++) {
        let paquete = {
            "idPaquete": 6
        }

        cantidades.push(paquete)
    }

    let fecha = new Date();

    let mes;
    if (fecha.getMonth()>=10){
        mes = fecha.getMonth();
    } else {
        mes = `0${fecha.getMonth()}`
    }

    let datosPedido = {
        "gummies": sabores,//Esto es un array
        "pack": cantidades, //Esto es un array
        "fecha": `${fecha.getFullYear()}-${mes}-${fecha.getDate()}`,
        "ventaTotal": precioFinal,
        "chamoy": {
            "idChamoy": conOsinChamoy  //1 = no, 2 = sí.
        }
    }

    fetch('https://gomgominolas.herokuapp.com/api/Orders', {
        method: "POST",
        body: JSON.stringify(datosPedido),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
}


/**
 * Esta función convierte los id sabores a nombres de sabores
 */
function traerSabores(){
    let unNumero = 3;
    let SABORES = JSON.parse(localStorage.getItem("datosSabores"));
    SABORES.forEach(e =>{
    if (e.idGomita == unNumero )
       console.log( e.idGomita )
       //Falta que lo guarde en un array
       //Falta que unNumero sea el array
       //Lo guarde en el localStorage de carritos
    });
}
traerSabores()