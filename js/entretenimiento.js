const listaproductos = {
  productos: [
    {
      id: 1,
      nombre: "PlayStation 5 Slim Lector de discos + Spiderman 2",
      precio: 2899.0,
      precio_de_oferta: 2499.0,
      stock: 20,
      categoria: "Entretenimiento",
      imagen: "/imgs/products/entretenimiento/1.jpg",
    },
    {
      id: 2,
      nombre: "Steam Deck Consola Portátil - 256 GB ",
      precio: 2999,
      precio_de_oferta: 2799.0,
      stock: 15,
      categoria: "Entretenimiento",
      imagen: "/imgs/products/entretenimiento/2.jpg",
    },
    {
      id: 3,
      nombre: "Nintendo SWITCH OLED White",
      precio: 1799.0,
      precio_de_oferta: 1599,
      stock: 10,
      categoria: "Entretenimiento",
      imagen: "/imgs/products/entretenimiento/3.jpg",
    },
    {
      id: 4,
      nombre: "Parlante Logitech G560 Bluetooth Negro",
      precio: 1099.0,
      precio_de_oferta: 849.0,
      stock: 5,
      categoria: "Entretenimiento",
      imagen: "/imgs/products/entretenimiento/4.jpg",
    },
    {
      id: 5,
      nombre: "Galaxy Tab S9 12+256gb 11'' Graphite",
      precio: 3899.0,
      precio_de_oferta: 3599.0,
      stock: 9,
      categoria: "Entretenimiento",
      imagen: "/imgs/products/entretenimiento/5.jpg",
    },
    {
      id: 6,
      nombre: "Sony Home Theater 5.1 con parlantes HT-S40R",
      precio: 1299.0,
      precio_de_oferta: 1099.0,
      stock: 3,
      categoria: "Entretenimiento",
      imagen: "/imgs/products/entretenimiento/6.jpg",
    },
    {
      id: 7,
      nombre: "Consola Xbox Series X 1TB Negro",
      precio: 2799.0,
      precio_de_oferta: 2499.0,
      stock: 6,
      categoria: "Entretenimiento",
      imagen: "/imgs/products/entretenimiento/7.jpg",
    },
    {
      id: 8,
      nombre: "TARJETA GRAFICA VENTUS 2X RTX4060 8GB OC",
      precio: 1549.0,
      precio_de_oferta: 1399.0,
      stock: 8,
      categoria: "Entretenimiento",
      imagen: "/imgs/products/entretenimiento/8.jpg",
    },
  ],
};

document.addEventListener('DOMContentLoaded', function() {
  generarTarjetasProductos();
});

// Función para generar las tarjetas de productos en HTML
function generarTarjetasProductos() {
  // Generar tarjetas de productos normales
  const container = document.getElementById("container");
  let htmlProductos = '';
  
  listaproductos.productos.forEach((producto) => {
      let precioHTML = '';
      if (producto.precio_de_oferta && producto.precio_de_oferta < producto.precio) {
          precioHTML = `
              <p class="card-text">
                  <span class="text-decoration-line-through">S/ ${producto.precio.toFixed(2)}</span><br>
                  <strong>S/ ${producto.precio_de_oferta.toFixed(2)}</strong>
              </p>`;
      } else {
          precioHTML = `<p class="card-text">S/ ${producto.precio.toFixed(2)}</p>`;
      }

      htmlProductos += `
          <div class="col-md-3 mb-3">
              <div class="card">
                  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                  <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      ${precioHTML}
                      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" onclick="mostrarDetallesProducto(${producto.id}, 'productos')">Comprar</button>
                  </div>
              </div>
          </div>`;
  });
  
  container.innerHTML = htmlProductos;

}

// Función para mostrar los detalles del producto en el modal
function mostrarDetallesProducto(id, tipoProducto) {
  let producto;
  if (tipoProducto === 'productos') {
      producto = listaproductos.productos.find(producto => producto.id === id);
  } else if (tipoProducto === 'ofertasDiarias') {
      producto = listaproductos.ofertasDiarias.find(producto => producto.id === id);
  }

  document.getElementById('modalProductImage').src = producto.imagen;
  document.getElementById('modalProductName').textContent = producto.nombre;
  document.getElementById('modalProductPrice').textContent = `Precio: S/ ${producto.precio.toFixed(2)}`;
  document.getElementById('modalProductOfferPrice').textContent = producto.precio_de_oferta ? `Precio de oferta: S/ ${producto.precio_de_oferta.toFixed(2)}` : '';
  document.getElementById('modalProductStock').textContent = `Stock: ${producto.stock}`;
  document.getElementById('modalProductCategory').textContent = `Categoría: ${producto.categoria}`;
}

// Función para mostrar el modal de confirmación
function mostrarConfirmacion() {
  const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
  confirmationModal.show();
}