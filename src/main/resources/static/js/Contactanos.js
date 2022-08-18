
const inputRadioArr = Array.from(document.getElementsByClassName("event-radio")),
textAreaEvent = document.querySelector("#event-text-area"),
btnSiguiente = document.querySelector("#btn-siguiente"),
formAllInput = document.querySelector(".form-all-input"),
formDos = document.querySelector("#form-2"),
inputName = document.querySelector("#nombre"),
inputNumPersonas = document.querySelector("#Npersonas"),
inputPresupuesto = document.querySelector("#presupuesto"),
inputFecha=document.querySelector("#fecha"),
inputDescripcion=document.querySelector("#descripcion"),
inputTelefono=document.querySelector("#Ntelefono")
;
inputRadioArr.forEach(element => {
    
    element.addEventListener("click", () =>{

        inputRadioArr.forEach(i => {
    
            i.querySelector(".radio-center").classList.add("hide")
            i.classList.remove("radio-checked")

        });

        element.querySelector(".radio-center").classList.remove("hide")
        element.classList.add("radio-checked")
        
        valorInputRadio(element.getElementsByTagName("label")[0].attributes.value.value)

    })
});


function valorInputRadio(valor){

    if(valor == "otro"){
        textAreaEvent.classList.remove("hide")
    }
    else{
        textAreaEvent.classList.add("hide")
    }
}

btnSiguiente.addEventListener("click", ()=>{

    formAllInput.classList.add("hide");
    formDos.classList.remove("hide")
    btnSiguiente.textContent = "ENVIAR"

    localStorage.setItem("nombre", inputName.value)
    localStorage.setItem("evento", getValueEvent())
    localStorage.setItem("num-personas", inputNumPersonas.value)
    localStorage.setItem("presupuesto", inputName.value)
    localStorage.setItem("fecha", inputFecha.value)
    localStorage.setItem("descr-evento", inputDescripcion.value)
    localStorage.setItem("Ntelefono", inputTelefono.value)
    

})


function getValueEvent(){

        let inputRadioChecked = document.querySelector(".radio-checked");
        let labelRadio = inputRadioChecked.querySelector(".label-radio-center");
        labelRadio = labelRadio.attributes.value.value

    if(labelRadio == "otro"){

        return textAreaEvent.value
    }
    else{
        
        return labelRadio;
    }
}