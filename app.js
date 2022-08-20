const express = require("express")
const { default: mongoose } = require("mongoose")
const bcrypt = require('bcrypt')
const users = []

const app = express()


mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) 

//middlewares
app.use(express.urlencoded({ extended: false}))
app.use(express.static("public"))
app.set("view engine","ejs")

//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
app.use(require("./routes/command"))

//server config



app.get('/login', (req,res) => {
    res.render('login.ejs')
})

app.get('/register', async (req,res) => {
    res.render('register.ejs')
})

app.post('/register', async (req,res) => {

})

app.listen(3000,() => console.log("App has started listening on port: 3000"))

