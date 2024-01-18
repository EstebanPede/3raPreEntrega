export const productos = [
  {
    id: 1,
    nombre: "Corrediza",
    precio: 150,
    imagen:"./img/abertura.jpg",
    categoria:"Novissima"
  },
  {
    id: 2,
    nombre: "Raja de abrir",
    precio: 100,
    imagen:"./img/abrir.jpg",
    categoria:"Novissima"
  },
  {
    id: 3,
    nombre: "Corrediza",
    precio: 50,
    imagen:"./img/corrediza.jpg",
    categoria:"Europa"
  },
  {
    id: 4,
    nombre: "Banderola",
    precio: 50,
    imagen:"./img/g1.jpg",
    categoria:"Europa"
  },
  {
    id: 5,
    nombre: "Corrediza",
    precio: 50,
    imagen:"./img/g2.jpg",
    categoria:"Modena"
  },
];

const actualizarProductosEnLocalStorage = () => {
  localStorage.setItem("productos", JSON.stringify(productos));
};

const cargarProductosDesdeLocalStorage = () => {
  return JSON.parse(localStorage.getItem("productos")) || productos;
};

// Realiza cambios en la lista de productos
productos[0].precio = 200; // Por ejemplo, cambia el precio del primer producto

// Actualiza el almacenamiento local con la lista modificada
actualizarProductosEnLocalStorage();

// Luego, vuelves a cargar los productos desde el almacenamiento local
const storedProductos = cargarProductosDesdeLocalStorage();

// Ahora puedes usar storedProductos en tu aplicación
console.log(storedProductos);

// JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));

