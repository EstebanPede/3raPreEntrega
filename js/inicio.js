import { comprarProducto } from "./carrito.js";

let productos = [];

fetch("./db/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        generarCardsProductos(productos);
        // Actualizar localStorage con los nuevos datos
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
