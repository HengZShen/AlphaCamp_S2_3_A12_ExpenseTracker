const express = require('express')
const PORT = 3000
const app = express()








app.get('/', (req, res) => {
  res.send('12345')
})










app.listen(PORT, () => {
  console.log(`The server is running on http://localhost${PORT}`)
})