let express = require('express')
let dotenv = require('dotenv')
let routes = require('./app/routers/routes')

dotenv.config()

let app = express()
app.use(express.json())
app.use('/', routes)

let port = process.env.PORT

const db = require("./app/models");
db.sequelize.sync();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})