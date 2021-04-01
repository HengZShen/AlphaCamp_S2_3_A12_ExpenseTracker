const totalAmount = document.querySelector('#totalAmount')

// verbose but support all modern browsers  
//  https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/
const items = Array.prototype.slice.call(document.querySelectorAll('.amount-div'))


// Not support IE
// const items = Array.from(document.querySelectorAll('.item-amount'))


// no item
if (items.length === 0) {
  totalAmount.innerText = '趕緊消費一筆吧 空蕩蕩的可不好看呢!'
}


// cost
const costArray = items.map(item => item = Number(item.innerText))

const reducer = (accumulator, currentValue) => accumulator + currentValue;

totalAmount.innerText = costArray.reduce(reducer)