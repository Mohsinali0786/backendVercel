const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const server = require('http').createServer(app)
const cors = require('cors')



require('dotenv').config()
const PORT = process.env.PORT || 4000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './client/build')))
app.use(cors());

// app.use('/api', require('./routes'))
app.use('/api',require('./routes/get'))

// app.get('/home',(req,res)=>{
//     res.send('Hello')
// })


app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}))

app.use(express.json())

server.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`)
})