import products from './data/products.js'
import dotenv from 'dotenv'
import Product from './models/Product.js'
dotenv.config()
import connectDB from './db/connectDB.js'

connectDB()

const importData = async () =>  {

    try {
        
        await Product.deleteMany()
     
        await Product.insertMany(products)
        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

importData()