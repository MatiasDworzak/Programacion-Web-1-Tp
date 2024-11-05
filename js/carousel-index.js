// primero me traigo los datos de los libros
import libros from '../data/libros.json' with { type: 'json' };

const portadasAleatoriasSinRepetir = new Set(); // utilizo set para que no admita portadas repetidas

while (portadasAleatoriasSinRepetir.size < 5){ // mientras que la coleccion no tenga 5 portadas ejecutar
    var portada = libros[Math.floor(Math.random() * libros.length)].Portada; // obtengo una portada aleatoria
    portadasAleatoriasSinRepetir.add(portada);// agrego la portada a la lista set
}

 // console.log(portadasAleatoriasSinRepetir); en este punto ya tenemos 5 portadas aleatorias

// ahora toca meterlas en el html del index

const carouselInner = document.querySelector('.carousel-inner'); // agarramos el div que contiene a los items


Array.from(portadasAleatoriasSinRepetir).forEach((portada, index) => {
    
    var item = document.createElement('div'); // creo el div que sera el item

    item.setAttribute('class', 'carousel-item'); // le pongo la clase para boostrap
    item.setAttribute('data-bs-interval', '2000'); // le pongo intervalo


    var img = document.createElement('img'); // hago la etiqueta de la imagen que tendra en el src la portada

    img.setAttribute('class', 'd-block w-100'); // y le doy clases para el boostrap

    img.setAttribute('src', portada);  // le pongo una portada
    img.setAttribute('alt', `slide-${index + 1}`); 

    if (index == 0){
        item.classList.add('active'); // si es el primer item, que se ponga con la clase activada asi aparece primero
    } 

    item.appendChild(img); // pongo la imagen dentro del item

    carouselInner.appendChild(item); // pongo el item dentro del div que esta en el index
} );
