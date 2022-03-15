import express from "express";
import { adminLogin } from "../controllers/adminController.js";
const router =express.Router()

router.route('/').post(adminLogin)

export default router