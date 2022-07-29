//Función crear tabla
//Eliminar tabla
//Cargar datos

function cargaDatos(url) {
    //Carga datos
    fetch(url)
        .then(response => response.json())
        .then(usuarios => {
            //console.log(usuarios.data)
            for (user in usuarios.data) {

                //console.log(`${usuarios.data[user].email} tiene email ${user}`);
                document.getElementsByClassName("id")[user].innerHTML = usuarios.data[user].id;
                document.getElementsByClassName("email")[user].innerHTML = usuarios.data[user].email;
                document.getElementsByClassName("fName")[user].innerHTML = usuarios.data[user].first_name;
                document.getElementsByClassName("lName")[user].innerHTML = usuarios.data[user].last_name;
                document.getElementsByClassName("img-avatar")[user].src = usuarios.data[user].avatar;
            }

            //Guarda los datos
            limite = Date.now() + 1000 * 60 + 3
            localStorage.setItem(`pag${pagina}`, JSON.stringify(usuarios.data));
            localStorage.setItem(`expPag${pagina}`, limite);  //Se ingresa el tiempo de expiración: un minuto
        });
}

fetch("../json/shopping-cart.json")
    .then(response => response.json())
    .then(datos=>console.log(datos.data[0].carrito));

    function creaCols(indiceFila) {
        document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "id";
        document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "email";
        document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "fName";
        document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "lName";
        document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "avatar";
    }
    /**
     * 
     * <table id="elemento{num}">
            <tbody>
              <!-- Imagen y título -->
              <tr>
                <td rowspan="2">
                  <img class="producto" src="https://i.ibb.co/tbwmSHM/Whats-App-Image-2022-07-11-at-4-16-05-PM.jpg">
                </td>
                <td colspan="4" class="titulo-elemento">Picasandías enchiladas</td>
              </tr>

              <tr class="text-center">
                <!-- Botones -->
                <td colspan="2">
                  <img class="botones" src="https://i.ibb.co/mq7XTJ1/pandita-rojo.png" alt="pandita-rojo">
                  <input type="text" class="cantidad" placeholder="5" disabled>
                  <img class="botones" src="https://i.ibb.co/F7nPFbK/pandita-verde-antonio.png"
                    alt="pandita-verde-antonio">
                </td>

                <!-- Precio -->
                <td><input type="text" class="precio" placeholder="$$$" disabled></td>

                <!-- Trash can -->
                <td>
                  <button class="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <!-- Termina elemento -->
            </tbody>
          </table>
     */

    function creaTabla(num){
        document.getElementById("items").appendChild(document.createElement("table")).id = `elemento-${num}`;
        document.getElementById(`elemento-${num}`).appendChild(document.createElement("tbody"));
        // for(let i=0;i<2;i++)createTableRows(num);
        createTableRows(num).appendChild(document.createElement("td")).className = `td-${num}`;
        

    }

    for(let i=1;i<3;i++)creaTabla(i);

    /**
     * Crea una fila al final en la tabla con id: elemento-num
     * @param {int} num a partir del 1
     */
    function createTableRows(num){
       return document.getElementsByTagName("tbody")[num-1].appendChild(document.createElement("tr"));
    }
