function init() {
    renderAllDishes();
    renderEmptyBasket();
}


function renderAllDishes() {
    renderDoner();
    renderLahmacun();
    renderPide();
    renderSalad();
    renderBurger();
}


// TODO Shorten this up + HTML Templates

function renderDoner() {

    for (let i = 0; i < doner.length; i++) {
        let donerDishes = document.getElementById('doner');
        let dishName = doner[i]['name'];
        let ingredients = doner[i]['ingredients'];
        let pricePerAmount = doner[i]['price'];

        donerDishes.innerHTML += donerHTMLTemplate(dishName, ingredients, pricePerAmount);
    }
}


function renderLahmacun() {

    for (let i = 0; i < lahmacun.length; i++) {
        let lahmacunDishes = document.getElementById('lahmacun');
        let dishName = lahmacun[i]['name'];
        let ingredients = lahmacun[i]['ingredients'];
        let pricePerAmount = doner[i]['price'];

        lahmacunDishes.innerHTML += lahmacunHTMLTemplate(dishName, ingredients, pricePerAmount);
    }
}


function renderPide() {

    for (let i = 0; i < pide.length; i++) {
        let pideDishes = document.getElementById('pide');
        let dishName = pide[i]['name'];
        let ingredients = pide[i]['ingredients'];
        let pricePerAmount = pide[i]['price'];

        pideDishes.innerHTML += pideHTMLTemplate(dishName, ingredients, pricePerAmount);

    }
}


function renderBurger() {

    for (let i = 0; i < burger.length; i++) {
        let burgerDishes = document.getElementById('burger');
        let dishName = burger[i]['name'];
        let ingredients = burger[i]['ingredients'];
        let pricePerAmount = burger[i]['price'];

        burgerDishes.innerHTML += burgerHTMLTemplate(dishName, ingredients, pricePerAmount);

    }
}


function renderSalad() {

    for (let i = 0; i < salad.length; i++) {
        let saladDishes = document.getElementById('salad');
        let dishName = salad[i]['name'];
        let ingredients = salad[i]['ingredients'];
        let pricePerAmount = salad[i]['price'];

        saladDishes.innerHTML += saladHTMLTemplate(dishName, ingredients, pricePerAmount);

    }
}

// Basket


let basket_dishes = [];
let basket_prices = [];
let basket_amounts = [];


function renderEmptyBasket() {
    let emptyBasket = document.getElementById('basket');
    emptyBasket.innerHTML = '';
    emptyBasket.innerHTML = emptyBasketHTML();
}


function renderBasket() {
    let fullBasket = document.getElementById('basket');
    fullBasket.innerHTML = '';
    fullBasket.innerHTML = fullBasketHTML();
}


function renderBasketItems() {
    let basketItems = document.getElementById('items-list');
    basketItems.innerHTML = '';

    for (let i = 0; i < basket_dishes.length; i++) {
        const dish = basket_dishes[i];
        const price = basket_prices[i];
        const amount = basket_amounts[i];

        basketItems.innerHTML += basketItemsHTML(i, dish, price, amount);
    }
}


function renderBasketCosts() {
    let basketCosts = document.getElementById('basket-costs');
    basketCosts.innerHTML = '';
    basketCosts.innerHTML = basketCostsHTML();
}


function addToBasket(dishName, pricePerAmount) {

    let index = basket_dishes.indexOf(dishName);

    if (index == -1) {
        basket_dishes.push(dishName);
        basket_prices.push(pricePerAmount);
        basket_amounts.push(1);

        renderFullBasket();

    } else {
        basket_amounts[index]++;

        renderFullBasket();
    }
}

// ! Calculates the sum of dish amount and price
function calcSum(price, amount) {
    let calcPrice = price * amount;
    return calcPrice;
}


//! Calculates the subtotal without the delievery costs
function subTotal() {
    let sum = 0;

    for (let i = 0; i < basket_dishes.length; i++) {
        sum += basket_prices[i] * basket_amounts[i];
    }

    return sum;
}


//! Calculates the total incl. deleviery costs
function totalSum(subTotal, deliveryCosts) {
    let total = subTotal + deliveryCosts;

    return total;
}


function reduceAmount(i, amount) {
    if (amount >= 1) {
        basket_amounts[i]--;
    } else {
        basket_dishes.splice(i, 1);
        basket_prices.splice(i, 1);
        basket_amounts.splice(i, 1);
    }
    renderFullBasket();
}


function renderFullBasket() {
    renderBasket();
    renderBasketItems();
    renderBasketCosts();
}


// function checkCheckout(sum) {
//     checkout = document.getElementById('checkout-btn');

//     if (sum >= 15) {
//         checkout.style.color = "#FF8000";
//         checkout.onclick = function () { alert('blah'); };
//     }
// }



// Slide-Bar Active

// function setActive() {
//     let activeLink = document.getElementById('menu-slider').getElementsByTagName('a');
//     for (let i = 0; i < activeLink.length; i++) {
//         if (document.location.href.indexOf(activeLink[i].href) >= 0) {
//             activeLink[i].classList.add("active");
//         }
//     }
// }