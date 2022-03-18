import {
  getAllProducts,
  getSingleProduct,
  uploadNewImage,
  createNewProduct,
  deleteProduct,
} from "../controllers/productController.js";
import express from "express";
const router = express.Router();

router.route("/").get(getAllProducts);

router.route("/create").post(createNewProduct);
router.route("/uploads").post(uploadNewImage);
router.route("/:id").get(getSingleProduct).delete(deleteProduct);

export default router;
