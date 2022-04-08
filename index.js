function saludo(){
    let nombre = prompt("Ingrese su nombre")
    let alerta = alert("Bienvenido"+ " " + nombre + " " + "a Mundo Online")
}
saludo()

let carrito = []
let precio = 0

function sumar(prod){
    precio = precio + prod.precio
    console.log(prod)
}
function agregar(prod){
    carrito.push(prod)
    console.log(carrito)
    sumar(prod)
}

function administrador(){
    let response = prompt("Que desea hacer, elija una opcion \n 1. Agregar al carrito  \n 2. Finalizar")
    if(response !== "2"){
        item()
    } else{
        return alert("su carrito es:" + " \n" + JSON.stringify(carrito) + "\nEl precio es "+ carrito)
    }
}
administrador()

function item(){
    const name = prompt("Ingrese el nombre del producto")
    const precio = prompt("Ingrese precio")
    const aux = {
        name: name,
        precio: parseInt(precio,0)
    }
    agregar(aux)
    administrador()
}
// item();

agregar({
        id: 0,
        name: "item1",
        description: "Play Station 4",
        precio: "450",
        image: "#",
});
agregar({
        id: 1,
        name: "item2",
        description: "Play Station 5",
        precio: "700",
        image: "#",
});



const productos = [{
        id: 0,
        name: "item1",
        description: "Play Station 4",
        price: "450",
        image: "",
    },{
        id: 1,
        name: "item2",
        description: "Play Station 5",
        price: "700",
        image: "#",
    },{
        id: 2,
        name: "item3",
        description: "Xbox Series X",
        price: "400",
        image: "#",
    },{
        id: 3,
        name: "item4",
        description: "Xbox One S",
        price: "650",
        image: "#",
    },{
        id: 4,
        name: "item5",
        description: "Nintendo Switch",
        price: "650",
        image: "#",
    },{
        id: 5,
        name: "item6",
        description: "God of War 4",
        price: "60",
        image: "#",
    },{
        id: 6,
        name: "item7",
        description: "Forza Horizon 5",
        price: "70",
        image: "#",
    },{
        id: 7,
        name: "item8",
        description: "Mario Bross Odyssy",
        price: "50",
        image: "#",
    },

]
// DOM 
const menu = document.querySelector("#bienvenida")
bienvenida.innerHTML = "Bienvenidos a DOM"

// const items = productos.map((i)=>`${i.name} +""+ ${i.price}`)




