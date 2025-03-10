const prisma = require("../config/prisma");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password is required" });
    }

    let role = null;
    let user = null;

    user = await prisma.teachers.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      role = "teacher";
    } else {
      user = await prisma.students.findFirst({
        where: {
          OR: [
            { email: email || undefined },
            { student_id: email || undefined },
          ],
        },
      });
      if (user) {
        role = "student";
      }
    }

    if (!user) {
      return res
        .status(401)
        .json({ message: "Account not found in the system." });
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(401).json({ message: "Password is not Matched" });
    }

    const payload = {
      id: user.id,
      email: user.email,
      full_name: user.full_name,
      role: role,
    };

    await jwt.sign(
      payload,
      process.env.Secret_key,
      { expiresIn: "2h" },
      (err, token) => {
        if (err) {
          return res.status(403).json({ message: err.message });
        }
        res.status(200).json({ token, payload });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
