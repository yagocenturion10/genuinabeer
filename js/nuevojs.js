

/*

const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment()*/


let carrito = {}


/*
//Entidades ------------------------------------------//

class Producto {
    constructor(id,nombre, precio,imagen ) {

    this.id = id;  
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  
    }

}
*/

const json =
  [
    {
      "precio": 800,
      "id": 1,
      "title": "Fragancia Coco y Lima",
      "thumbnailUrl": "./img/productos/barril50.jpg"
    },
    {
      "precio": 800,
      "id": 2,
      "title": "Fragancia Pomelo Rosado",
      "thumbnailUrl": "./img/productos/barril50.jpg"
    },
    {
      "precio": 900,
      "id": 3,
      "title": "Vela Citrica",
      "thumbnailUrl": "./img/productos/barril50.jpg"
    },
    {
      "precio": 900,
      "id": 4,
      "title": "Vela Vainilla",
      "thumbnailUrl": "./img/productos/barril50.jpg"
    },
    {
      "precio": 1500,
      "id": 5,
      "title": "Almohadones",
      "thumbnailUrl": "./img/productos/barril50.jpg"
    },
    {
      "precio": 8000,
      "id": 6,
      "title": "Cubre edredón",
      "thumbnailUrl": "./img/productos/barril50.jpg"
    }
  ]



/*
const json = []


//Productos del Array ----------------------------------------//
const Producto1 = new Producto (1,"Barril 50L",15000,"./img/productos/barril50.jpg");
const Producto2 = new Producto (2,"Barril 30L",10000,"./img/productos/barril30.jpg")
const Producto3 = new Producto (3,"Barril 10L",4000,"./img/productos/barril10.jpg");
const Producto4 = new Producto (4,"Choppera 5L",3000,"./img/productos/barril50.jpg");
const Producto5 = new Producto (5,"Stout 1L",500,"./img/productos/botellanegra750.jpg");
const Producto6 = new Producto (6,"Red Ale 1L",500,"./img/productos/botellacolo750.jpg");
const Producto7 = new Producto (7,"Pale Ale 1L",500,"./img/productos/botellarubia750.jpg");
const Producto8 = new Producto (8,"IPA 1L",550,"./img/productos/botellaipa750.jpg");




json.push(Producto1);
json.push(Producto2);
json.push(Producto3);
json.push(Producto4);
json.push(Producto5);
json.push(Producto6);
json.push(Producto7);
json.push(Producto8);







/*

function ImprimirProductos () {

  let idImprimir = document.querySelector("#aca")

  json.forEach(e => {


    idImprimir.innerHTML += `
<div class="col mb-4">
    <!-- Card -->
    <div class="card">

      <!--Card image-->
    <div class="view overlay">
      <img class="card-img-top" src="${e.imagen}" alt="Imagen no disponible">
        <div class="mask rgba-white-slight"></div>  
    </div>

    <!--Card content-->
    <div class="card-body">

      <!--Title-->
      <h4 class="card-title">${e.nombre}</h4>
      <!--Text-->
      <p class="card-text">Precio: ${e.precio}</p>
      <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <button onclick="seleccionarProducto(${e.id}) type="button" class="shop btn btn-light-blue btn-md" >Agregar al carrito <i class="fas fa-cart-plus"></i></button>

   </div>

    </div>
    <!-- Card -->
  </div>
  

    `
  })

}



ImprimirProductos ()
*/



class CartItem {

  constructor({ data, count }) {
    this.data = data;
    this.count = count;
  }

  calculateSubtotal() {
    return this.data.precio * this.count;
  }

  renderHTML() {
    const htmlContent = `<tr id="producto-${this.data.id}">
                            <td class="producto-nombre">${this.data.nombre}</td>
                            <td class="producto-cantidad">${this.count}</td>
                            <td>$ <span class="producto-subtotal"> ${this.calculateSubtotal()} </span> </td>
                            <td class="button-cell"> <button class="btn-remove btn btn-danger" value="${this.data.id}" title="eliminar producto" aria-label="eliminar producto">X</button>
                        </tr>`
    $("#carrito-body").append(htmlContent);
  }

  deleteHTML() {
    const row = $(`#producto-${this.data.id}`);
    const remove = () => row.remove();
    row.hide("fast", remove);
  }

  update(value) {
    this.count += value;
    $(`#producto-${this.data.id} .producto-subtotal`).text(this.calculateSubtotal());
    $(`#producto-${this.data.id} .producto-cantidad`).text(this.count);
  }

}


class Cart {

  constructor() {
    this.items = [];
  }

  addProduct(item) {
    const exists = this.items.some(element => element.data.id == item.data.id);
    if (exists) this.updateProduct(item.data.id);
    else {
      this.items.push(item);
      item.renderHTML();
    }
  }

  removeProduct(id) {
    const product = this.findProduct(id);
    product.update(-1);
    if (product.count <= 0) {
      product.deleteHTML();
      this.items = this.items.filter(item => item.data.id != id);
    }
  }

  findProduct(id) {
    return this.items.find(item => item.data.id == id);
  }

  updateProduct(id) {
    const product = this.findProduct(id);
    product.update(1);
  }

  calculateTotal() {
    let total = 0;

    for (const item of this.items) {
      total += item.calculateSubtotal();
    }

    $("#carrito-total").text(total);
  }

  saveCart() {
    localStorage.setItem("carrito", JSON.stringify(this.items));
  }


  clearCart() {
    this.items = [];
    localStorage.removeItem("carrito");
    $("#carrito-body").html("");
  }

  hasItems() {
    return this.items.length > 0;
  }

}






// ANIMACIONES


$("#animacion").fadeIn(3000)
               .delay(2000) 
               .css("color","black");