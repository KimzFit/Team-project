const prisma = require("../config/prisma");

exports.list = async(req,res)=> {
  try{
    const users = await prisma.user.findMany();
    res.json(users);
  }catch(error){
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

exports.student = async(req,res)=> {
  try{
    const student = await prisma.students.findMany();
    res.json(student)
  }catch(error){
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}