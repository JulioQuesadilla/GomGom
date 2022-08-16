function initComparisons() {
    var x, i;
    /* Find all elements with an "overlay" class: */
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /* Once for each "overlay" element:
      pass the "overlay" element as a parameter when executing the compareImages function: */
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      /* Get the width and height of the img element */
      w = img.offsetWidth;
      h = img.offsetHeight;
      /* Set the width of the img element to 50%: */
      img.style.width = (w / 2) + "px";
      /* Create slider: */
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      /* Insert slider */
      img.parentElement.insertBefore(slider, img);
      /* Position the slider in the middle: */
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /* Execute a function when the mouse button is pressed: */
      slider.addEventListener("mousedown", slideReady);
      /* And another function when the mouse button is released: */
      window.addEventListener("mouseup", slideFinish);
      /* Or touched (for touch screens: */
      slider.addEventListener("touchstart", slideReady);
       /* And released (for touch screens: */
      window.addEventListener("touchend", slideFinish);
      function slideReady(e) {
        /* Prevent any other actions that may occur when moving over the image: */
        e.preventDefault();
        /* The slider is now clicked and ready to move: */
        clicked = 1;
        /* Execute a function when the slider is moved: */
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /* The slider is no longer clicked: */
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /* If the slider is no longer clicked, exit this function: */
        if (clicked == 0) return false;
        /* Get the cursor's x position: */
        pos = getCursorPos(e)
        /* Prevent the slider from being positioned outside the image: */
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /* Execute a function that will resize the overlay image according to the cursor: */
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        /* Get the x positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x coordinate, relative to the image: */
        x = e.pageX - a.left;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /* Resize the image: */
        img.style.width = x + "px";
        /* Position the slider: */
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }

initComparisons();


let loQuiero = document.getElementsByClassName("boton1");
// loQuiero[0].addEventListener("click", addCart);
addCart();
async function addCart() {
  (function () {
    listaCursos.addEventListener('click', (e) => {
        if (e.target.classList.contains("boton")) {

            const anadirCarrito = document.querySelectorAll(".boton");

            anadirCarrito.forEach(function(element, i){

                element.addEventListener("click", () => {
                    
                    setBackgrounImage(i)
                })
            });
            window.location.reload();
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



    window.location.href = "html/shopping-cart.html";
});

  
}