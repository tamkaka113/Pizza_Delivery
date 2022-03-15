import { getAllProducts,getSingleProduct } from "../controllers/productController.js";
import express from "express";
const router = express.Router()

router.route('/').get(getAllProducts)
router.route('/:id').get(getSingleProduct)


export default router