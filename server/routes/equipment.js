const express = require("express");
const { read, readByYear } = require("../controllers/equipment");
const router = express.Router();

router.get("/equipment", read);
router.post("/equipment/year" ,readByYear)

module.exports = router;
