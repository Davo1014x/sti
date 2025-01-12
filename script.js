// Evento para manejar el formulario de registro
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar recarga de la página

  // Obtener valores de los campos del formulario
  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();
  const metodoPago = document.getElementById("metodo-pago").value;
  const alerta = document.getElementById("alerta");

  // Validación y mensajes dinámicos
  if (usuario && contrasena) {
    alerta.style.color = "#90EE90"; // Verde claro para éxito
    alerta.textContent = `Usuario registrado con éxito:
- Usuario: ${usuario}
- Método de pago: ${metodoPago}`;
  } else {
    alerta.style.color = "#FFCCCB"; // Rojo claro para error
    alerta.textContent = "Por favor, complete todos los campos del formulario.";
  }
});
