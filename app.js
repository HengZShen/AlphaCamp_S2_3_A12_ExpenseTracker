const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()


// static files
app.use(express.static('public'))

// handlebars
const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))


// method override 
const methodOverride = require('method-override')
app.use(methodOverride('_method'))


// mongodb connection
require('./configs/mongoose')



// routes
const routes = require('./routes')
app.use(routes)








app.listen(PORT, () => {
  console.log(`The server is running on http://localhost${PORT}`)
})