import asyncHandler from "express-async-handler"
import generateToken from '../utils/generateToken.js'
const adminLogin =asyncHandler(async (req,res) => {
     const {username, password} = req.body
if(username ===process.env.ADMIN && password === process.env.PASSWORD) {
    res.status(200).json({
        username: process.env.ADMIN,
        token: generateToken(process.env.ID)
    })
} else {
    throw new Error ('Username or password invalid')
}

})

export {adminLogin}