import libros from "../../data/libros.json" with { type: 'json' };
import configuracion from "../../config/configuracion.json" with { type: 'json' };


const tabCategoria0 = document.querySelector("#tab-categoria-0");

var linksCategorias = document.querySelectorAll("a.tab-categoria");
var articulos;

linksCategorias.forEach(function(linkCategoria) {
   linkCategoria.addEventListener("click", function() {
      articulos = ""



      if (linkCategoria.innerText == 'TODOS'){
         seccionTodos();
      } else{
         borrarClones();
      }

      cargarLibrosEnBaseACategoria(linkCategoria, document);

   });
});


function cargarLibrosEnBaseACategoria(linkCategoria, elementoHtml){
   Object.entries(libros).forEach((entry) => {
      const [key, value] = entry;

      if (linkCategoria.innerText === value.Categoria)
      {
         elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-nombre").innerText = value["Nombre"];
         elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-autor").innerText = value["Autor"];
         elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > img.item-valor-portada").src = value["Portada"];
         elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > img.item-valor-portada").alt = value["Nombre"];
         elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-descripcion").innerText = value["Descripcion"];
         elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-rating").innerText = value["Rating"];
      

         ponerEstrellas(value);

         
      
         for (const property in value) {
            switch(property.split(".")[0]) {
               case "personalizado_1":
                  elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_1").innerText = property.split(".")[1];
                  elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_1").innerText = value[property];
                  break;
               case "personalizado_2":
                  elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_2").innerText = property.split(".")[1];
                  elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_2").innerText = value[property];
                  break;
               case "personalizado_3":
                  elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_3").innerText = property.split(".")[1];
                  elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_3").innerText = value[property];
                  break;
               case "personalizado_4":
                  elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_4").innerText = property.split(".")[1];
                  elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_4").innerText = value[property];
                  break;
               case "personalizado_5":
                  elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_5").innerText = property.split(".")[1];
                  elementoHtml.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_5").innerText = value[property];
                  break;
            }
         };

         document.querySelector("article." + value["Id"].split("-")[1]).id = value["Id"];
      };

      });
}



if(configuracion["modo-test-prod"] === "prod") {
   tabCategoria0.click();  
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

// seccion todas

function seccionTodos(){

   const main = document.querySelector('main');

   let section = document.querySelector('#seccion-categoria');

   cargarLibrosEnBaseACategoria(linksCategorias[1], section);

   const cantidadDePackDeTarjetasFaltantes = 4;
   
   for(let i = 0; i < cantidadDePackDeTarjetasFaltantes ; i++){// arranca en 1 para saltearse la seccion de TODAS
   
      let sectionCopia = section.cloneNode(true);
      sectionCopia.classList.add('clon');

      switch(i){

         case 0:
            cargarLibrosEnBaseACategoria(linksCategorias[2], sectionCopia);
            break;

         case 1:
            cargarLibrosEnBaseACategoria(linksCategorias[3], sectionCopia);
            break;

         case 2:
            cargarLibrosEnBaseACategoria(linksCategorias[4], sectionCopia);
            break;

         case 3:
            cargarLibrosEnBaseACategoria(linksCategorias[5], sectionCopia);
            break;

            default:
               break;

      }

      main.appendChild(sectionCopia);
   
   }
}

function borrarClones(){

   const main = document.querySelector('main');

   let cantidadDeClones = document.querySelectorAll('.clon').length;

   for (let i = 0 ; i < cantidadDeClones ; i++){

      main.removeChild(document.querySelector('.clon'));

   }

}