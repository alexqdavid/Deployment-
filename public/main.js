
let shop = document.getElementById('shop');

let items = [{
    id: 'dnidssns',
    name: 'bull frog',
    price: 35,
    desc: 'its a frog',
    img: './images/download-1.jpg'
},{
    id: 'ssjdinmsdims',
    name: 'swamp frog',
    price: 350,
    desc: 'its a frog',
    img: './images/download-2.jpg'
},{
    id: 'dsdjsmnimsd',
    name: 'bug frog',
    price: 3500,
    desc: 'its a frog',
    img: './images/download-3.jpg'
},{
    id: 'sjoijsojsjom',
    name: 'stink frog',
    price: 35000,
    desc: 'its a frog',
    img: './images/download-4.jpg'
}]

let basket = JSON.parse(localStorage.getItem("cart")) || [];

let gShop = () => {
return (shop.innerHTML = items.map((x) => {
    let {id,name,price,desc,img} = x;
    let search = basket.find((x) => x.id === id) || [];
    return `
    <div id=product-id-${id} class="item">
                <img src=${img} width="220">
                <div class="details">
                    <h2>${name}</h2>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h3>$ ${price}</h3>
                        <div class="button">
                            <i onclick="minus(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                            <i onclick="plus(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
    `
}).join(""));
};

gShop();


let plus = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
console.log(search);
    if(search === undefined){
        basket.push({
    id: selectedItem.id,
    item: 1,
    });
    update(selectedItem.id)
} else {
    search.item += 1
    }
    localStorage.setItem("cart", JSON.stringify(basket))
    //console.log(basket);
    update(selectedItem.id);
};
let minus = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if(search === undefined) return;
   else if(search.item === 0){
       return
} else {
    search.item -= 1
}
localStorage.setItem("cart", JSON.stringify(basket))
basket = basket.filter((x)=> x.item !==0); 
//console.log(basket);
update(selectedItem.id);

}
let update = (id) => {
    let search = basket.find((x) => x.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item
    sum()
}

let sum = () => {
    let cart = document.getElementById("shopping-cart-amount")
    cart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
};
sum()