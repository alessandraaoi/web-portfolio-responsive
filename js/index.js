// menu

// Guardo id y class en var para poder llamarlas en funciones 
let lanzador = "#link-menu"; //id a
let desplegable = "#menu"; //id nav
let despliegaClase = "menu-desplegado"; //class from css

function nav() {
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click", despliegaMenu);
}

function despliegaMenu() {
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

nav();


// cookies

document.addEventListener("DOMContentLoaded", () => {
  const cookiePopup = document.getElementById("cookie-popup");
  const btnAceptar = document.getElementById("btn-aceptar-cookies");

  // Revisar si ya aceptó cookies
  if (localStorage.getItem("cookies-aceptadas") === "true") {
    cookiePopup.classList.add("oculto");
  }

  // Botón aceptar
  btnAceptar.addEventListener("click", () => {
    cookiePopup.classList.add("oculto");
    localStorage.setItem("cookies-aceptadas", "true");
  });
});
