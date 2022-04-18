const prueba = [
    {
    "id": 1,
    "name": "item1",
    "tittle": "Play Station 5",
    "price": "700",
    "imagen": "https://laverdadnoticias.com/__export/1600624173295/sites/laverdad/img/2020/09/20/ps5_lanzamiento.jpg_1834093470.jpg"
},{
    "id": 2,
    "name": "item2",
    "tittle": "Xbox Series X",
    "price": "400",
    "imagen": "https://laverdadnoticias.com/__export/1600624173295/sites/laverdad/img/2020/09/20/ps5_lanzamiento.jpg_1834093470.jpg"
},{
    "id": 3,
    "name": "item3",
    "tittle": "Nintendo Switch",
    "price": "650",
    "imagen": "https://laverdadnoticias.com/__export/1600624173295/sites/laverdad/img/2020/09/20/ps5_lanzamiento.jpg_1834093470.jpg"
},{
    "id": 4,
    "name": "item4",
    "tittle": "God of War 4",
    "price": "60",
    "imagen": "https://laverdadnoticias.com/__export/1600624173295/sites/laverdad/img/2020/09/20/ps5_lanzamiento.jpg_1834093470.jpg"
},{
    "id": 5,
    "name": "item5",
    "tittle": "Forza Horizon 5",
   "price": "70",
   "imagen": "https://laverdadnoticias.com/__export/1600624173295/sites/laverdad/img/2020/09/20/ps5_lanzamiento.jpg_1834093470.jpg"
},{
    "id": 6,
    "name": "item6",
   "tittle": "Mario Bross Odyssy",
   "price": "50",
   "imagen": "https://laverdadnoticias.com/__export/1600624173295/sites/laverdad/img/2020/09/20/ps5_lanzamiento.jpg_1834093470.jpg"
}
]

const cards = document.getElementById("cards")
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment()
const templateFooter = document.getElementById("template-footer").content
const templateCarrito = document.getElementById("template-carrito").content
const items = document.getElementById("items")
const footer = document.getElementById("footer")
let carrito = {}


window.localStorage.setItem("prueba", JSON.stringify(prueba))
let item = JSON.parse(window.localStorage.getItem("prueba")); 
console.log(item)


document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})
cards.addEventListener("click", e => {
    addCarrito(e)
})
const fetchData = async() => {
    try{
        pintarCards(prueba)
    } catch(error){
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach(producto => {
        // console.log(data)
        templateCard.querySelector("h5").textContent = producto.tittle
        templateCard.querySelector("p").textContent = producto.price
        templateCard.querySelector("img").setAttribute("src", producto.imagen)
        templateCard.querySelector(".btn-dark").dataset.id = producto.id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}
const addCarrito = e => {
    // console.log(e.target)
    // console.log(e.target.classList.contains("btn-dark"))
    if(e.target.classList.contains("btn-dark")) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}
const setCarrito = objeto =>{
    // console.log(objeto)
    const producto = {
        id: objeto.querySelector(".btn-dark").dataset.id,
        tittle: objeto.querySelector("h5").textContent,
        price: objeto.querySelector("p").textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    pintarCarrito()

}
const pintarCarrito = () => {
    // console.log(carrito)
    items.innerHTML=""
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector("th").textContent = producto.id
        templateCarrito.querySelectorAll("td")[0].textContent = producto.tittle
        templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad
        templateCarrito.querySelector(".btn-info").dataset.id = producto.id
        templateCarrito.querySelector(".btn-danger").dataset.id = producto.id
        templateCarrito.querySelector("span").textContent =  producto.cantidad * producto.price
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)

    })
    items.appendChild(fragment)

    pintarFooter()
}
const pintarFooter = () =>{
    footer.innerHTML=""
    if(Object.keys(carrito).length === 0){
        footer.innerHTML= `<th scope="row" colspan="5">Carrito vacio</th>`

    }
const nCantidad = Object.values(carrito).reduce((acc, {}) => {

})
}