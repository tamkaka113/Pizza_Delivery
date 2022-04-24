import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";
import { v2 as cloudinary } from "cloudinary";
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (!products) {
    throw new Error("Products Not Found");
  }
  res.status(200).json(products);
});

const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.status(200).json(product);
});
const uploadNewImage = asyncHandler(async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "upload-image2",
    }
  );

  return res.status(200).json({ image: result.secure_url });
});

const createNewProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);

  if (!product) {
    throw new Error("Cannot Create New Product");
  }
  res.status(201).json(product);
});

const updateProduct = asyncHandler(async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new Error("Product Not Found");
  }

  res.status(200).json(product);
});

const deleteProduct = asyncHandler(async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);

  res.status(200).json("Product Deleted");
});
export {
  getAllProducts,
  getSingleProduct,
  uploadNewImage,
  createNewProduct,
  deleteProduct,
  updateProduct,
};
