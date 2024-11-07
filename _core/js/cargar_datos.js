import libros from "../../data/libros.json" with { type: 'json' };
import configuracion from "../../config/configuracion.json" with { type: 'json' };

const tabCategoria1 = document.querySelector("#tab-categoria-1");

var linksCategorias = document.querySelectorAll("a.tab-categoria");
var articulos;

linksCategorias.forEach(function(linkCategoria) {
   linkCategoria.addEventListener("click", function() {
      articulos = ""
      Object.entries(libros).forEach((entry) => {
      const [key, value] = entry;

      if (linkCategoria.innerText === value.Categoria)
      {
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-nombre").innerText = value["Nombre"];
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-autor").innerText = value["Autor"];
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > img.item-valor-portada").src = value["Portada"];
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > img.item-valor-portada").alt = value["Nombre"];
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-descripcion").innerText = value["Descripcion"];
         document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-rating").innerText = value["Rating"];
      

         ponerEstrellas(value);

         
      
         for (const property in value) {
            switch(property.split(".")[0]) {
               case "personalizado_1":
                  document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_1").innerText = property.split(".")[1];
                  document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_1").innerText = value[property];
                  break;
               case "personalizado_2":
                  document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_2").innerText = property.split(".")[1];
                  document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_2").innerText = value[property];
                  break;
               case "personalizado_3":
                  document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_3").innerText = property.split(".")[1];
                  document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_3").innerText = value[property];
                  break;
               case "personalizado_4":
                  document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_4").innerText = property.split(".")[1];
                  document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_4").innerText = value[property];
                  break;
               case "personalizado_5":
                  document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_5").innerText = property.split(".")[1];
                  document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_5").innerText = value[property];
                  break;
            }
         };

         document.querySelector("article." + value["Id"].split("-")[1]).id = value["Id"];
      };

      });
   });
});

if(configuracion["modo-test-prod"] === "prod") {
   tabCategoria1.click();  
};


function ponerEstrellas(value){

   // le damos la clase inline que aplica el display inline para que quede aliniado junto con las estrellas
   document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-rating").classList.add("inline");
         
   // agarramos los contenedores que nos importan

   let contenedorEstrellas = document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > div.contenedor-estrellas");

   let headerArticulo = document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo");
  
   if (contenedorEstrellas == null){ // si no existen las estrellas, las creamos
      headerArticulo.appendChild(estrellas(value["Rating"]));
  } else {// caso contrario, si existen es porque son viejas(de otra libro), las removemos y hacemos unas nuevas con el Rating correspondiente
      headerArticulo.removeChild(contenedorEstrellas);
      headerArticulo.appendChild(estrellas(value["Rating"]));
  }

}

// Funcion para linea de estrellas dinamica para el rating

function estrellas(cantidadEstrellasAmarillas){
  let divEstrellas = document.createElement('div');
  divEstrellas.classList.add('contenedor-estrellas');
  divEstrellas.classList.add('inline'); // le agregamos la clase inline asi no se pone una linea abajo y queda al lado del numero de rating
  
  const cantidadDeEstrellasMaximas = 5;

  for (let i = 0; i < cantidadDeEstrellasMaximas; i++){

      if (i < cantidadEstrellasAmarillas){
         // aca se ponen las estrellas rellenas
         divEstrellas.innerHTML += '<i class="fa-solid fa-star"></i>';
      }else {
         // aca se ponen las estrellas vacias
         divEstrellas.innerHTML += '<i class="fa-regular fa-star"></i>';
      }
     
  }

  divEstrellas.style.color = "yellow";

 return divEstrellas;
};