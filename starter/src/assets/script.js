/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

 const cherry  =  {
    name: "Carton of cherries",
    price: 4,
    quantity:0,
    productId:100,
    image: "images/cherry.jpg",
  };

  const strawberry= {
    name: "Carton of strawberrie",
    price: 5,
    quantity:0,
    productId:200,
    image: "images/strawberry.jpg",
 
  };
const orange= {
    name: "Bag of organge",
    price: 10,
    quantity:0,
    productId:300,
    image: "images/orange.jpg",  
  };
  const cherry1  =  {
    name: "bag of cherries",
    price: 40,
    quantity:0,
    productId:400,
    image: "images/cherry.jpg",
  };

  const strawberry2= {
    name: "bag of strawberrie",
    price: 20,
    quantity:0,
    productId:500,
    image: "images/strawberry.jpg",
 
  };
const orange3= {
    name: "carton of organge",
    price: 4,
    quantity:0,
    productId:600,
    image: "images/orange.jpg",  
  };
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
const products = [cherry, strawberry, orange,cherry1, strawberry2, orange3];
/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart*/

  function addProductToCart(item) {
    products.forEach((product) => {
      if (product.productId === item && !cart.includes(product)) {
        product.quantity += 1;
        cart.push(product);
      } else if (product.productId === item && cart.includes(product)) {
        increaseQuantity(product.productId);
      }
    });
  }
//console.log(addProductToCart(item))
  

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
/*function increaseQuantity(itemTwo){
  products.map((product) =>{
    if (product.productId = itemTwo){
      product.quantity +=1;
    }
  });
};
*/
function getProduct(items) {
  return products.filter(({ productId }) => items === productId)[0];
}
function increaseQuantity(product) {
  const item = getProduct(product);
  item.quantity += 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/*function decreaseQuantity(product) {
  const item = getProduct(product);
  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    removeProductFromCart(product);
  }
}
*/

function decreaseQuantity(product) {
  const item = getProduct(product);
  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cart.quantity = 0;
      cart.splice(cart.indexOf(cart[item], 1));
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(product){
  const item = getProduct(product);
  cart.quantity = 0;
      cart.splice(cart.indexOf(cart[item], 1));
      
    };


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  cart.map((product) => {
    let productTotal = product.quantity * product.price;
    total += productTotal;
  });
  return Number(total);
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart.lenght = 0;
}


/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

function pay(amount) {
  let total =0;
 total += amount;
  return total - cartTotal();
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/


module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus 
   // currency*/
}
