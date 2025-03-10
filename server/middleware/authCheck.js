const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");

exports.authCheck = async(req, res, next) => {
  try {
    const headerToken = req.headers.authorization;
    if (!headerToken) {
      return res.status(401).json({ message: "No Token, Authorization" });
    }

    const token = headerToken.split(" ")[1];
    const decode = jwt.verify(token, process.env.Secret_key);
    req.user = decode;


    const user = await prisma.teachers.findFirst({
      where : {
        email : decode.email
      }
    })

    if(!user){
      return res.status(402).json({message : "สำหรับอาจารย์เท่านั้น"})
    }


    next();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};