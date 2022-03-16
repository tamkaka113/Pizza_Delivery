import Order from "../models/Order.js";
import asyncHandler from "express-async-handler";
export const createOrders = asyncHandler(async (req, res) => {
  const { customer, total, address, status, method } = req.body;

  const order = new Order({
    customer,
    total,
    address,
    status,
    method,
  });

  const createOrder = await order.save();
  res.status(200).json(createOrder);
});


