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
  ],
  ofertasDiarias: [
      {
        id: 5,
        nombre: "ASPIRADORA ELECTROLUX ABS01 1200W",
        precio: 179.0,
        precio_de_oferta: 89.0,
        stock: 9,
        categoria: "Electrodomésticos",
        imagen: "/imgs/offers/fiestas-patrias/5.jpg",
      },
      {
        id: 6,
        nombre: "LG FHD 43'' LM6370 Smart TV con ThinQAI",
        precio: 1299.0,
        precio_de_oferta: 999.0,
        stock: 10,
        categoria: "Electrónica",
        imagen: "/imgs/offers/fiestas-patrias/6.jpg",
      },
      {
        id: 7,
        nombre: "MINI WAFFLERA ANTIADHERENTE ELÉCTRICA",
        precio: 169.0,
        precio_de_oferta: 109.0,
        stock: 10,
        categoria: "Electrodomésticos",
        imagen: "/imgs/offers/fiestas-patrias/7.jpg",
      },
      {
        id: 8,
        nombre: "Licuadora Practika 1.5LT BLW-450",
        precio: 599.0,
        precio_de_oferta: 459.0,
        stock: 10,
        categoria: "Electrodomésticos",
        imagen: "/imgs/offers/fiestas-patrias/8.jpg",
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

  // Generar tarjetas de ofertas diarias
  const containerOfertasDiarias = document.getElementById("containerOfertasDiarias");
  let htmlOfertasDiarias = '';
  
  listaproductos.ofertasDiarias.forEach((producto) => {
      let precioHTML = '';
      if (producto.precio_de_oferta && producto.precio_de_oferta < producto.precio) {
          precioHTML = `
              <p class="card-text">
                  <span class="text-decoration-line-through">Precio: S/ ${producto.precio.toFixed(2)}</span><br>
                  Precio de oferta: S/ ${producto.precio_de_oferta.toFixed(2)}
              </p>`;
      } else {
          precioHTML = `<p class="card-text">Precio: S/ ${producto.precio.toFixed(2)}</p>`;
      }

      htmlOfertasDiarias += `
          <div class="col-md-3 mb-4">
              <div class="card">
                  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                  <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      ${precioHTML}
                      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" onclick="mostrarDetallesProducto(${producto.id}, 'ofertasDiarias')">Comprar</button>
                  </div>
              </div>
          </div>`;
  });
  
  containerOfertasDiarias.innerHTML = htmlOfertasDiarias;

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
