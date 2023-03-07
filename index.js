// Contenedor de productos

const productos = document.querySelector(".container-productos");
const productosCarrito = document.querySelector(".container-carrito");
const totalCarro = document.querySelector(".container-detalle-total");
const total = document.querySelector(".total");
const btnMostrar = document.querySelector(".cargar");
const Buscador = document.querySelector(".search");
const searchInput = document.getElementById("input");
const btnBuscarProducto = document.querySelector(".searchButton");
const btnComprar = document.querySelector(".btn-comprar-productos");
const btnCarrito = document.querySelector(".container-carrito-icon");
const btnMenu = document.querySelector(".menu-hamburgesa");
const btnFiltrar = document.querySelector(".filtrar");
const menuCarrito = document.querySelector(".carrito");
const menuFiltrar = document.querySelector(".categorias");
const listaCategoria = document.querySelectorAll(".category");
const menuNavBar = document.querySelector(".navbar-list");
const btnComprarCarrito = document.querySelector(".btn-comprar");
const btnVaciar = document.querySelector(".vaciar");
const mensajeEmergente = document.querySelector(".mensaje-emergente");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const GuardarLocalStorage = (listaCarrito) => {
  localStorage.setItem("carrito", JSON.stringify(listaCarrito));
};

// funcion para renderizar productos

const renderProducto = (productos) => {
  const { id, nombre, precio, cardImg } = productos;
  return `               
   <div class="productos">
                    <img src=${cardImg} alt=${nombre} class="imagen-productos">
                    <div class="descripcion-productos">
                        <div class="nombre-productos">
                            <!-- Nombre - Precio -->
                            <h4>${nombre}</h4>
                            <p>Precio</p>
                        </div>
                        <!-- Precio -->
                        <!-- <div class="precio-productos">

                        </div> -->
                        <!-- Funcion -->
                        <p class="valor">$ ${precio}</p>
                        <button class="btn-comprar-productos"
                        data-id='${id}'
                        data-nombre='${nombre}'
                        data-precio='${precio}'
                        data-img='${cardImg}'
                        >Comprar</button>
                    </div>

                </div>`;
};

// const renderProductos = (index = 0) => {
//   productos.innerHTML += GuardarPaginacion.dividirProductos[index]
//     .map(renderProducto)
//     .join("");
// };
const renderDividedProductos = (index = 0) => {
  productos.innerHTML += GuardarPaginacion.dividirProductos[index]
    .map(renderProducto)
    .join("");
};

const renderFiltroProductos = (category) => {
  const listaProducto = productsData.filter(
    (producto) => producto.tipo === category
  );

  productos.innerHTML = listaProducto.map(renderProducto).join("");
};

const renderProductos = (index = 0, category = undefined) => {
  if (!category) {
    renderDividedProductos(index);
    return;
  }
  renderFiltroProductos(category);
};

const estadodeBotonVerMas = (category) => {
  if (!category) {
    btnMostrar.classList.remove("hidden");
    return;
  }
  btnMostrar.classList.add("hidden");
};

estadoDeBotonActivo = (categoriaSeleccionada) => {
  const categorias = [...listaCategoria];
  categorias.forEach((btnCategoria) => {
    if (btnCategoria.dataset.category !== categoriaSeleccionada) {
      btnCategoria.classList.remove("active");
      return;
    }
    btnCategoria.classList.add("active");
  });
};

const estadoDeFiltros = (e) => {
  const categoriaSeleccionada = e.target.dataset.category;
  estadoDeBotonActivo(categoriaSeleccionada);
  estadodeBotonVerMas(categoriaSeleccionada);
};

const aplicarFiltro = (e) => {
  if (!e.target.classList.contains("category")) return;
  estadoDeFiltros(e);
  if (!e.target.dataset.category) {
    productos.innerHTML = "";
    renderProductos();
  } else {
    renderProductos(0, e.target.dataset.category);
    GuardarPaginacion.proximoProductos = 1;
  }
};

const buscarProducto = (e) => {
  document.querySelectorAll(".productos").forEach((productos) => {
    productos.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ? productos.classList.remove("hidden")
      : productos.classList.add("hidden");
  });
};

