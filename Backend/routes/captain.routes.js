const captainController = require('../controllers/captain.controller'); 
const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('firstname must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be at least 1'),
    body('vehicle.type').isIn(['car', 'motorcycle', 'auto']).withMessage('invalid vehicle type')
],

captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({min:6}).withMessage('password must be 6 characters long')
],
captainController.loginCaptain
)

/**
 * @swagger
 * /captain/profile:
 *   get:
 *     tags:
 *       - Captain
 *     summary: Get captain profile
 *     description: Retrieves the authenticated captain's profile information
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Captain profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fullname:
 *                   type: object
 *                   properties:
 *                     firstname:
 *                       type: string
 *                     lastname:
 *                       type: string
 *                 email:
 *                   type: string
 *                 vehicle:
 *                   type: object
 *                   properties:
 *                     color:
 *                       type: string
 *                     plate:
 *                       type: string
 *                     capacity:
 *                       type: number
 *                     type:
 *                       type: string
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

/**
 * @swagger
 * /captain/logout:
 *   get:
 *     tags:
 *       - Captain
 *     summary: Logout captain
 *     description: Logs out the currently authenticated captain and invalidates their token
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Captain logged out successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: logout successfully
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)

module.exports = router;