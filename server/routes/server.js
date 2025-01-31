const express = require("express");
const router = express.Router();
const { read, listUser, createUser} = require("../controllers/server");

router.get("/hello", read);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: แสดงข้อมูลของ Users ทั้งหมด
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Get all users
 */
router.get("/users", listUser);
/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create a new user
 *     description: This endpoint creates a new user in the database using Prisma.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 example: P@ssw0rd
 *                 description: The password for the user.
 *               name:
 *                 type: string
 *                 example: John Doe
 *                 description: The full name of the user.
 *     responses:
 *       200:
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: user@example.com
 *                 name:
 *                   type: string
 *                   example: John Doe
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Server Error"
 */
router.post("/user", createUser);

module.exports = router;
