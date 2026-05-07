// Validación en tiempo real del nombre
document.getElementById("nombre").addEventListener("input", function () {
  const nombre = this.value.trim();

  if (nombre === "") {
    this.className = "invalido";
  } else if (nombre.length < 3) {
    this.className = "invalido";
    document.getElementById("resultado").className = "error";
    document.getElementById("resultado").innerText =
      "El nombre debe tener al menos 3 caracteres.";
  } else {
    this.className = "valido";
    document.getElementById("resultado").innerText = "";
  }
});

// Validación en tiempo real del correo
document.getElementById("correo").addEventListener("input", function () {
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const correo = this.value.trim();

  if (correo === "") {
    this.className = "";
    document.getElementById("mensajeCorreo").innerText = "";
  } else if (!patronCorreo.test(correo)) {
    this.className = "invalido";
    document.getElementById("mensajeCorreo").className = "error";
    document.getElementById("mensajeCorreo").innerText =
      "Formato de correo inválido.";
  } else {
    this.className = "valido";
    document.getElementById("mensajeCorreo").className = "exito";
    document.getElementById("mensajeCorreo").innerText = "Correo válido ✓";
  }
});
