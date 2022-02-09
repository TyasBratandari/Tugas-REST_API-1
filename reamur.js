const express = require('express')//import express
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send("Berhasil menampilkan Get")
})

app.get('/convert/reamur/:angka', (req,res) =>{

    const reamur = req.params.angka
    const celcius = 5/4 * parseInt(reamur)
    const fahrenheit = (9/4 * parseInt(reamur)) + 32
    const kelvin = (5/4 * parseInt(reamur)) + 273

    res.send({
        reamur : reamur,
        result : {
            celcius,
            fahrenheit,
            kelvin
        }
    })
})

app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})