const jwt = require('jsonwebtoken')
const prisma = require("../config/prisma")

exports.login = async (req, res) => {
  const { email, password } = req.body;

  
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        email : email
      },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if(password !== user.password){
      return res.status(401).json({ error: "Incorrect password" });
    }

    const payload = {
      userId: user.id,
      email: user.email,
      name: user.name,
      role : user.role
    };

    jwt.sign(payload, process.env.JWT_SECRET , { expiresIn: "2h" } , (err, token) => {
      if (err){
        return res.status(500).json({ error: "Error signing token" });
      }
      res.json({ payload,token });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}