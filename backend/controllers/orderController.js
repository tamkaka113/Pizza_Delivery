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
  res.status(201).json(createOrder);
});

export const userOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    throw new Error("Order Not Found");
  }

  res.status(200).json(order);
});

export const getAllOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find({});

  if (!orders) {
    throw new Error("Orders Not Found");
  }

  res.status(200).json(orders);
});

export const updateOrderStatus = asyncHandler(async (req, res) => {

  const {currentStatus} =req.body
  console.log(currentStatus)
  const order = await Order.findById(req.params.id);

  if (!order) {
    throw new Error("Orders Not Found");
  }
  
  order.status =currentStatus + 1


  const newOrder = await order.save()

  res.status(200).json(newOrder);
});
