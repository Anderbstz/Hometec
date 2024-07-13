const listaproductos = {
  productos: [
    {
      id: 1,
      nombre: "GIGABYTE RTX 4060 8GB GDDR6 WINDFORCE OC",
      precio: 1699.99,
      precio_de_oferta: 1399.0,
      stock: 20,
      categoria: "Tarjeta Gráfica",
      imagen: "/imgs/products/comp/1.jpg",
    },
    {
      id: 2,
      nombre: "Intel Core i7 12700F 2.10GHz-4.90Ghz 12 Nucleos LGA1700",
      precio: 1499,
      precio_de_oferta: 1349.0,
      stock: 15,
      categoria: "Procesador",
      imagen: "/imgs/products/comp/2.jpg",
    },
    {
      id: 3,
      nombre: "Corsair 4000X RGB ATX Vidrio templado 3 RGB FANS",
      precio: 599.0,
      precio_de_oferta: 499,
      stock: 10,
      categoria: "Case Gamer",
      imagen: "/imgs/products/comp/3.jpg",
    },
    {
      id: 4,
      nombre: "Mouse logitech g203 Lightsync RGB Negro",
      precio: 139.0,
      precio_de_oferta: 119.0,
      stock: 6,
      categoria: "Mouse Gamer",
      imagen: "/imgs/products/comp/4.jpg",
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