const UltimoElementoDelArray = () =>
  GuardarPaginacion.proximoProductos === GuardarPaginacion.limiteProductos;

const mostrarMasProductos = () => {
  renderProductos(GuardarPaginacion.proximoProductos);
  GuardarPaginacion.proximoProductos++;
  if (UltimoElementoDelArray()) {
    btnMostrar.classList.add("hidden");
  }
};

// Abrir menus

const abrirFiltro = () => {
  menuFiltrar.classList.toggle("abrir-filtrar");
  if (
    menuCarrito.classList.contains("abrir-carrito") ||
    menuNavBar.classList.contains("abrir-menu")
  ) {
    menuFiltrar.classList.remove("abrir-carrito");
    menuFiltrar.classList.remove("abrir-menu");
  }
};

const abrirMenu = () => {
  menuNavBar.classList.toggle("abrir-menu");
  if (menuCarrito.classList.contains("abrir-carrito")) {
    menuCarrito.classList.remove("abrir-carrito");
  }
};

const abrirCarro = () => {
  menuCarrito.classList.toggle("abrir-carrito");
  if (menuNavBar.classList.contains("abrir-menu")) {
    menuNavBar.classList.remove("abrir-menu");
  }
};

const CerrarMenuScroll = () => {
  if (
    !menuCarrito.classList.contains("abrir-carrito") &&
    !menuNavBar.classList.contains("abrir-menu") &&
    !menuFiltrar.classList.contains("abrir-filtrar")
  )
    return;
  menuNavBar.classList.remove("abrir-menu");
  menuCarrito.classList.remove("abrir-carrito");
  menuFiltrar.classList.remove("abrir-filtrar");
};

const cerrarMenuClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  menuNavBar.classList.remove("abrir-menu");
};

const cerrarMenuClickFiltrar = (e) => {
  if (!e.target.classList.contains("category")) return;
  menuFiltrar.classList.remove("abrir-filtrar");
};

//Carrito

const renderCarritoProducto = (productosCarrito) => {
  const { id, nombre, precio, img, cantidad } = productosCarrito;

  return `   <div class="container-carrito">
                    <div class="container-carrito-detalle">
                       <img src="${img}" alt="${nombre}" class="img-cerveza">
                        <div class="container-detalle-item">
                            <h4 class="item-cerveza">${nombre}</h4>
                            
                            <h4 class="item-precio">Precio</h4>
                            <h4 class="item-precio-detalle">${precio}</h4>
                        </div>
                        <div class="container-cantidad">
                            <button class="signo-cantidad menos" data-id=${id}>-</button>
                            <span class="cantidad">${cantidad}</span>
                            <button class="signo-cantidad mas" data-id=${id} >+</button>
                            <i class="fa fa-trash vaciar" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
  `;
};

const renderCarrito = () => {
  if (!carrito.length) {
    productosCarrito.innerHTML = `<div class="container-mensaje-carrito-vacio">
                        <h2>El carrito esta vacio</h2>
                        <img src="./image/otros/carritoVacio.png" alt="carrito vacio">
                    </div>
                `;
    return;
  }
  productosCarrito.innerHTML = carrito.map(renderCarritoProducto).join("");
};

// FUNCION PARA ACUMULAR (CALLBACK - CONVIERTE ALGO EN UN SOLO VALOR)
const OperacionCarro = () => {
  return carrito.reduce(
    (acumulador, pActual) =>
      acumulador + Number(pActual.precio) * pActual.cantidad,
    0
  );
};

