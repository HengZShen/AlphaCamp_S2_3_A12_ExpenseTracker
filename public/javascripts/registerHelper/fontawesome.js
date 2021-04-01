const { registerHelper } = require('handlebars')
const handlebars = require('handlebars')


const checkFont = {

  checkIcon(target) {
    handlebars.registerHelper('checkIcon', (target) => {
      switch (target) {
        case 'housing':
          return `<i class="fas fa-home"></i>`
          break
        case 'transportation':
          return `<i class="fas fa-shuttle-van"></i>`
          break
        case 'entertainment':
          return `<i class="fas fa-grin-beam"></i>`
          break
        case 'food':
          return `<i class="fas fa-utensils"></i>`
          break
        case 'other':
          return `<i class="fas fa-pen"></i>`
          break
      }

    })



  }

}


module.exports = checkFont