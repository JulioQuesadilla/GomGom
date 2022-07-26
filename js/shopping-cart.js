let opciones = document.getElementsByName("opciones");
let medios = document.getElementsByName("puntoMedio");

opciones[0].addEventListener("onclick",function(){
    if (opciones[0].checked){
        alert("opcion 1");
    } else{
        alert("opcion 2")
    }
});
