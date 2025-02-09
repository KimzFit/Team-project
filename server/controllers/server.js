const prisma = require("../config/prisma");
const db = require('../config/mysql')


exports.read = (req, res) => {
  try {
    res.send("Hello world");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.listUser = async (req, res) => {
  try {
    const data = await prisma.user.findMany()
    res.json(data)
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    await prisma.user.create({
      data: {
        email: email,
        password: password,
        name: name,
      },
    });
    res.send("Create completed")
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
};
