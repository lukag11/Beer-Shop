const productsData = [
  {
    id: 1,
    nombre: "QUILMES RUBIA",
    precio: 200,
    tipo: "industrial",
    cardImg: "./image/latas/quilmes-rubia.png",
  },
  {
    id: 2,
    nombre: "QUILMES STOUT",
    precio: 220,
    tipo: "industrial",
    cardImg: "./image/latas/quilmes-negra.png",
  },
  {
    id: 3,
    nombre: "QUILMES BOCK",
    precio: 180,
    tipo: "industrial",
    cardImg: "./image/latas/quilmes-bock-removebg-preview.png",
  },
  {
    id: 4,
    nombre: "BRAHMA",
    precio: 200,
    tipo: "industrial",
    cardImg: "./image/latas/brahama.png",
  },
  {
    id: 5,
    nombre: "STELLA NEGRA",
    precio: 250,
    tipo: "industrial",
    cardImg: "./image/latas/stella-negra.png",
  },
  {
    id: 6,
    nombre: "STELLA RUBIA",
    precio: 225,
    tipo: "industrial",
    cardImg: "./image/latas/stella-rubia.png",
  },
  {
    id: 7,
    nombre: "HEINEKEN",
    precio: 235,
    tipo: "industrial",
    cardImg: "./image/latas/heineken.png",
  },
  {
    id: 8,
    nombre: "BUDWEISER",
    precio: 200,
    tipo: "industrial",
    cardImg: "./image/latas/budweiser.png",
  },
  {
    id: 9,
    nombre: "MILLER",
    precio: 160,
    tipo: "industrial",
    cardImg: "./image/latas/miller.png",
  },
  {
    id: 10,
    nombre: "CORDOBA",
    precio: 130,
    tipo: "industrial",
    cardImg: "./image/latas/cordoba.png",
  },
  {
    id: 11,
    nombre: "AMSTEL",
    precio: 200,
    tipo: "industrial",
    cardImg: "./image/latas/amstel.png",
  },
  {
    id: 12,
    nombre: "SCHNEIDER RUBIA",
    precio: 200,
    tipo: "industrial",
    cardImg: "./image/latas/schneider-rubia.png",
  },
  {
    id: 13,
    nombre: "SCHNEIDER ROJA",
    precio: 170,
    tipo: "industrial",
    cardImg: "./image/latas/schneider-roja.png",
  },
  {
    id: 14,
    nombre: "SCHNEIDER NEGRA",
    precio: 160,
    tipo: "industrial",
    cardImg: "./image/latas/schneider-negra.png",
  },
  {
    id: 15,
    nombre: "PEÑON DEL AGUILA KOLSCH",
    precio: 280,
    tipo: "artesanal",
    cardImg: "./image/latas/peñon-kolsh.png",
  },
  {
    id: 16,
    nombre: "PEÑON DEL AGUILA NEGRA",
    precio: 290,
    tipo: "artesanal",
    cardImg: "./image/latas/peñon-negra.png",
  },
  {
    id: 17,
    nombre: "PEÑON DEL AGUILA IPA",
    precio: 290,
    tipo: "artesanal",
    cardImg: "./image/latas/peñon-ipa.png",
  },
  {
    id: 18,
    nombre: "TEMPLE GOLDEN",
    precio: 200,
    tipo: "artesanal",
    cardImg: "./image/latas/temple-golden-removebg-preview.png",
  },
  {
    id: 19,
    nombre: "TEMPLE HONEY",
    precio: 200,
    tipo: "artesanal",
    cardImg: "./image/latas/temple-honey-removebg-preview.png",
  },
  {
    id: 20,
    nombre: "TEMPLE SCCOTISH",
    precio: 290,
    tipo: "artesanal",
    cardImg: "./image/latas/temple-sccotish-removebg-preview.png",
  },
  {
    id: 21,
    nombre: "VASO QUILMES",
    precio: 180,
    tipo: "accesorio",
    cardImg: "./image/accesorios/vaso-quilmes.png",
  },
  {
    id: 22,
    nombre: "CONSERVADORA BRAHMA",
    precio: 290,
    tipo: "accesorio",
    cardImg: "./image/accesorios/conservadora-brahma.png",
  },
  {
    id: 23,
    nombre: "GORRA PATAGONIA",
    precio: 290,
    tipo: "accesorio",
    cardImg: "./image/accesorios/gorra-patagonia.png",
  },
  {
    id: 24,
    nombre: "REMERA HEINEKEN",
    precio: 290,
    tipo: "accesorio",
    cardImg: "./image/accesorios/remera-heineken-.png",
  },
  {
    id: 25,
    nombre: "REMERA QUILMES",
    precio: 290,
    tipo: "accesorio",
    cardImg: "./image/accesorios/remera-quilmes.png",
  },
  {
    id: 26,
    nombre: "VASO AMSTEL",
    precio: 290,
    tipo: "accesorio",
    cardImg: "./image/accesorios/vaso-amstel-removebg-preview.png",
  },
];

// hacer paginacion al presionar el boton mostrar mas

const paginacionProductos = (tamaño) => {
  let dividirProductos = [];
  for (let i = 0; i < productsData.length; i += tamaño) {
    dividirProductos.push(productsData.slice(i, i + tamaño));
  }
  return dividirProductos;
};

// dividir la paginacion en 6

const GuardarPaginacion = {
  dividirProductos: paginacionProductos(6),
  proximoProductos: 1,
  limiteProductos: paginacionProductos(6).length,
};

// console.log(GuardarPaginacion);
