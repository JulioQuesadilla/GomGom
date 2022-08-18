if ((localStorage.tiempoExpiracion - Date.now() < 0)||(localStorage.tiempoExpiracion == undefined)) {
    console.log("se cargó del fetch")
    cargarFetch("https://gomgominolas.herokuapp.com/api/Gummys");
} else{
    console.log("se cargó del local")
    cargarLocal();
}

function cargarLocal(){
    const SABORES = JSON.parse(localStorage.getItem("datosSabores"));
    SABORES.forEach((objeto) => {
        cargar(objeto);
    })
    
}

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


    /* Se agrega al HTML */
    contenedor.append(imagen, producto, boton);
    let contenedorPrincipal = document.getElementById("contenedorPrincipal");
    contenedorPrincipal.appendChild(contenedor);
}

//variables
//const carrito = document.querySelector("#carrito")
const listaCursos = document.querySelector("#contenedorPrincipal")
//const contenedorCarrito = document.querySelector("#lista-carrito")
//const botonVaciar = document.querySelector("#vaciar-carrito")

function cargarEventLIstener() {
    listaCursos.addEventListener('click', (e) => {
        if (e.target.classList.contains("boton")) {
            return
        }
    })
}
cargarEventLIstener();

// Función que guarda los elementos seleccionados en el LocalStorage para llevarlos al Carrito
(function () {
    listaCursos.addEventListener('click', (e) => {
        if (e.target.classList.contains("boton")) {

            //////
            let clave = e.target.parentElement.children[1].id.replace(/((?:0+))/, "");
            let elemento = e.target.parentElement;
            let imagen = elemento.children[0].src;
            let producto = elemento.children[1].innerHTML;
            let precio = elemento.children[3].innerHTML;
            precio = precio.replace(/((?:\$*))/, "")
            let cantidad = 1;

            //Si no hay algo guardado en el LocalStorage:
            if (localStorage.getItem("carritos") == null) {
                let carritos = {};
                let datos =
                {
                    producto: producto,
                    imagen: imagen,
                    precio: precio,
                    cantidad: cantidad
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
                        producto: producto,
                        imagen: imagen,
                        precio: precio,
                        cantidad: cantidad
                    };

                    carritos[`${clave}`] = datos;
                }
                localStorage.setItem("carritos", JSON.stringify(carritos));
            }
            // carritos[`${clave}`] = datos;
            // localStorage.setItem("carritos", JSON.stringify(carritos));
            // console.log(carritos);
        }
    })
})();


const seleccionPrecio = document.querySelectorAll(".buttonPrecio");
seleccionPrecio.forEach(element => {
    element.addEventListener("click", () => {
        seleccionPrecio.forEach(element => element.classList.remove("background-botones"))
        element.classList.add("background-botones")
    })
});

/*let agregaACarrito = document.getElementsByClassName(".buttonAgrega");

async function agrCarrito () { 
    index (100,"https://i.ibb.co/dPfMrvL/Imagen1.png","Mini botanero dulce",150)
    window.location.href = "html/shopping-cart.html";
}*/

const agregaPaquete = document.querySelectorAll(".buttonAgrega");
agregaPaquete.forEach(element => {
    element.addEventListener("click", () => {
        agregaPaquete.forEach(element => element.classList.remove("background-botones"))
        element.classList.add("background-botones")
    })
    //agregaACarrito[0].addEventListener("click", agrCarrito);
});

contador = 0;
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
        } else{
            Swal.fire({
                title: '<b class="naranja">¡Son muchas!</b>',
                html: '<b class="naranja">Escoge Máximo 6, por favor</b>',
                icon: 'warning',
                customClass: {
                    confirmButton: 'swalBtnColor'
                  },
            })
        }
    }
}

