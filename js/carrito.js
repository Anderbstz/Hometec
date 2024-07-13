let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function actualizarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('col-md-4', 'mb-3');
        productoDiv.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                    <button class="btn btn-danger" onclick="eliminarDelCarrito(${index})">Eliminar</button>
                </div>
            </div>
        `;
        carritoContainer.appendChild(productoDiv);
        total += producto.precio;
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

document.getElementById('checkout').addEventListener('click', () => {
    if (carrito.length > 0) {
        alert('Gracias por tu compra!');
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    } else {
        alert('El carrito está vacío.');
    }
});

actualizarCarrito();