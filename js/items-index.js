const articulos = document.querySelectorAll('.articulo-categoria');


articulos.forEach(articulo => {

    articulo.addEventListener('mouseenter', () => {
        articulo.classList.add("articulo-categoria-mouseenter");
        });

    articulo.addEventListener('mouseleave', () => {
        articulo.classList.remove("articulo-categoria-mouseenter");
        });

    articulo.addEventListener('mousedown', () => {
        articulo.classList.add("articulo-categoria-mousedown");
        });

    articulo.addEventListener('mouseup', () => {
        articulo.classList.remove("articulo-categoria-mousedown");
        });
});