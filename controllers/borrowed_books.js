const Borrowed_Books =  require('../modelo/Borowed_Book')

const saveBorrow = async(req,res)=>{

    try{
        const book = await Borrowed_Books.create(req.body)
        if(!book){
            res
            .status(500)
            .json({status:"ERROR",message:"We could not complete your request"})
        }

        res
        .status(200)
        .json({status:"SUCCESS",book:book})

    }
    catch(error){

        console.log(error)
    }
}

const getBorrowedBook = async(req,res)=>{

    try{
        const{id:borrowId} = req.params
        const book = await Borrowed_Books.findById({_id:borrowId})
        if(book.length==0){
            res
            .status(500)
            .json({status:"ERROR",message:"We could not complete your request"})
        }

        res
        .status(200)
        .json({status:"SUCCESS",book:book})

    }
    catch(error){
        console.log(error)
    }
}

const getBorrowedBooks = async(req,res)=>{

    try{
        const book = await Borrowed_Books.find({})
        if(book.length==0){
            res
            .status(500)
            .json({status:"ERROR",message:"We could not complete your request"})
        }

        res
        .status(200)
        .json({status:"SUCCESS",books:book})

    }
    catch(error){
        console.log(error)
    }
}

module.exports = {saveBorrow,getBorrowedBook,getBorrowedBooks}