const BloquearBoton = (btn) => {
  if (!carrito.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

const MostrarOperacionCarro = () => {
  total.innerHTML = `${OperacionCarro().toFixed(2)}`;
};

const crearProducto = (id, nombre, precio, img) => {
  return { id, nombre, precio, img };
};

const existeProducto = (productos) => {
  return carrito.find((item) => item.id === productos.id);
};

//POR SEGUNDA VEZ
const agregarUnidad = (productos) => {
  carrito = carrito.map((productosCarrito) => {
    return productosCarrito.id === productos.id
      ? { ...productosCarrito, cantidad: productosCarrito.cantidad + 1 }
      : productosCarrito;
  });
};

const mensajeEmergentePantalla = (msj) => {
  mensajeEmergente.classList.add("mensaje-efecto");
  mensajeEmergente.textContent = msj;
  setTimeout(() => {
    mensajeEmergente.classList.remove("mensaje-efecto");
  }, 2000);
};

//POR PRIMERA VEZ
const crearProductoCarrito = (productos) => {
  carrito = [...carrito, { ...productos, cantidad: 1 }];
};

const estadoDelCarrito = () => {
  GuardarLocalStorage(carrito);
  renderCarrito(carrito);
  MostrarOperacionCarro(carrito);
  BloquearBoton(btnComprarCarrito);
};

const agregarProducto = (e) => {
  if (!e.target.classList.contains("btn-comprar-productos")) return;
  const { id, nombre, precio, img } = e.target.dataset;
  const productos = crearProducto(id, nombre, precio, img);
  if (existeProducto(productos)) {
    agregarUnidad(productos);
    mensajeEmergentePantalla("Se agrego unidad al carrito");
  } else {
    crearProductoCarrito(productos);
    mensajeEmergentePantalla("Producto agregado al carrito ");
  }
  estadoDelCarrito();
};

const BorrarProductodelCarrito = (existeProducto) => {
  carrito = carrito.filter((productos) => productos.id !== existeProducto.id);
  estadoDelCarrito();
};

const sacarUnidadProducto = (existeProducto) => {
  carrito = carrito.map((productos) => {
    return productos.id === existeProducto.id
      ? { ...productos, cantidad: Number(productos.cantidad) - 1 }
      : productos;
  });
};

const menosBtn = (id) => {
  const existeProductoCarro = carrito.find((item) => item.id === id);
  if (existeProductoCarro.cantidad === 1) {
    if (window.confirm("Desea eliminar el producto del carrito")) {
      BorrarProductodelCarrito(existeProductoCarro);
    }
    return;
  }
  sacarUnidadProducto(existeProductoCarro);
};

const masBtn = (id) => {
  const existeProductoCarro = carrito.find((item) => item.id === id);
  agregarUnidad(existeProductoCarro);
};

const operarCantidad = (e) => {
  if (e.target.classList.contains("menos")) {
    menosBtn(e.target.dataset.id);
  } else if (e.target.classList.contains("mas")) {
    masBtn(e.target.dataset.id);
  }
  estadoDelCarrito();
};

const resetearCarro = () => {
  carrito = [];
  estadoDelCarrito();
};

const completarAccion = (confirmacionMsj, msjExitoso) => {
  if (!carrito.length) return;
  if (window.confirm(confirmacionMsj)) {
    resetearCarro();
    alert(msjExitoso);
  }
};

const completarCompra = () => {
  completarAccion("Desea Completar su Compra?", "Gracias Por su Compra !! ");
};

const vaciarCarro = () => {
  completarAccion(
    "Desea Vaciar el Carrito?",
    "No hay Productos en el carrito !! "
  );
};

// Funcion donde vamos a ejecutar todo

const init = () => {
  renderProductos();
  btnMostrar.addEventListener("click", mostrarMasProductos);
  window.addEventListener("scroll", CerrarMenuScroll);
  btnCarrito.addEventListener("click", abrirCarro);
  btnMenu.addEventListener("click", abrirMenu);
  btnFiltrar.addEventListener("click", abrirFiltro);
  searchInput.addEventListener("keyup", buscarProducto);
  menuFiltrar.addEventListener("click", aplicarFiltro);
  menuNavBar.addEventListener("click", cerrarMenuClick);
  menuFiltrar.addEventListener("click", cerrarMenuClickFiltrar);
  document.addEventListener("DOMContentLoaded", renderCarrito);
  document.addEventListener("DOMContentLoaded", MostrarOperacionCarro);
  productos.addEventListener("click", agregarProducto);
  productosCarrito.addEventListener("click", operarCantidad);
  btnComprarCarrito.addEventListener("click", completarCompra);
  BloquearBoton(btnComprarCarrito);
};

init();
