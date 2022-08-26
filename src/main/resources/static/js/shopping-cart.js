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
/**
 * 
 * @param {number} num de item iniciando desde 1
 * @param {string} url 
 * @param {string} titulo del item
 * @param {number} cantidad de elementos del item
 * @param {number} precio unitario del item
 */
function creaTabla(num, url, titulo, cantidad, precio, arraySabores) {
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
    cellSabor.innerHTML = arraySabores.join(", ");
    cellSabor.setAttribute("class", "textSabor");


    // Se crea segunda fila
    let fila2 = body.insertRow();

    //Se crean botones e input de cantidad
    fila2.insertCell().insertAdjacentHTML("afterbegin",
        `<img class="botones" id="btn-menos-${num}" src="https://i.ibb.co/mq7XTJ1/pandita-rojo.png" alt="pandita-rojo">
         <input id="cantidad-${num}" type="number" class="cantidad text-center" disabled>
         <img class="botones" id="btn-mas-${num}" src="https://i.ibb.co/F7nPFbK/pandita-verde-antonio.png" alt="pandita-verde-antonio">`
    );

    document.getElementById(`btn-mas-${num}`).setAttribute("onclick", `sumarUno('${num}')`);
    document.getElementById(`btn-menos-${num}`).setAttribute("onclick", `restarUno('${num}')`);

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

    document.getElementById(`borrar-${num}`).setAttribute("onclick", `borrarUno('${num}')`);

}

function sumarUno(num) { //p**-*,*,*
    let cantidadUno = Number(document.getElementById(`cantidad-${num}`).value);
    document.getElementById(`cantidad-${num}`).value = cantidadUno + 1;

    /* * * * * * * * *  LocalStorage * * * * * * * *  */
    //Jala el carrito
    let carritos = JSON.parse(localStorage.getItem("carritos"));

    //Modifica cantidad
    carritos[`${num}`].cantidad = ++cantidadUno;

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
    carritos[`${num}`].cantidad = Number(valor.value);

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
    delete carritos[num];

    //Guarda el nuevo carrito en el LocalStorage
    localStorage.setItem("carritos", JSON.stringify(carritos));

    //Recalcula subtotal y total
    calculaTotal();
}

//Traer desde LocalStorage:
function cargarLocal() {
    carrito = JSON.parse(localStorage.getItem("carritos"));
    for (const producto in carrito)
        creaTabla(producto, carrito[producto].imagen, carrito[producto].producto, carrito[producto].cantidad, carrito[producto].precio, carrito[producto].nomSabores);
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
    let arrayIdPedidos = [];
    //Se trae el localStorage
    let CARRITO = JSON.parse(localStorage.getItem("carritos"));

    //Se inicia el método post por cada paquete en CARRITO
    
    for (const paqueteStorage in CARRITO) {
    //se agrega la info a las variables por cada paquete

        
        //Variables temporales
         let cantidad = CARRITO[paqueteStorage].cantidad; //Un número
        let indiceSabores = CARRITO[paqueteStorage].sabores; //Un array

        // * * * * * * * * * * *  Variables para enviar a la api  * * * * * * * * * * * * *
         let precio = document.getElementById("totales").innerHTML;
         let precioFinal = Number(precio.replace(/((?:\$))/, "").replace(/((?: pesos))/, ""));
 
         if (document.getElementById("checkbox").classList.contains("selected")) conOsinChamoy = 2;
         else conOsinChamoy = 1;
 
         let fecha = new Date();
 
         let mes;
         if (fecha.getMonth() >= 10) {
             mes = fecha.getMonth();
         } else {
             mes = `0${fecha.getMonth()}`
         }

         // * * * * * Variables que tienen "objetos" dentro * * * 
        let saboresApi = []
        let repeticionesApi = []
 
        //se guardan los objetos en el array de sabores
        for (let i = 0; i < indiceSabores.length; i++) {

            let gomita = {
                "idGomita": indiceSabores[i]
            }
            saboresApi.push(gomita);
        }

        for (let i = 1; i <= cantidad; i++) {
            let paquete = {
                "idPaquete": 6
            }

            repeticionesApi.push(paquete)
        }

        // Se vaían las variables en el "body"
        let datosPedido = {
            "gummies": saboresApi,//Esto es un array
            "pack": repeticionesApi, //Esto es un array
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
            .then(json => {
                console.log(`Tu pedido tiene el id ${json.idPedido}`);
                arrayIdPedidos.push(json.idPedido);
            })
            .catch(err => console.log(err));
    }

    setTimeout(()=>{

        Swal.fire({
            title: '<b style="color: #8B0003">Recibimos tu pedido</b>',
            html: `<span  style="color: #ef8100">Tu compra tiene el id: ${arrayIdPedidos.join("-")} </span>`,
            icon: 'success',
            iconColor: '#8B0003',
            customClass: {
                confirmButton: 'swalBtnColor'
            },
        })

        console.log(`Tu pedido es el ${arrayIdPedidos.join("-")}`);

        //Se debe borrar todo



    }, 400);
    
}
