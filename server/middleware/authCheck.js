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

    const user = await prisma.students.findFirst({
      where : {
        OR : [
          {
            email : decode.email || undefined,
            student_id : decode.student_id || undefined
          }
        ]
      }
    })

    if(!user){
      return res.status(402).json({message : "Unauthorization"})
    }


    next();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Please login before" });
  }
};

exports.adminCheck = (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
