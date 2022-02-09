const express = require('express')//import express
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send("Berhasil menampilkan Get")
})

app.get('/convert/desimal/:angka', (req,res) => {

    let bilangan = req.params.angka
    let desimal = parseInt(bilangan);

    res.send({
        desimal : desimal,
        result : {
            biner : desimal.toString(2),
            octal : desimal.toString(8),
            hexadecimal : desimal.toString(16)
        }
    })
})

app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})