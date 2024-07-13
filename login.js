document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnCrearCuenta').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto
        
        // Obtener los valores de los inputs
        var nombre = document.getElementById('nombreInput').value.trim();
        var apellido = document.getElementById('apellidoInput').value.trim();
        var dni = document.getElementById('dniInput').value.trim();
        var correo = document.getElementById('correoInput').value.trim();
        var contrasena = document.getElementById('contrasenaInput').value.trim();
        var autorizacion = document.getElementById('autorizacionInput').checked;

        // Validar nombre (mínimo 5 caracteres)
        if (nombre.length < 5) {
            alert('El nombre debe tener al menos 5 caracteres.');
            return;
        }

        // Validar apellido (mínimo 5 caracteres)
        if (apellido.length < 5) {
            alert('El apellido debe tener al menos 5 caracteres.');
            return;
        }

        // Validar DNI (exactamente 8 caracteres)
        if (dni.length !== 8) {
            alert('El DNI debe tener exactamente 8 caracteres.');
            return;
        }

        // Validar formato de correo electrónico
        var correoValido = /\S+@\S+\.\S+/;
        if (!correoValido.test(correo)) {
            alert('Ingrese un correo electrónico válido.');
            return;
        }

        // Validar contraseña (debe contener al menos una letra y un número)
        var contieneLetra = /[a-zA-Z]/.test(contrasena);
        var contieneNumero = /\d/.test(contrasena);
        if (!contieneLetra || !contieneNumero) {
            alert('La contraseña debe contener al menos una letra y un número.');
            return;
        }

        // Validar checkbox de autorización
        if (!autorizacion) {
            alert('Debe autorizar el tratamiento de sus datos.');
            return;
        }

        // Si todos los campos están validados correctamente, redirigir a index.html
        window.location.href = 'index.html';
    });
});