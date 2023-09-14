const formulario = document.querySelector("form");
const borrarConfig = document.querySelector("#borrarConfig");

// Agregamos escuchador de evento para cuando se envie el formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  guardarConfig();
});
// Agregamos escuchador de evento para cuando se haga click en borrar configuracion
borrarConfig.addEventListener("click", limpiarConfig);
// Agregamos escuchador de evento para cuando se cargue la pagina se cargue la info del local storage en caso que exista
window.addEventListener("load", cargarConfig);

// Función para guardar la configuración del usuario en localStorage
function guardarConfig() {
  const userName = document.querySelector("#username").value;
  const theme = document.querySelector("#theme").value;
  const saludarUsuario = document.querySelector("#saludarUsuario");

  localStorage.setItem("username", userName);
  localStorage.setItem("theme", theme);

  saludarUsuario.textContent = `Hola ${userName}!`;
  document.body.className = `theme-${theme}`;
}
// Función para cargar la configuración del usuario desde localStorage

function cargarConfig() {
  const SavedUserName = localStorage.getItem("username");
  const SavedTheme = localStorage.getItem("theme");
  if (SavedUserName) {
    document.querySelector(
      "#saludarUsuario"
    ).textContent = `Hola ${SavedUserName}!`;
    document.querySelector("#username").value = SavedUserName;
  }
  if (SavedTheme) {
    document.querySelector("#theme").value = SavedTheme;
    document.body.className = `theme-${SavedTheme}`;
  }
}
// Función para eliminar la configuración del usuario
function limpiarConfig() {
  localStorage.removeItem("username");
  localStorage.removeItem("theme");
  document.querySelector("#saludarUsuario").textContent = ``;
  document.querySelector("#username").value = "";
  document.querySelector("#theme").value = "light";
  document.body.className = ``;
}
