
const actualizarProductosEnLocalStorage = () => {
  localStorage.setItem("productos", JSON.stringify(productos));
};

const cargarProductosDesdeLocalStorage = () => {
  return JSON.parse(localStorage.getItem("productos")) || productos;
};


productos[0].precio = 200; 

// Actualiza almacenamiento 
actualizarProductosEnLocalStorage();

// cargar los productos 
const storedProductos = cargarProductosDesdeLocalStorage();

console.log(storedProductos);


