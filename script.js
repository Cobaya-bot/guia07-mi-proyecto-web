function saludar() {
  const inputNombre = document.getElementById("nombre");
  const nombre = inputNombre.value.trim();
  const resultado = document.getElementById("resultado");

  if (nombre === "") {
    inputNombre.className = "invalido";
    resultado.className = "error";
    resultado.innerText = "Por favor, ingresa tu nombre.";
  } else {
    inputNombre.className = "valido";
    resultado.className = "exito";
    resultado.innerText = "Hola " + nombre + ", bienvenido al sistema.";
  }
}

function validarCorreo() {
  const inputCorreo = document.getElementById("correo");
  const correo = inputCorreo.value.trim();
  const mensaje = document.getElementById("mensajeCorreo");

  // Expresión regular para validar formato de correo
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (correo === "") {
    inputCorreo.className = "invalido";
    mensaje.className = "error";
    mensaje.innerText = "Debe ingresar un correo.";
  } else if (!patronCorreo.test(correo)) {
    inputCorreo.className = "invalido";
    mensaje.className = "error";
    mensaje.innerText = "El formato del correo no es válido.";
  } else {
    inputCorreo.className = "valido";
    mensaje.className = "exito";
    mensaje.innerText = "Correo registrado correctamente.";
  }
}
