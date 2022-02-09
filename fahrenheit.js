const express = require('express')//import express
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send("Berhasil menampilkan Get")
})

app.get('/convert/fahrenheit/:angka', (req,res)=>{

    const fahrenheit = req.params.angka
    const reamur = 4/9 * (parseInt(fahrenheit)-32)
    const celcius = 5/9 * (parseInt(fahrenheit)-32)
    const kelvin = 5/9 * (parseInt(fahrenheit)-32) +273

    res.send({
        fahrenheit : fahrenheit,
        result : {
            reamur,
            celcius,
            kelvin
        }
    })
})

app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})