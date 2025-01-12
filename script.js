/* 
- Permite realizar busqueda de palabras a medida que se van
  ingresando letras en el input
*/

// Activar modo estricto
"use strict";

// Referencio los elementos del DOM
const doQueSel = (selector) => document.querySelector(selector);
const inputBusqueda = doQueSel(".inputBusqueda");
const spanResultados = doQueSel(".spanResultados");

// variables Globales
let datosFiltrados = [];
const datos = [
  { nombre: "Juan", edad: 23, ciudad: "Medellin" },
  { nombre: "Pedro", edad: 25, ciudad: "Bogotá" },
  { nombre: "Maria", edad: 22, ciudad: "Cali" },
  { nombre: "Melissa", edad: 28, ciudad: "Medellin" },
  { nombre: "Julio", edad: 33, ciudad: "Bucaramanga" },
];

// Funcion que realiza la busqueda
function busquedaInstantanea() {
  // Capturo palabra a filtrar
  let busqueda =
    inputBusqueda.value.charAt(0).toUpperCase() +
    inputBusqueda.value.split("").splice(1).join("").toLowerCase();
  // no muestro datos si input busqueda esta vacio
  if (busqueda === "") {
    datosFiltrados = [];
  } else {
    datosFiltrados = datos.filter((dato) => dato.nombre.startsWith(busqueda));
  }

  // Si no hay coincidencias no muestra datos
  if (datosFiltrados.length === 0) {
    spanResultados.innerHTML = "<p>No se encontraron resultados</p>";
  } else {
    // Formateo los datos filtrados
    let resultados = "";
    datosFiltrados.forEach((dato) => {
      resultados += `<p>
      Nombre: ${dato.nombre}<br>
      Edad: ${dato.edad}<br>
      Ciudad: ${dato.ciudad}
      </p><br>`;
      // Si no hay resultados, mostrar mensaje vacío
      if (datosFiltrados.length === 0) {
        resultados = "<p>No se encontraron resultados</p>";
      }
      console.log(datosFiltrados);
      // Muestro los resultados en el span
      spanResultados.innerHTML = resultados;
    });
  }
}

inputBusqueda.addEventListener("input", busquedaInstantanea);
