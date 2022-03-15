import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";
const getAllProducts =asyncHandler( async (req, res) => {
    
  const products = await Product.find({})
 if(!products) {
     throw new Error ('Products Not Found')
 }
  res.status(200).json(products)
})

const getSingleProduct =asyncHandler( async (req,res)=> {
 const product = await Product.findById(req.params.id)

 res.status(200).json(product)
})


export { getAllProducts,getSingleProduct}
