
class Carrito{
    comprarProducto(event){
        e.preventDefault();
        if(e.target.classList.contains(`agregar-carrito`)){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }
    leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector("img").src,
            titulo : producto.querySelector("h4").textContent,
            precio : producto.querySelector(".precio span").textContent,
            id: producto.querySelector("a").getAttribute("id"),
            cantidad : 1
        }
        this.insertarCarrito(infoProducto);
    }
    insertarCarrito(producto){
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>
            <img src = "${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" id="${producto.id}"></a>
        </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
    }
    eliminarProducto(event){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains("borrar-producto")){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector("a").getAttribute("id");
        }
        this.eliminarProductoLocalStorage(productoID);
    }
    vaciarCarrito(event){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        return false;
        }

    guardarProductosLocalStorage(producto){
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));
    }
    obtenerProductosLocalStorage(){
        let productoLs;
        if(localStorage.getItem("productos") === null){
            productoLs = [];
        }
        else {
            productoLs = JSON.parse(localStorage.getItem("productos"));
        }
        return productoLs;
    }
    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS, index){ 
            if(productosLS.id == productoID){
                productosLS.splice(index, 1);
            }});
        localStorage.setItem("productos", JSON.stringify(productosLS));
    }
    leerLocalStorage(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto){
            const row = document.createElement("tr");
        row.innerHTML=`
        <td>
            <img src = "${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" id="${producto.id}"></a>
        </td>
        `;
        listaProductos.appendChild(row);
        });
    }
}
// const producto = [{
//         id: 0,
//         name: "item1",
//         description: "Play Station 4",
//         price: "450",
//         image: "",
//     },{
//         id: 1,
//         name: "item2",
//         description: "Play Station 5",
//         price: "700",
//         image: "#",
//     },{
//         id: 2,
//         name: "item3",
//         description: "Xbox Series X",
//         price: "400",
//         image: "#",
//     },{
//         id: 3,
//         name: "item4",
//         description: "Xbox One S",
//         price: "650",
//         image: "#",
//     },{
//         id: 4,
//         name: "item5",
//         description: "Nintendo Switch",
//         price: "650",
//         image: "#",
//     },{
//         id: 5,
//         name: "item6",
//         description: "God of War 4",
//         price: "60",
//         image: "#",
//     },{
//         id: 6,
//         name: "item7",
//         description: "Forza Horizon 5",
//         price: "70",
//         image: "#",
//     },{
//         id: 7,
//         name: "item8",
//         description: "Mario Bross Odyssy",
//         price: "50",
//         image: "#",
//     },
// ]

// const listaContainer = document.querySelector("#lista");
// const arrayNuevo = [];
// imprimirProductos();

// function imprimirProductos() {
// 	listaContainer.innerHTML = "";

// 	productos.forEach((p) => {
// 		let card = document.getElementById("#lista");
// 		card.innerHTML = `
// 			<button onclick="borrarUsuario(${p.id})">borrar</button>
// 			<button onclick="guardarUsuario(${p.id})">guardar</button>
// 		`;
// 		listaContainer.appendChild(card);
// 	}); 
// }

// function borrarUsuario(id) {
// 	const aBorrar = productos.findIndex((p) => p.id == id);
// 	productos.splice(aBorrar, 1);
// 	console.log(productos);
// 	imprimirUsuarios();
// }

// function guardarUsuario(id) {
// 	const aCopiar = productos.find((p) => p.id == id);
// 	arrayNuevo.push(aCopiar);
// 	console.log(arrayNuevo);
// }
// DOM
// bienvenida.innerHTML = "Bienvenidos a DOM"

// const items = productos.map((i)=>`${i.name} +""+ ${i.price}`)

// eventos





