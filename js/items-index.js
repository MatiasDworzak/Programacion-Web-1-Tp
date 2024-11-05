const articulos = document.querySelectorAll('.articulo-categoria');


articulos.forEach(articulo => {

    articulo.addEventListener('mouseenter', () => { // mouse encima del item
        articulo.classList.add("articulo-categoria-mouseenter");
        });

    articulo.addEventListener('mouseleave', () => { // mouse cuando se va de encima del item
        articulo.classList.remove("articulo-categoria-mouseenter");
        });

    articulo.addEventListener('mousedown', () => { // mouse cuando mantengo presionado el item
        articulo.classList.add("articulo-categoria-mousedown");
        });

    articulo.addEventListener('mouseup', () => { // mouse cuando dejo de presionar el item
        articulo.classList.remove("articulo-categoria-mousedown");
        });
});