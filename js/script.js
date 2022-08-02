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
            boton.innerHTML = "+"



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