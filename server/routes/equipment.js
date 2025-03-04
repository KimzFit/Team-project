const express = require("express");
const { read, readByYear } = require("../controllers/equipment");
const { authCheck } = require("../middleware/authCheck");

const router = express.Router();

/**
 * @swagger
 * /api/equipment:
 *   get:
 *     summary: Retrieve a list of equipment
 *     tags:
 *       - Equipment
 *     responses:
 *       200:
 *         description: A list of equipment
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   equipment_id:
 *                     type: string
 *                     example: ชพ09
 *                   name:
 *                     type: string
 *                     example: โต๊ะ
 */
router.get("/equipment", authCheck, read);

/**
 * @swagger
 * /api/equipment/year:
 *   post:
 *     summary: Retrieve equipment data filtered by year
 *     tags:
 *       - Equipment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               selectedYear:
 *                 type: integer
 *                 example: 2567
 *     responses:
 *       200:
 *         description: A list of equipment from the specified year
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Drill
 *                   years:
 *                     type: array
 *                     items:
 *                       type: integer
 *                     example: [2567, 2566]
 *       400:
 *         description: Invalid year input
 *       500:
 *         description: Server error
 */

router.post("/equipment/year", readByYear);

module.exports = router;
