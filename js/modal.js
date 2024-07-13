//Al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
  });

//Al clickear en el botón ceerrar
document.getElementById('btn-offert').addEventListener('click', function() {
    console.log('Se ha cerrado el modal haciendo clic en el botón Cerrar.');
});

//Al clickear en el botón aceptar
document.getElementById('btn-offert2').addEventListener('click', function() {
    window.location.href = 'entretenimiento.html';
  });
