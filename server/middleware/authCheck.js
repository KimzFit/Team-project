const jwt = require("jsonwebtoken");

exports.authCheck = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const user = jwt.verify(token, process.env.Secret_key);

    req.user = user;

    next();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
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
