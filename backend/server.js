import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import connectDB from './db/connectDB.js'
import productRouter from './routes/productRouter.js'
import adminRouter from './routes/adminRouter.js'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import orderRouter from './routes/orderRouter.js'
const app = express();

app.use(morgan("dev"));
app.use(express.json());
connectDB()
app.get("/", (req, res) => {
  res.send("this is homepage");
});

app.use('/api/v1/products',productRouter)
app.use('/api/v1/orders',orderRouter)
app.use('/api/v1/admin',adminRouter)
app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000;

const start = () => {
  app.listen(PORT, console.log(`Server is running on port ${PORT}`));
};

start();
