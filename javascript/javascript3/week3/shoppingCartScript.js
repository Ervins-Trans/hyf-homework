"use strict";
console.log("shoppingCartScript is on");
const userSection = document.createElement("section");
const currencies = ["USD", "EUR", "DKK", "JPY"];
class Product {
  constructor(name, price, curr) {
    this.name = name;
    this.price = price;
    this.currency = curr;
  }
  convertCurrency(curr) {
    let conFactor; // conversion factor
    switch (curr) {
      case "USD":
        conFactor = 0.15;
        break;
      case "EUR":
        conFactor = 0.1343;
        break;
      case "DKK":
        conFactor = 1.0;
        break;
      case "JPY":
        conFactor = 17;
        break;
      default:
        // default fallback for unlisted currency
        return `Presented currency was not found in the database, default price is ${this.price} dkr`;
    }
    let displayPrice = this.price * conFactor; // THE MATH!!!!!!!!!!!!!!
    return `${this.name} costs ${displayPrice} ${curr}`;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
    this.products.push(product);
  }

  removeProduct(product) {
    // Implement functionality here
    this.products = this.products.filter((i) => i !== product);
  }

  searchProduct(productName) {
    // Implement functionality here
    return (
      this.products.filter((i) => i == productName)[0]?.name || `not found` // returns name of product if it exists in cart, otherwise says not found.
    );
  }

  getTotal() {
    let sum = 0;
    this.products.forEach((item) => (sum += item.price));
    return sum;
    // Implement functionality here
  }

  renderProducts() {
    // Implement functionality here
    shoppingCart.getUser(9);
    userSection.style = `padding: 40px; display: flex; font-size: 2em; font-weight: bold; justify-content:end;`;
    const productList = document.createElement("ul");
    productList.append(userSection);
    let totalSum = document.createElement("span");
    totalSum.style = `font-size: 2em; border: 2px solid green; border-radius: 3px; padding: 6px; margin: 6px;`; // beautiful
    totalSum.innerText = `Total to checkout : ${this.getTotal()}`;
    productList.style = `list-style: none; display: block; float: right; text-align: right;`; // bery NICE (not)
    this.products.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.style = `padding: 24px; margin-top: 6px; margin-bot: 18px;`;
      cartItem.innerText = `Item : ${item.name}, Price : ${item.price}`;
      productList.append(cartItem);
    });
    document.body.append(productList);
    productList.append(totalSum);
  }

  getUser(user) {
    // Implement functionality here
    fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
      .then((response) => response.json())
      .then((person) => {
        userSection.innerText = `${person.username}'s cart`;
      });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000, "dkr");
const ps5 = new Product("playsation 5", 3200, "dkr");
const snaks1 = new Product("basket of snacks (variating)", 300, "dkr");
const snaks2 = new Product("large basket of snacks (variating)", 600, "dkr");
const snaks3 = new Product(
  "BIG basket of snacks and drinks (variating)",
  1500,
  "dkr"
);
shoppingCart.addProduct(flatscreen); // works
shoppingCart.addProduct(ps5); // works
shoppingCart.addProduct(snaks1); // works
shoppingCart.addProduct(snaks2); // works
shoppingCart.addProduct(snaks3); // works
shoppingCart.removeProduct(snaks2); // works
shoppingCart.renderProducts(); // works ugly as intended
// shoppingCart.getTotal(); // works, good number as well, 10k << moved to be called from render, together with getUser method.
console.log(shoppingCart.searchProduct(snaks3)); // BIG basket of snacks and drinks (variating) in console.
console.log(shoppingCart.searchProduct(snaks2)); // not found expected as snaks2 was removed with remove function

const plant = new Product("plant", 50, "dkr");
console.log(plant.convertCurrency("USD"));
console.log(plant.convertCurrency("EUR"));
console.log(plant.convertCurrency("DKK"));
console.log(plant.convertCurrency("JPY"));
console.log(plant.convertCurrency("GBP"));
