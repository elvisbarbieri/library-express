const express = require('express')
const app = express()
const bookRoute = require('./routers/books')
const userRoute = require('./routers/user')
const connectDB = require('./db/connect')
require('dotenv').config()


const PORT = 5000;
app.use(express.json());
app.use("/api/v1/users",userRoute);
app.use("/api/v1/books",bookRoute);



// app.post("/api/v1/books",(req,res)=>{
//     res
//     .status(200)
//     .json({status:"SUCCESS",message:"Book sucefully saved. "})
// })

// app.put("/api/v1/books",(req,res)=>{
//     res
//     .status(200)
//     .json({status:"SUCCESS",message:"Book sucefully updated "})
// })

// app.delete("/api/v1/books",(req,res)=>{
//     res
//     .status(200)
//     .json({status:"SUCCESS",message:"Book sucefully deleted"})
// })
const start = async() => {

    try {

        await connectDB(process.env.MONGO_URL)
        app.listen(PORT,(req,res)=>{
            console.log(`SISTEMA BIBLIOTECARIO EXECUTANDO NA PORTA: ${PORT}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}

start()