let label = document.getElementById('lable')
let shoppingCart = document.getElementById('shopping-cart')


let basket = JSON.parse(localStorage.getItem("cart")) || [];

let sum = () => {
    let cart = document.getElementById("shopping-cart-amount")
    cart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
};
sum()

let cartItems = () => {
if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket.map((x) => {
        let {id, item} =x
        let search = items.find((x) => x.id ===id) || []
        return `
        <div class="cart-item">
        <img width = "100" src="${search.img}" />
        <div class="details"> 

        <div class="title-price-x">

        <h4 class="title-price">

        <p>${search.name}</p>

        <p class="cart-item-price">$ ${search.price}</p>

        </h4>

        <i onclick="deleteItem(${id})" class="bi bi-x-lg"></i>

        </div>

        <div class="button">

         <i onclick="minus(${id})" class="bi bi-dash-lg"></i>

         <div id=${id} class="quantity">${item}</div>

         <i onclick="plus(${id})"class="bi bi-plus-lg"></i>
        </div>

         <h3>$ ${item * search.price}</h3>
        </div>
        </div>
        `
    }).join(""))
} else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h1>Cart is empty</h1>
    <a href= "index.html">
    <button class= "homeBtn">Shop Some More</button>
    </a>
    `;
}
}

cartItems()


let plus = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if(search === undefined){
        basket.push({
    id: selectedItem.id,
    item: 1,
    });
    update(selectedItem.id)
} else {
    search.item += 1
    }
    cartItems()
    update(selectedItem.id);
    localStorage.setItem("cart", JSON.stringify(basket))
};
let minus = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
   else if(search.item === 0) return
 else {
    search.item -= 1
}
update(selectedItem.id);
basket = basket.filter((x) => x.item !== 0); 
cartItems()
localStorage.setItem("cart", JSON.stringify(basket))
};
let update = (id) => {
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    sum()
    total()
};
let deleteItem = (id) => {
let selectedItem = id
basket = basket.filter((x) => x.id !== selectedItem.id)
cartItems()
localStorage.setItem("cart", JSON.stringify(basket))
sum()
total()
};
let clearCart = (id) => {
basket = []
cartItems();
localStorage.setItem("cart", JSON.stringify(basket))
sum()
total()
};
let total = (id) => {
    if(basket.length !== 0){
        let amount = basket.map((x) => {
            let {id,item} = x;
            let search = items.find((x) => x.id ===id) || []
            
            return item * search.price;
        }).reduce((x,y) => x + y, 0)
        label.innerHTML = `
        <h2>Total = $ ${amount}</h2>
        <button onclick="buy()" class="checkOut">Check Out</button>
        <button onclick="clearCart()" class="delete">Clear Chache</button>
        `;
    } else return;
};

function buy(){
    alert("Thank you for giving my friends a home!");
    clearCart()
}

total()