const express = require('express')//import express
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send("Berhasil menampilkan Get")
})

app.get('/convert/kelvin/:angka', (req,res) =>{
    
    const kelvin = req.params.angka
    const celcius = parseInt(kelvin) - 273
    const fahrenheit = 9/5 * (parseInt(kelvin)-273) + 32
    const reamur = 4/5 *(parseInt(kelvin)-273)

    res.send({
        kelvin : kelvin,
        result : {
            celcius,
            fahrenheit,
            reamur
        }
    })
})

app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})