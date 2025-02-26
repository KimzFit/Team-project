const prisma = require('../config/prisma')

exports.register = async (req,res)=>{
  try{
    const {email , password} = req.body

    if(!email){
      return res.status(402).json({message : "Email is required"})
    }

    if(!password){
      return res.status(402).json({message : "Password is required"})
    }

  

  }catch(err){
    console.log(err.message)
    res.status(500).json({message : "Server Error"})
  }
}

exports.login = (req,res)=>{
  try{

  }catch(err){
    console.log(err.message)
    res.status(500).json({message : "Server Error"})
  }
}