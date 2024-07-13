const listaproductos = {
  productos: [
    {
      id: 1,
      nombre: "PARLANTE PORTÁTIL BLUETOOTH JBL CHARGE 5",
      precio: 599,
      precio_de_oferta: 549,
      stock: 20,
      categoria: "Audio",
      imagen: "/imgs/products/audio/1.jpg",
    },
    {
      id: 2,
      nombre: "PARLANTE PORTÁTIL BLUETOOTH JBL BOOMBOX 3",
      precio:  1599.00,
      precio_de_oferta: 1499.00,
      stock: 15,
      categoria: "Audio",
      imagen: "/imgs/products/audio/2.jpg",
    },
    {
      id: 3,
      nombre: "JBL CHARGE 4 - ALTAVOZ PORTÁTIL CON BLUETOOTH",
      precio: 609.0,
      precio_de_oferta: 559.00,
      stock: 10,
      categoria: "Audio",
      imagen: "/imgs/products/audio/3.jpg",
    },
    {
      id: 4,
      nombre: "PARLANTE BLUETOOTH LG XBOOM GO PL7 CON IPX5",
      precio: 449.0,
      precio_de_oferta: 409.00,
      stock: 4,
      categoria: "Audio",
      imagen: "/imgs/products/audio/4.jpg",
    },
    {
      id: 5,
      nombre: "PARLANTE JBL CLIP 5 NEGRO - BLUETOOTH",
      precio: 279.00,
      precio_de_oferta: 259.00,
      stock: 4,
      categoria: "Audio",
      imagen: "/imgs/products/audio/5.jpg",
    },
    {
      id: 6,
      nombre: "JBL GO2 - ALTAVOZ BLUETOOTH ULTRA PORTÁTIL",
      precio: 499.0,
      precio_de_oferta: 299.0,
      stock: 4,
      categoria: "Audio",
      imagen: "/imgs/products/audio/6.jpg",
    },
    {
      id: 7,
      nombre: "PARLANTE PORTÁTIL INALÁMBRICO JBL GO 3",
      precio: 299.0,
      precio_de_oferta: 199.0,
      stock: 4,
      categoria: "Audio",
      imagen: "/imgs/products/audio/7.jpg",
    },
    {
      id: 8,
      nombre: "JBL SPEAKER GO3 SPEAKER BLUETOOTH",
      precio: 199.00,
      precio_de_oferta: 149.00,
      stock: 4,
      categoria: "Audio",
      imagen: "/imgs/products/audio/8.jpg",
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

