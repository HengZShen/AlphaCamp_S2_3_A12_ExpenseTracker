const categoryBtns = document.querySelectorAll('.category-item')
const categoryType = document.querySelector('#category-type')



function changeCateValue(event) {
  const target = event.target
  categoryType.value = target.id
}



categoryBtns.forEach(btn => btn.addEventListener('click', changeCateValue))