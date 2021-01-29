let quotes = [
  "May the Force be with you.",
  "I'm the king of the world!",
  "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
  "You can't handle the truth!",
  "If you build it, he will come.",
  "Keep your friends close, but your enemies closer.",
  "You talking to me?",
  "I'll have what she's having.",
  "You had me at 'hello'."
]
//function yell(words{
  //return `${words.toUpperCase()}!!!!!




//first name, last name is a function <- each one is an arguement 
//concat.function yell(words) <- will accept some string

// Tasks:
// 1) loop through the movie quotes and write them to the output (with Tailwind)
// 2) refactor into cleaner, easier-to-understand functions

// EventTarget.addEventListener(type, listener)
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// Element.insertAdjacentHTML(position, text)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

//function pageLoaded() {

function appendQuote(placeholderString) {
  let outputElement = document.querySelector('.output')
  outputElement.insertAdjacentHTML('beforeend',
 `<h1 class="font-bold my-8 text-xl">${placeholderString}</h1>`)
}

function pageLoaded() {
  for (let i = 0; i < quotes.length; i++) {
    let quote = quotes[i]
    appendQuote(quote)
  }

}

// for (let i = 0; i < quotes.length; i++) {
//   let quote = quotes[i]
//   let outputElement = document.querySelector('.output')
//   outputElement.insertAdjacentHTML('beforeend',
//   `<h1 class="font-bold my-8 text-xl">${quote}</h1>`)
  

window.addEventListener('DOMContentLoaded', pageLoaded)
appendQuote('This is the way.')

//   let outputElement = document.querySelector('.output')  
//   //CSS query selector - look for a line in html with a class of output. The . indicates that it's a class name. If you wanted the whole output could use 'body'
//   //outputElement.insertAdjacentHTML('beforeend', 'Hello!')
//   //outputElement.intsertAdjacentHTML('beforeend','<h1>Hello 2!</ht>')

//   //1a. loop through the movie quotes
// for (let i = 0; i < quotes.length; i++) {
//   //console.log(`hey, index is =L ${i}`)
//   let quote = quotes[i]
//   //console.log(quote)
  
  
//   //1b.write them to the output (with Tailwind)
//   let outputElement = document.querySelector('.output')
//   outputElement.insertAdjacentHTML('beforeend',
//   `<h1 class="font-bold my-8 text-xl">${quote}</h1>`)
  
// }


})
