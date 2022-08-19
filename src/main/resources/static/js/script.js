if ((localStorage.tiempoExpiracion - Date.now() < 0) || (localStorage.tiempoExpiracion == undefined)) {
    console.log("se cargó del fetch")
    cargarFetch("https://gomgominolas.herokuapp.com/api/Gummys");
} else {
    console.log("se cargó del local")
    cargarLocal();
}

/**
 * Carga los datos de sabores desde el LocalStorage
 */
function cargarLocal() {
    const SABORES = JSON.parse(localStorage.getItem("datosSabores"));
    SABORES.forEach((objeto) => {
        cargar(objeto);
    })

}

/**
 * Realiza el GET de los sabores  y los guarda en el localStorage
 * @param {String} unaUrl 
 */
function cargarFetch(unaUrl) {
    fetch(unaUrl)
        .then(response => response.json())
        .then(array => {

            array.forEach((objeto) => {
                cargar(objeto);
            })

            localStorage.setItem("datosSabores", JSON.stringify(array));
            limite = Date.now() + 1000 * 60 * 1; //10 minutos de espera
            localStorage.setItem(`tiempoExpiracion`, limite);
        })
}

/**
 * Plantilla básica para cargar los datos de la base de datos al HTML
 * @param {Object} unObjeto 
 */
function cargar(unObjeto) {
    /* Se vacía la información */
    let contenedor = document.createElement('div');
    contenedor.classList.add("infoContainer");
    contenedor.setAttribute('id', "contenedorInfo" + unObjeto.idGomita);

    let imagen = document.createElement('img');
    imagen.src = unObjeto.imagen;
    imagen.classList.add("imagen");
    imagen.setAttribute('id', "imagen" + unObjeto.idGomita);

    let producto = document.createElement('p');
    producto.innerHTML = unObjeto.nombre;
    producto.classList.add("producto");
    producto.setAttribute('id', "producto" + unObjeto.idGomita);

    let boton = document.createElement('button');
    boton.setAttribute('id', "boton" + unObjeto.idGomita);
    boton.classList.add("boton");
    boton.classList.add("mb-5");
    boton.innerHTML = "Elegir esta gomita";
    boton.setAttribute("onclick", `setBackgrounImage(${unObjeto.idGomita - 1})`);


    /* Se agrega al HTML */
    contenedor.append(imagen, producto, boton);
    let contenedorPrincipal = document.getElementById("contenedorPrincipal");
    contenedorPrincipal.appendChild(contenedor);
}

const listaCursos = document.querySelector("#contenedorPrincipal")

function añadirAlCarrito() {

    if (contador < 2 || (SwitchCosto == 0)) {
        Swal.fire({
            title: '<b class="naranja">¡Falta seleccionar!</b>',
            html: '<b class="naranja">Por favor selecciona el costo y al menos 2 gomitas</b>',
            icon: 'error',
            iconColor: '#8B0003',
            customClass: {
                confirmButton: 'swalBtnColor'
            },
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "paquetes.html"
            }
        });
    } else {
        let botonPrecio = document.querySelector(".background-botones");
        let precio = Number(botonPrecio.innerHTML.replace(/((?:\$))/, ""));
        let idPaquete = Number(botonPrecio.id.replace(/((?:pack-))/, ""));
        let imagenPaquete = "";
        switch (precio) {
            case 50: {
                imagenPaquete = "https://i.ibb.co/xLfQD6G/50.png";
                break;
            }
            case 75: {
                imagenPaquete = "https://i.ibb.co/1G5bPQ9/75.png";
                break;
            }
            case 100: {
                imagenPaquete = "https://i.ibb.co/X5dk0Ps/100.png";
                break;
            }
            case 150: {
                imagenPaquete = "https://i.ibb.co/fYzy6QQ/150.png";
                break;
            }
            case 200: {
                imagenPaquete = "https://i.ibb.co/rFn7X2z/200.png";
                break;
            }
            case 250: {
                imagenPaquete = "https://i.ibb.co/zHYNDFs/250.png";
                break;
            }
            default: break;
        }
        let indicesSabores = [];
        let nombreSabores = []
        let item = 1;
        saboresElegidos = document.querySelectorAll(".seleccionado");
        saboresElegidos.forEach((e, i) => {
            indicesSabores[i] = Number(e.id.replace(/((?:imagen))/, ""));
            nombreSabores[i] = e.nextElementSibling.innerHTML;
        }
        
        )

        carritoAñade(imagenPaquete, indicesSabores, nombreSabores, 'Paquete ' + precio, precio, idPaquete, item++);

        Swal.fire({
            title: '<b class="naranja">¡Se ha añadido al carrito!</b>',
            html: '<b class="naranja">¿Qué deseas hacer a continuación?</b>',
            icon: 'info',
            iconColor: '#8B0003',
            showCancelButton: true,
            confirmButtonColor: '#ef8100',
            cancelButtonColor: '#8B0003',
            confirmButtonText: 'Ir al carrito',
            cancelButtonText: 'Elegir un nuevo paquete'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "shopping-cart.html"
            } else {
                window.location.href = "paquetes.html"
            }
        });

    }
}





