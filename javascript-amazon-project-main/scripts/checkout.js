import {renderOrderSummary } from './checkout/orderSummary.js';
import {renderPaymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-class.js';
import '../data/car.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
//import '../data/backend-practice.js';
import {loadCart} from '../data/cart.js';


async function loadPage(){   //async = make function return a promise

    await loadProductsFetch();

    const value = await new Promise((resolve)=>{
    loadCart(()=>{
        resolve('value3');
        });
    });

    renderOrderSummary();
    renderPaymentSummary();

}
loadPage();



/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
    loadCart(()=>{
        resolve();
        });
    })

]).then((value)=>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
new Promise((resolve)=>{          // promise lets us control asynchronous code and resolve() lets us control when to go the next step 
    loadProducts(()=>{
        resolve('value1');
    });

}).then((value)=> {
    console.log(value);
    return new Promise((resolve)=>{
    loadCart(()=>{
        resolve();
        });
    });
    
}).then(()=>{
        renderOrderSummary();
        renderPaymentSummary();
});

*/


/*
loadProducts(() => {
    loadCart(() =>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/