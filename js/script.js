const colorRange = document.getElementById("colorRange");

colorRange.addEventListener("input", cambiarColorFondo);

function cambiarColorFondo() {
  document.body.style.backgroundColor = `hsl(${colorRange.value}, 50%, 50%)`;
  document.body.style.color = colorRange.value > 180 ? "black" : "white";
  //Almacenamos las preferencias en el LocalStorage
  localStorage.setItem("color", colorRange.value);
}

const colorFondoAlmacenado = localStorage.getItem("color");
colorRange.value = colorFondoAlmacenado ?? 250;
cambiarColorFondo();
