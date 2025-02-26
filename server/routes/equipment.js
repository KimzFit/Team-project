const express = require("express");
const { read } = require("../controllers/equipment");
const router = express.Router();

router.get("/equipment", read);

module.exports = router;
