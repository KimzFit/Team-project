const prisma = require('../config/prisma')

exports.read = async (req,res)=>{

  try{
    const data = await prisma.equipment.findMany()
    
    res.json({message : "Fetch Data completed"})
  }catch(err){
    console.log(err.message)
    res.status(500).json({message : "Server Error"})
  }
}