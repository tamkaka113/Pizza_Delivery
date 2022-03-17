import { createOrders,userOrder,getAllOrder,updateOrderStatus  } from "../controllers/orderController.js";
import express from "express";
const router =express.Router()


router.route('/').post(createOrders).get(getAllOrder)
router.route('/:id').get(userOrder).patch(updateOrderStatus)

export default router