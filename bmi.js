const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("Berhasil menampilkan GET")
})

app.post('/convert/bmi',(req,res)=>{
    let tinggi = req.body.tinggi
    let berat = req.body.berat

    let height = parseFloat(tinggi)
    let weight = parseFloat(berat)

    let bmi = weight / (height *height)
    let status

    if(bmi < 18.5){
        status = "Kekurangan Berat Badan"
    } else if (bmi >= 18.5 && bmi <= 24.9){
        status = "Berat Badan Normal"
    } else if(bmi >= 25.0 && bmi <= 29.9){
        status = "kelebihan Berat Badan"
    }else if(bmi >30.0){
        status = "Obesitas"
    }

    res.send({

        tinggi : height,
        berat : weight,
        bmi : bmi,
        status : status
    })
})

app.listen(port, ()=>{
    console.log(`App Running on port ${port}`)
})