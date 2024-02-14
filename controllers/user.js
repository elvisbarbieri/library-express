const user = require('../modelo/user')

const getAllusers = async(req,res)=>{
    try{

        const users = await user.find({});
        if(users.length===0){
            res.status(500).json({status:"Error",message:"Could not get all usesr"})
        }
        res.status(200).json({status:"200",users:JSON.stringify(users)})
    }
    catch(error){
        console.log(error)
    }
}

const getuser = async(req,res)=>{
    try{

        const{id:userId} = req.params;
        const user = await user.find({_id:userId});
        if(!user){
            res.status(500).json({status:"Error",message:`Could not get user with id ${user}`})
        }
        res.status(200).json({status:"200",users:JSON.stringify(user)})
    }
    catch(error){
        console.log(error)
    }
}

const saveuser = async(req,res) =>{
    try{
        const user = await user.create(req.body)

        if(!user){
            res
            .status(500)
            .json({status:"ERROR",message:"Your request could not be processed."})
        }

        res
        .status(200)
        .json({status:"SUCCESS",user:user})
    }
    catch(error){
        console.log(error)
    }
}

const updateuser = async(req,res)=>{
    try{

        const{id:userId} = req.params;
        const user = await user.findByIdAndUpdate({_id:userId},req.body);
        if(!user){
            res.status(500).json({status:"Error",message:`Could not update user with id ${user}`})
        }
        res.status(200).json({status:"200",message:"user sucefully updated"})
    }
    catch(error){
        console.log(error)
    }
}

const deleteuser = async(req,res)=>{
    try{

        const{id:userId} = req.params;
        const user = await user.findByIdAndDelete({_id:userId},req.body);
        if(!user){
            res.status(500).json({status:"Error",message:`Could not delete user with id ${user}`})
        }
        res.status(200).json({status:"200",message:"user sucefully deleted"})
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {saveuser,getAllusers,getuser,updateuser,deleteuser}