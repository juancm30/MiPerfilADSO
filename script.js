SCRIPT.JS
const boton = document.getElementById("btnModo");

boton.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
});

const anioActual = new Date().getFullYear();
document.getElementById("anio").textContent = anioActual;

