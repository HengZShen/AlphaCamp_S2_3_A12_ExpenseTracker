const handlebars = require('handlebars')


const defaultToggle = {

  defaultText(target) {
    handlebars.registerHelper('defaultText', (target) => {
      if (target) {
        return this.switchForText(target)
      } else {
        return '篩選分類'
      }
    })
  },

  switchForText(target) {
    switch (target) {
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

}

module.exports = defaultToggle