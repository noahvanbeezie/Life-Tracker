require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const { SESSION_SECRET,SERVER_PORT,CONNECTION_STRING } = process.env
const authController = require('./controllers/authController')

const app = express()

app.use(express.json())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        rejectUnauthorized: false,
        cookie:{maxAge: 1000 * 60 * 60},
        secret: SESSION_SECRET
    })
)

massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false
    }
}).then(db => {
    const port = SERVER_PORT
    app.set('db',db)
    app.listen(port || 4420, () => console.log(`Connected to ${port}`))
})

// Auth Endpoints
app.post('/api/login', function(req,res){
    authController.login})
app.post('/api/register', authController.register)