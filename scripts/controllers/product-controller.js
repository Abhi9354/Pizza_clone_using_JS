// Glue between View and Model
// Controller - UI I/O

import { readAllProducts, search } from "../services/product-operations.js";

var products;
var getIndex;

function addToCart(id) {
    getIndex = search(id);  
    insertBasket(getIndex);   
    }

let sum=0;
    function insertBasket(index){
        if(products[index].isAddedInCart==false){
            products[index].isAddedInCart=true;
            products[index].quantity+=1;
            p.innerText+=`${products[index].name} --> ${products[index].price * products[index].quantity} -->${products[index].quantity} \n`;
            
        }
        else{
            products[index].quantity+=1;
            p.innerText='Pizzas -->   Price --> Quantity\n';
             p.innerText=`${products[index].name} --> ${products[index].price * products[index].quantity} `;
        }
        sum+=parseInt(products[index].price * products[index].quantity);
        // sum.toPrecision(3);
        button.style.display='block';
        button.innerText=`Payment ${sum}`;
        button.addEventListener('click',()=>payNow(sum+'00'));
        console.log(sum);
    }
    


    let p; 
    let button;

    function printBasket(){
        const col=document.querySelector('#column2');
        const divcard=document.createElement('div');
        divcard.className='card';
        divcard.style="height: 36rem";
        const divbody=document.createElement('div');
        divbody.className='card-body';
        p=document.createElement('p');
        p.innerText='Pizzas -->   Price --> Quantity\n';
        col.appendChild(divcard);
        divcard.appendChild(divbody);
        divbody.appendChild(p);
        button=document.createElement('button');
        button.type='button';
        button.style.display='none';
        button.className='btn btn-success';
        divcard.appendChild(button);
    }

function printPizza(obj) {
    const column=document.querySelector('#column');
    const div = document.createElement('div');
    div.className='card';
    const img = document.createElement('img');
    img.className='card-img-top';
    img.src=`${obj.url}`;
    const div2 = document.createElement('div');
    div2.className='card-body';
    div.style="width: 15rem";
    const h5=document.createElement('h5');
    h5.className='card-title';
    h5.innerText=`${obj.name}`+ ' Rs '+ `${obj.price}`;
    const p = document.createElement('p');
    p.className='card-text';
    p.innerText=`${obj.desc}`;
    const a=document.createElement('a');
    a.className='btn btn-primary';
    a.innerText='Add to card';
    
    a.addEventListener('click',()=>addToCart(obj.id));
   
    column.appendChild(div);
    div.appendChild(img);
    div.appendChild(div2);
    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(a);
}

async function showProducts() {
     products = await readAllProducts();
    console.log('Controller rec ', products);
    products.map(obj=>printPizza(obj));
     
        printBasket();
    }
showProducts();
    
    
   