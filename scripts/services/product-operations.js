// Product CRUD Operation
// C - Create , R - Read , U - Update , D - Delete

import doNetworkCall from "./api-client.js";
import Product from "../models/product.js";

var products;

async function readAllProducts() {
    // products: [];
    try {
        const obj = await doNetworkCall();
        const pizzas = obj['Vegetarian']; // pizzas is array of pizza
        const pizzaArray = pizzas.map(pizza => {    // map - stores every index of of array as on object created by mapping pizzas with the Product created in product.js
            const pizzaObject = new Product(pizza.id, pizza.name ? pizza.name : 'No Pizza', pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url)
            return pizzaObject;
        });
        products = pizzaArray;
        return pizzaArray;
    }
    catch (err) {
        throw err;
    }
}

function search(id) {
    const indexOfClickedpizza = products.findIndex(currentProduct => currentProduct.id == id);    
    console.log(products);
    return indexOfClickedpizza;
};



export { readAllProducts, search};
