const express = require('express')
const cors =require('cors')

const db = require('./src/database/db')
const routes = require('./src/routes/authRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)


const port = process.env.PORT
db.connect()
    .then(() => app.listen(port || 3000), console.log(`Connected, Port: ${port}`))
    .catch(err => console.log(err))
