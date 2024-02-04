import { comprarProducto } from "./carrito.js";

let productos = [];

fetch("./db/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        generarCardsProductos(productos);

        localStorage.setItem("productos", JSON.stringify(productos));
    });

const userLogin = document.getElementById("userLogin");
const divProductos = document.getElementById("productos");

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"));

document.addEventListener("DOMContentLoaded", () => {
    generarCardsProductos(productosDisponibles);
});

export const generarCardsProductos = (productos) => {
    divProductos.innerHTML = "";

    productos.forEach((producto) => {
        const { imagen, nombre, categoria, precio, id } = producto;

        let card = document.createElement("div");
        card.className = "producto";
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
            <div class="card-body">
                <p class="card-title">${nombre}</p>
                <p class="card-text">Categoria: ${categoria}</p>
                <p class="card-text">Precio: <b>$${precio}</b></p>
                <button id="btn${id}" class="btn btn-primary">Comprar</button>
            </div>
        </div>`;
        divProductos.appendChild(card);

        const btnComprar = document.getElementById(`btn${id}`);
        btnComprar.addEventListener("click", () => comprarProducto(id));
    });
};

document.addEventListener("DOMContentLoaded", () => {
    agregarEventoFiltro("filtroLineas", "categoria");
    agregarEventoFiltro("filtroPrecio", "precio");

});

function agregarEventoFiltro(idFiltro, tipoFiltro) {
    const filtroElemento = document.getElementById(idFiltro);

    filtroElemento.addEventListener("click", (e) => {
        e.preventDefault();

        const valorFiltro = e.target.dataset[tipoFiltro];

        // Implementar la lógica de filtrado según el tipo de filtro y el valor seleccionado
        if (tipoFiltro === "categoria") {
            filtrarPorCategoria(valorFiltro);
        } else if (tipoFiltro === "precio") {
            filtrarPorPrecio(valorFiltro);
        }
    });
}

function filtrarPorCategoria(categoriaSeleccionada) {

    productosDisponibles = productos.filter((producto) =>
        categoriaSeleccionada === "Todos" || producto.categoria === categoriaSeleccionada
    );

    generarCardsProductos(productosDisponibles);
}

function filtrarPorPrecio(precioSeleccionado) {

    productosDisponibles = productos.slice().sort((a, b) => b.precio - a.precio);
    if (precioSeleccionado === "Menor") {
        productosDisponibles.reverse();
    }
    generarCardsProductos(productosDisponibles);
}




