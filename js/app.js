let imagenes = [
    {
        "url": "../assets/img/internet.jpg",
        "nombre": "Internet",
        "descripcion": "Manejamos las instalaciones de internet hogar a cada uno de los clientes que desean obtener este servicio de una forma amigable, respetuosa y organizada para la satisfacción del cliente."

    },
    {
        "url": "../assets/img/telefonia.jpg",
        "nombre": "Telefonia",
        "descripcion": "Manejamos las instalaciones de telefonia hogar a cada uno de los clientes que desean obtener este servicio de una forma amigable, respetuosa y organizada para la satisfacción del cliente."

    },
    {
        "url": "../assets/img/television.jpg",
        "nombre": "Television",
        "descripcion": "Manejamos las instalaciones de televisión hogar a cada uno de los clientes que desean obtener este servicio de una forma amigable, respetuosa y organizada para la satisfacción del cliente."

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}


