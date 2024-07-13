const listaproductos = {
  productos: [
    {
      id: 1,
      nombre: "Lavaseca de 11Kg de Lavado y 7Kg de Secado, AI DD™",
      precio: 1999.99,
      precio_de_oferta: 1499.0,
      stock: 20,
      categoria: "Lavadoras",
      imagen: "/imgs/offers/fiestas-patrias/1.jpg",
    },
    {
      id: 2,
      nombre: "LAVADORA LG CARGA SUPERIOR 19KG WT19BPB...",
      precio: 1499,
      precio_de_oferta: 999.0,
      stock: 15,
      categoria: "Lavadoras",
      imagen: "/imgs/offers/fiestas-patrias/2.jpg",
    },
    {
      id: 3,
      nombre: "Refrigeradora Top Freezer 374L con Door Cooling",
      precio: 2299.0,
      precio_de_oferta: 1599,
      stock: 10,
      categoria: "Refrigeradoras",
      imagen: "/imgs/offers/fiestas-patrias/3.jpg",
    },
    {
      id: 4,
      nombre: "Tostadora de Pan Holstein 2 Rebanadas 750W...",
      precio: 199.0,
      precio_de_oferta: 99.0,
      stock: 4,
      categoria: "Electrodomésticos",
      imagen: "/imgs/offers/fiestas-patrias/4.jpg",
    },
    {
      id: 5,
      nombre: "Waflera Redonda RCE-WAFFLE100R",
      precio: 199.0,
      precio_de_oferta: 149.0,
      stock: 7,
      categoria: "Electrodomésticos",
      imagen: "/imgs/products/electrodomesticos/1.jpg",
    },
    {
      id: 6,
      nombre: "Arrocera Oster® 1,8 lts tapa de vidrio",
      precio: 169.0,
      precio_de_oferta: 139.0,
      stock: 5,
      categoria: "Electrodomésticos",
      imagen: "/imgs/products/electrodomesticos/2.jpg",
    },
    {
      id: 7,
      nombre: "Aire Acondicionado Premium 24,000 BTU WindFree",
      precio: 3899.0,
      precio_de_oferta: 3599.0,
      stock: 2,
      categoria: "Electrodomésticos",
      imagen: "/imgs/products/electrodomesticos/3.jpg",
    },
    {
      id: 8,
      nombre: "Licuadora Oster® Clasica 3 Velocidades Cromada",
      precio: 549.0,
      precio_de_oferta: 489.0,
      stock: 7,
      categoria: "Electrodomésticos",
      imagen: "/imgs/products/electrodomesticos/4.jpg",
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

