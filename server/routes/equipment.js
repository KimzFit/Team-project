const express = require("express");
const { read, readByYear, create , removeEquipment, readCategory } = require("../controllers/equipment");
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
router.get("/equipment",  read);

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



/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Retrieve a list of equipment categories
 *     tags:
 *       - Category
 *     responses:
 *       200:
 *         description: A list of equipment categories
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
 *                     example: "เฟอร์นิเจอร์"
 *       500:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server Error"
 */

router.get("/category" , readCategory)

// #################### Admin ####################
/**
 * @swagger
 * /api/equipment:
 *   post:
 *     summary: Create a new equipment entry
 *     tags:
 *       - Equipment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               equipment_id:
 *                 type: string
 *                 example: ชพ09
 *               name:
 *                 type: string
 *                 example: โต๊ะ
 *               qty:
 *                 type: integer
 *                 example: 10
 *               purchase_year:
 *                 type: integer
 *                 example: 2023
 *               model:
 *                 type: string
 *                 example: X123
 *               status:
 *                 type: string
 *                 example: "ใช้งานได้"
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *               room:
 *                 type: string
 *                 example: "101"
 *     responses:
 *       201:
 *         description: Equipment Created Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Equipment Created"
 *       400:
 *         description: Year not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Year not found"
 *       500:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server Error"
 */

router.post("/equipment/create",authCheck ,create);

/**
 * @swagger
 * /api/equipment/{id}:
 *   delete:
 *     summary: Delete an equipment by ID
 *     tags:
 *       - Equipment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the equipment to delete
 *     responses:
 *       200:
 *         description: Equipment Deleted Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Equipment Deleted"
 *       404:
 *         description: Equipment Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Equipment Not Found"
 *       500:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server Error"
 */

router.delete("/equipment/delete/:id", authCheck, removeEquipment);

module.exports = router;
