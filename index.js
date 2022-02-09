//inisialisasi aplikasi express js
const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const { error } = require("console")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//membuat koneksi
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "perpus"
})

db.connect(error => {
    if(error){
        console.log(error.massage)
    }else{
        console.log("Mysql connected")
    }
})

//data dummy
let nextId = 4;
const books = [
    { id:1, title: "The First", year: 2019},
    { id:2, title: "The Second", year: 2020},
    { id:3, title: "The Third", year: 2021},
];


//endpoint endpoint

app.get("/", (req,res)=> {
    res.send({
        message: "Berhasil melakukan panggilan get",
        data: {
            description:
            "Endpoint ini untuk menampilkan data"
        }
    })
})

app.get("/books", (req,res)=> {{
    //create sql query
    let sql = "select * from perpustakaan"

    //run query
    db.query(sql,(error,result) =>{
        let response = null
        if(error){
            response = {
                massage: error.massage
            }
        }else{
            response = {
                result
            }
        }
        res.json(response)
    })

    res.send({
        message: "Berhasil menampilkan data buku",
        data: { books }
    })
}}) 

app.get("/book/:id", (req,res) =>{
    const book = books.find((item) => item.id == req.params.id);
    res.send({
        massage: "Berhasil menampikan perubahan data buku",
        data: {book}
    })
})

app.post("/books", (req,res) =>{
    const book = {
        id: nextId++,
        title: req.body.title,
        year: req.body.year,
    }
    books.push(book);
    res.send({
        massage: "Berhasil menambahkan buku",
        data: {
            newBook: book,
            totalBooks: books.length,
        }
    })
})

app.put("/books/:id", (req,res) =>{
    const bookIndex = books.findIndex((item) => item.id == req.params.id);
    books[bookIndex].title = req.body.title;
    books[bookIndex].year = req.body.year;

    res.send({
        massage: "Berhasil mengubah buku",
        data: { book: books[bookIndex]}
    })
})

const port = 8000;
app.listen(port, ()=> console.log(`App running ${port}`))

