const prisma = require("../config/prisma");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const payload = {
      user_id: 1,
      email: email,
    };

    await jwt.sign(payload, process.env.Secret_key, {expiresIn: "2h",} , (err , token)=>{
      if (err){
        return res.status(403).json({message : err.message})
      }
      res.json({token , payload})
    });

    

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};


