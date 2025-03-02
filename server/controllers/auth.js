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
      password: password,
    };

    const token = await jwt.sign(payload, process.env.Secret_key, {
      expiresIn: "1h",
    });

    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }
    res.cookie("token", token, {
      maxAge: 300000,
      secure: false,
      httpOnly: true,
      SameSite: "none",
    });

    res.json({ message: "Login successfully", token });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie("token", {
      path: "/",
      sameSite: "none",
      secure: false,
      httpOnly: true,
    });
    res.json({ message: "Logout successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
