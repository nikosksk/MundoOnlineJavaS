const carro = new Carrito();
console.log(carro);
const carrito = document.getElementById("carrito");
const producto = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const todosProductos = document.getElementById("card");

cargarEventos();

function cargarEventos(){
    carrito.addEventListener("click", (event)=>{carrito.eliminarProducto(event)});

    producto.addEventListener("click", (event)=>{carrito.comprarProducto(event)});

    vaciarCarritoBtn.addEventListener("click", (event)=>{carro.vaciarCarrito(event)});

    document.addEventListener("DOMContentLoaded", carro.leerLocalStorage(event));
}