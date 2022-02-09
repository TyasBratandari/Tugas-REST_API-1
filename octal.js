const express = require('express')//import express
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send("Berhasil menampilkan Get")
})

app.get('/convert/octal/:angka', (req,res)=>{

    let angka = req.params.angka
    let octal = parseInt(angka, 8);

    res.send({
        octal : angka,
        result : {
            desimal : octal,
            biner : octal.toString(2),
            hexadecimal : octal.toString(16)
        }
    })
})
app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})