const categoryBtns = document.querySelectorAll('.category-item')
const categoryType = document.querySelector('#category-type')
const categoryToggle = document.querySelector('.category-toggle')


// change category Type , so value can pass through form
function changeCateValue(event) {
  const target = event.target
  categoryType.value = target.id
}



categoryBtns.forEach(btn => btn.addEventListener('click', changeCateValue))


// change drop-button toggle value and remain in new render page
function changeToggleText(event) {
  const id = event.target.id
  categoryToggle.innerText = switchForText(id)
}


function switchForText(id) {
  switch (id) {
    case "all":
      return '總消費'
      break
    case "housing":
      return '家居物業'
      break
    case "transportation":
      return '交通出行'
      break
    case "entertainment":
      return '休閒娛樂'
      break
    case "food":
      return '餐飲食品'
      break
    case "other":
      return '其他'
      break
  }
}


categoryBtns.forEach(btn => btn.addEventListener('click', changeToggleText))