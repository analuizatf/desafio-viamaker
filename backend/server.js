const dotenv = require('dotenv').config({path:__dirname+'/./../env/local.env'})
const express = require('express')
const app = express()
const router = require('./routes/routes.js')

var port = process.env.HTTP_PORT

app.use('/', router)
app.listen(port, () => {
    console.log('Server running')
})

module.exports = app