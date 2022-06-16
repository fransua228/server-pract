require('dotenv').config()
const express = require('express')
const cors = require('cors')
const route = require('./routers/main')
const path = require('path')
const app = express()

app.use('/image',express.static(path.join(__dirname, 'image')))
app.use(cors())
app.use('/api',route)

async function start() {
    try{
        app.listen(5000)
    }catch(err) {
        console.log(err)
    }
}

start()