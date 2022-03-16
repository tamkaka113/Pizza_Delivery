import { createOrders } from "../controllers/orderController.js";
import express from "express";
const router =express.Router()


router.route('/').post(createOrders)

export default router