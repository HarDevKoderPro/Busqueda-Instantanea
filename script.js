"use strict";

// Referencias de los elementos del DOM
const getEl = (id) => document.getElementById(id);
const inputBusqueda = getEl("inputBusqueda");
const spanResultados = getEl("spanResultados");

// variables Globales
let datosFiltrados = [];
const datos = [
  { nombre: "juan", edad: 23, ciudad: "Medellin" },
  { nombre: "pedro", edad: 25, ciudad: "Bogotá" },
  { nombre: "patricia", edad: 28, ciudad: "New York" },
  { nombre: "maria", edad: 22, ciudad: "Cali" },
  { nombre: "melissa", edad: 28, ciudad: "Medellin" },
  { nombre: "julio", edad: 33, ciudad: "Bucaramanga" },
];

// Funcion que realiza la busqueda
const busquedaInstantanea = () => {
  let resultados = "";
  if (inputBusqueda.value === "") {
    resultados = "";
  } else {
    let texto = inputBusqueda.value //Capturo texto
      .trim() //Elimino espacios antes y despues
      .toLowerCase(); //Convierto a minusculas

    // Filtro datos a medida que se va digitando en el input
    let datosFiltrados = datos.filter((dato) => dato.nombre.startsWith(texto));

    // Guardo datos filtrados para mostrarlos
    resultados = "";
    datosFiltrados.forEach((item) => {
      resultados += `
        Nombre: ${item.nombre}<br>
        Edad: ${item.edad}<br>
        Ciudad: ${item.ciudad}
      </br></br>
    `;
    });
  }

  return resultados;
};

// Ejecucion de la busqueda al tipear en el input
inputBusqueda.addEventListener("input", () => {
  spanResultados.innerHTML = busquedaInstantanea();
});
