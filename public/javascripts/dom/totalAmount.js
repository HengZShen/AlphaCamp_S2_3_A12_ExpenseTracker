const totalAmount = document.querySelector('#totalAmount')

// verbose but support all modern browsers  
//  https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/
const items = Array.prototype.slice.call(document.querySelectorAll('.item-amount'))


// Not support IE
// const items = Array.from(document.querySelectorAll('.item-amount'))

const costs = items.map(item => item = Number(item.innerText))

const reducer = (accumulator, currentValue) => accumulator + currentValue;

totalAmount.innerText = costs.reduce(reducer)