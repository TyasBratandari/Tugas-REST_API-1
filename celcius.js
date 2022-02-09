const express = require('express')//import express
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send("Berhasil menampilkan Get")
})

app.get('/convert/celcius/:angka', (req,res) => {

    const celcius = req.params.angka
    const reamur = 4/5 * parseInt(celcius)
    const fahrenheit = (9/5 * parseInt(celcius)) + 32
    const kelvin = parseInt(celcius) + 10

    res.send({
        celcius : celcius,
        result : {
            reamur,
            fahrenheit,
            kelvin
        }
    })
})

app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})