// initial config
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

// read JSON / middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

//api routes
 const todoRoutes = require('./routes/todoRoutes')
 app.use('/todo', todoRoutes)

//initial route / endpoint
app.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
})


//port listener
const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@apicluster.twrkl.mongodb.net/bancoToDo?retryWrites=true&w=majority`,)
.then(() => {
    console.log("conectado ao mongoDb")
    app.listen(port)
})
.catch((erro) => console.log(erro))
