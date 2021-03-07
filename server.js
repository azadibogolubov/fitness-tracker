let express = require('express')
let router = express.Router()
let dotenv = require('dotenv')
let routes = require('./app/routers/routes')

dotenv.config()

let app = express()
let port = process.env.PORT

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})