const User = require('../modelo/User')

const getAllUsers = async(req,res)=>{
    try{

        const users = await User.find({});
        if(users.length===0){
            res.status(500).json({status:"Error",message:"Could not get all usesr"})
        }
        res.status(200).json({status:"200",users:JSON.stringify(users)})
    }
    catch(error){
        console.log(error)
    }
}

const getUser = async(req,res)=>{
    try{

        const{id:userId} = req.params;
        const user = await User.find({_id:userId});
        if(!user){
            res.status(500).json({status:"Error",message:`Could not get user with id ${user}`})
        }
        res.status(200).json({status:"200",users:JSON.stringify(user)})
    }
    catch(error){
        console.log(error)
    }
}

const saveUser = async(req,res) =>{
    try{
        const user = await User.create(req.body)

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

const updateUser = async(req,res)=>{
    try{

        const{id:userId} = req.params;
        const user = await User.findByIdAndUpdate({_id:userId},req.body);
        if(!user){
            res.status(500).json({status:"Error",message:`Could not update user with id ${user}`})
        }
        res.status(200).json({status:"200",message:"User sucefully updated"})
    }
    catch(error){
        console.log(error)
    }
}

const deleteUser = async(req,res)=>{
    try{

        const{id:userId} = req.params;
        const user = await User.findByIdAndDelete({_id:userId},req.body);
        if(!user){
            res.status(500).json({status:"Error",message:`Could not delete user with id ${user}`})
        }
        res.status(200).json({status:"200",message:"User sucefully deleted"})
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {saveUser,getAllUsers,getUser,updateUser,deleteUser}