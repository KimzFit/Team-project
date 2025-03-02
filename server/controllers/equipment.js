const prisma = require('../config/prisma')

exports.read = async (req,res)=>{

  try{

    const data = await prisma.equipment.findMany({
      include : {
        years : {
          select : {
            years : true
          }
        }
      }
    })

    
   
    res.json(data)
  }catch(err){
    console.log(err.message)
    res.status(500).json({message : "Server Error"})
  }
}


exports.readByYear = async (req, res) => {
  const { selectedYear } = req.body;  
  
  try {
    const data = await prisma.equipment.findMany({
      where: {
        years: {
          years: Number(selectedYear) 
        }
      },
      include: {
        years: {
          select: {
            years: true
          }
        }
      }
    });

    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

