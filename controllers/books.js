const { json } = require('express');
const Book = require('../modelo/Book');
const Books =  require('../modelo/Book')

const getAllBooks = async(req,res)=>{
    try{

        const books = await Books.find({})
        console.log(books);

        if(books.length==0){
            res
            .status(500)
            .json({status:"ERROR",message:"There aren't any books found"})
        }

        res
        .status(200)
        .json({status:"SUCCESS",books:JSON.stringify(books)})
    }
    catch(exception){

        console.log(`Error while processing your request. Error: ${exception}`)
    }

}

const saveBook = async(req,res)=>{

    try{
        console.log(req.body)
        const book = await Books.create(req.body)
        if(!book){
            res
            .status(500)
            .json({status:"ERROR",message:"We could not complete your request"})
        }

        res
        .status(200)
        .json({status:"SUCCESS",book:JSON.stringify(book)})

    }
    catch(error){

        console.log(error)
    }
   
}

const updateBook = async(req,res)=>{

    try{
        const { id: bookID } = req.params;
        const book = await Books.findOneAndUpdate({_id:bookID},req.body)
        if(!book){
            res
            .status(500)
            .json({status:"ERROR",message:"update not completed"})
        }

        res
        .status(200)
        .json({status:"SUCCESS",message:"Book sucefully updated"})

    }
    catch(error){
        console.log(error)
    }
}

const deleteBook = async(req,res) =>{

    try{
        const { id: bookID } = req.params;
        const book = await Books.findByIdAndDelete({_id:bookID},req.body)
        if(!book){
            res
            .status(500)
            .json({status:"ERROR",message:`There is not any book with this id: ${bookID}`})
        }
        res
        .status(200)
        .json({status:"SUCCESS",message:"Book sucessfully deleted"})

    }
    catch(error){

        console.log(error)
    }

}

module.exports = {getAllBooks,saveBook, updateBook, deleteBook}