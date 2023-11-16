let correo = "";
let edad = 18;

/*  ALERTA DEL BOTÓN "DEFENSA DEL CONSUMIDOR" */
window.addEventListener("load", function () {
    document.getElementById("Alerta").addEventListener("click", function () {
        alert("https://www.argentina.gob.ar/economia/comercio/defensadelconsumidor");
    })
})

/*  ALERTA DEL BOTÓN "RECIBIR OFERTAS" */
window.addEventListener("load", function () {
    document.getElementById("Ofertas").addEventListener("click", function () {
        let correo = window.prompt("¡Ingresa tu correo electrónico para recibir todas nuestras ofertas únicas!");
        alert('El correo se agregó correctamente a nuestra base de datos');
    })
})

/*  ALERTA DEL BOTÓN "TRABAJÁ CON NOSOTROS" */
window.addEventListener("load", function () {
    document.getElementById("Trabaja").addEventListener("click", function () {
        let edad = window.prompt("Ingresá tu edad para saber si podés trabajar con nosotros.");
        if (edad >= 18) {
            alert("¡Felicidades! podes trabajar con nosotros, envia tu curriculum a contacto@perchamerch.com.ar.")
        }
        else {
            alert("Lamentablemente, no podes trabajar con nosotros.")
        }
    })
})

