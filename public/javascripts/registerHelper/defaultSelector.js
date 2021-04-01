const handlebars = require('handlebars')

const checkDefault = {


  checkSelect(target, name) {

    handlebars.registerHelper('checkSelect', function (target, name) {
      if (target === name) {
        return "selected"
      } else {
        return
      }
    })
  }
}




module.exports = checkDefault