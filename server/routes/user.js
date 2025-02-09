const express = require("express");
const { authCheck, adminCheck } = require("../middleware/authCheck");
const { list, student  } = require("../controllers/user");
const router = express.Router();


router.get("/user-list" , authCheck , adminCheck ,list )
router.get("/student" ,student)

module.exports = router;