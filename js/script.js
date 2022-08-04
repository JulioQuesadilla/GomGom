fetch('../json/prueba.json')
    .then(response => response.json())
    .then(response => {
        for (const i of response.articulos) {
            let contenedor = document.createElement('div')
            contenedor.classList.add("infoContainer")
            contenedor.setAttribute('id', "contenedorInfo" + i.id)


            let imagen = document.createElement('img')
            imagen.src = i.img


            imagen.classList.add("imagen")
            imagen.setAttribute('id', "imagen" + i.id)



            let producto = document.createElement('p')
            producto.innerHTML = i.producto
            producto.classList.add("producto")
            producto.setAttribute('id', "producto" + i.id)



            let contenido = document.createElement('p')
            contenido.innerHTML = i.contenido
            contenido.classList.add("contenido")
            contenido.setAttribute('id', "contenido" + i.id)


            let precio = document.createElement('p')
            precio.innerHTML = "$" + i.precio
            precio.classList.add("precio")
            precio.setAttribute('id', "precio" + i.id)


            let boton = document.createElement('button')
            boton.setAttribute('id', "boton" + i.id)
            boton.classList.add("boton")
            boton.classList.add("mb-5")
            boton.innerHTML = "Añadir al carrito"



            contenedor.append(imagen, producto, contenido, precio, boton)



            let contenedorPrincipal = document.getElementById("contenedorPrincipal")

            contenedorPrincipal.appendChild(contenedor)
            let datos = {
                imagen: document.getElementById("imagen" + i.id).src,
                producto: document.getElementById("producto" + i.id).innerHTML,
                contenido: document.getElementById("contenido" + i.id).innerHTML,
                precio: document.getElementById("precio" + i.id).innerHTML,

            }
            localStorage.setItem("datos" + i.id, JSON.stringify(datos))


        }
    })



//variables

const carrito = document.querySelector("#carrito")
const listaCursos = document.querySelector("#contenedorPrincipal")
const contenedorCarrito = document.querySelector("#lista-carrito")
const botonVaciar = document.querySelector("#vaciar-carrito")

function cargarEventLIstener() {
    listaCursos.addEventListener('click', (e) => {
        if (e.target.classList.contains("boton")) {
            console.log(e.target.parentElement)

        }

    })
}
cargarEventLIstener();

// Función que guarda los elementos seleccionados en el LocalStorage para llevarlos al Carrito
(function () {
    listaCursos.addEventListener('click', (e) => {
        if (e.target.classList.contains("boton")) {


            let clave = e.target.parentElement.children[1].id;
            let elemento = e.target.parentElement;
            let imagen = elemento.children[0].src;
            let producto = elemento.children[1].innerHTML;
            let precio = elemento.children[3].innerHTML;
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
