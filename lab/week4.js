// Week 4 lab – Similar to last week's lab – but without the help!

// The provided code now goes out to the Internet to get our products data.
// You can visit the provided URL – https://kiei451.com/api/products.json –
// in Chrome to see what the data looks like.

// Write a loop to iterate through the product data; each iteration of the loop
// should call a function called renderProduct, which accepts an object representing
// a single product object as input, and appends HTML to an existing element on the page
// with the class "products". You can use the existing HTML in the "products" element
// as a template, deleting it when you're finished.

// 🔥 define your renderProduct function here

// Curly bracket means an object
//products is an array 

async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/products.json') //this is grabbing data at this URL
  let json = await response.json()

  // writes the returned JSON to the console
  console.log(json)  //json is a object
  
//1. get the data you are working with - the array is the products
let products = json.products // this is so you don't have to keep writing json.products
console.log(products)

 //2. write code to loop through the products
for(let i=0; i < products.length; i++) {
  let product = products[i] //as the loop iterates it pulls each subsequent product from the array
  console.log(product) //prodcut is going to be an object with these 4 attributes
// step by step we are digging into the data
// if i was 0 - then it would always be the first product 
  //let product1 = products [0]
  //let product2 = products [1]
  //let product3 = products [2] etc
  // lots of writing use i instead.  
  // if said product.name then we just see all the names

//3. render each product: make it work first - we need 2 things
// we need to select an html element in our html file - attach data to html
// we need to do that by rendering html











}




  // 🔥 start here: write code to loop through the products; each
  // iteration of the loop should call your renderProduct function
  // make it work first; then extract to the separate renderProduct
  // function after it's 100% working without it
  
}

window.addEventListener('DOMContentLoaded', pageLoaded)