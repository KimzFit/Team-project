const jwt = require("jsonwebtoken");
const prisma = require('../config/prisma');

exports.authCheck = async (req, res, next) => {
  try {
    const headertoken = req.headers.authorization;
    if (!headertoken) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }
    console.log(headertoken);

    const token = headertoken.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.adminCheck = async (req, res, next) => {
  try {
    const { email } = req.user;

    const adminUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log(adminUser)

    if (!adminUser || adminUser.role !== "admin") {
      return res.status(403).json({ error: "Admin resource! Access denied" });
    }
    
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