// Función que guarda los elementos seleccionados en el LocalStorage para llevarlos al Carrito
function carritoAñade(imagen1, eleccion1, nombre1, producto1, precio1, idPack, contador1) {

    let clave = `p${precio1}-${eleccion1.toString()}`;
    let idpaquete = idPack;
    let contador = contador1;
    let imagen = imagen1;
    let sabores = eleccion1;
    let nomSabores = nombre1;
    let precio = precio1;
    let producto = producto1;
    let cantidad = 1;
    //Si no hay algo guardado en el LocalStorage:
    if (localStorage.getItem("carritos") == null) {
        let carritos = {};
        let datos =
        {
            idPack: idpaquete,
            sabores: sabores, //saboresId
            nomSabores: nomSabores,
            imagen: imagen,
            precio: precio,
            cantidad: cantidad,
            producto: producto,
            contador: contador
        };

        carritos[`${clave}`] = datos;
        localStorage.setItem("carritos", JSON.stringify(carritos));

    } else {
        //Si  ya hay un carrito
        let carritos = (JSON.parse(localStorage.getItem("carritos")));


        //Si además, ya está guardado el producto en el LocalStorage:
        if (carritos[`${clave}`] != null) {
            //Se modifica la cantidad del item y se guarda
            carritos[`${clave}`].cantidad++;


        } else { //si no está guardado el elemento en el item
            let datos =
            {
                idPack: idPack,
                sabores: sabores,
                nomSabores: nomSabores,
                imagen: imagen,
                precio: precio,
                cantidad: cantidad,
                producto: producto,
                contador: contador
            };

            carritos[`${clave}`] = datos;
        }
        localStorage.setItem("carritos", JSON.stringify(carritos));
    }
}


let SwitchCosto = 0;
const seleccionPrecio = document.querySelectorAll(".buttonPrecio");
seleccionPrecio.forEach(element => {
    element.addEventListener("click", () => {
        seleccionPrecio.forEach(element => element.classList.remove("background-botones"))
        element.classList.add("background-botones")
        SwitchCosto = 1;
    })
});


const agregaPaquete = document.querySelectorAll(".buttonAgrega");
agregaPaquete.forEach(element => {
    element.addEventListener("click", () => {
        agregaPaquete.forEach(element => element.classList.remove("background-botones"))
        element.classList.add("background-botones")
    })
});

let contador = 0;
function setBackgrounImage(valor) {
    const imagen = document.querySelectorAll(".infoContainer>.imagen")
    if (contador < 6) {

        if (imagen[valor].classList.contains("seleccionado")) {
            //deseleccionar elemento
            contador = contador - 1;
            imagen[valor].classList.remove("seleccionado")
        } else {
            imagen[valor].classList.add("seleccionado")
            const paquete = localStorage.setItem(imagen, localStorage.getItem(imagen));
            contador = contador + 1;
        }
    } else {
        if (imagen[valor].classList.contains("seleccionado")) {
            //deseleccionar elemento
            contador = contador - 1;
            imagen[valor].classList.remove("seleccionado")
        } else {
            Swal.fire({
                title: '<b class="naranja">¡Son muchas!</b>',
                html: '<b class="naranja">Escoge Máximo 6, por favor</b>',
                icon: 'warning',
                iconColor: '#8B0003',
                customClass: {
                    confirmButton: 'swalBtnColor'
                },
            })
        }
    }
}

