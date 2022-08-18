const entrar = document.querySelector('#boton')
entrar.addEventListener('click', async(e) => {
    e.preventDefault();

    let inputemail = document.querySelector('#emailInput').value
    let passwordemail = document.querySelector('#passwordInput').value
    const respuesta = await fetch('../json/login.json')
    const resultado = await respuesta.json()
    const credenciales = resultado.some(element => {
        return element.mail == inputemail && element.password == passwordemail

    });
    if (credenciales) {
        window.open('../html/admin-anadir.html', '_self')
    } else {
        let mensaje = document.createElement('s')
        mensaje.innerHTML = "las credenciales no son correctas"
        mensaje.style.color = 'White'
        document.querySelector('fieldset').appendChild(mensaje)
        document.querySelector('#emailInput').setAttribute("value", inputemail.trim())
        setTimeout(() => {



            location.reload()



        }, 1000);
    }

})