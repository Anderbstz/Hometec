const listaproductos = {
  productos: [
    {
      id: 1,
      nombre: "SAMSUNG GALAXY S23 8GB 128GB BLACK",
      precio: 3499.00,
      precio_de_oferta: 2599.00,
      stock: 20,
      categoria: "Smartphones",
      imagen: "/imgs/products/smartphones/1.jpg",
    },
    {
      id: 2,
      nombre: "IPHONE 13 128GB 12MP + 12MP 6.1 AZUL MEDIANOCHE",
      precio: 3199.00,
      precio_de_oferta: 2799.00,
      stock: 15,
      categoria: "Smartphones",
      imagen: "/imgs/products/smartphones/2.jpg",
    },
    {
      id: 3,
      nombre: "HONOR X6A 128GB 4GB RAM 50MP",
      precio: 599.00,
      precio_de_oferta: 459.00,
      stock: 10,
      categoria: "Smartphones",
      imagen: "/imgs/products/smartphones/3.jpg",
    },
    {
      id: 4,
      nombre: "MOTOROLA MOTO G34 256GB 8GB RAM 50MP",
      precio: 749.00,
      precio_de_oferta: 649.00,
      stock: 4,
      categoria: "Smartphones",
      imagen: "/imgs/products/smartphones/4.jpg",
    },
    {
      id: 5,
      nombre: "SAMSUNG GALAXY S23 ULTRA 512GB 12GB RAM NEGRO",
      precio: 5099.00,
      precio_de_oferta: 4199.00,
      stock: 4,
      categoria: "Smartphones",
      imagen: "/imgs/products/smartphones/5.jpg",
    },
    {
      id: 6,
      nombre: "SAMSUNG GALAXY A15 256GB 8GB RAM BLACK",
      precio:  749.00,
      precio_de_oferta: 699.00,
      stock: 4,
      categoria: "Smartphones",
      imagen: "/imgs/products/smartphones/6.jpg",
    },
    {
      id: 7,
      nombre: "SAMSUNG GALAXY-A55 5G 8GB 256GB",
      precio: 1899.00,
      precio_de_oferta: 1699.00,
      stock: 4,
      categoria: "Smartphones",
      imagen: "/imgs/products/smartphones/7.jpg",
    },
    {
      id: 8,
      nombre: "XIAOMI REDMI NOTE 13 PRO 256GB 8GB",
      precio: 1299.00,
      precio_de_oferta: 1049.00,
      stock: 4,
      categoria: "Smartphones",
      imagen: "/imgs/products/smartphones/8.jpg",
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