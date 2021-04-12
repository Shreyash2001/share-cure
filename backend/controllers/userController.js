import asyncHandler from "express-async-handler"
import generateToken from "../../../Airbnb/backend/utils/generateToken.js"
import User from "../models/userModel.js"

const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(404).json({message:"Invalid Email or Password"})
    }
})

const getUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body
    const user = await User.findOne({email})

    if(user) {
        res.status(400).json({message:"Already Registered!!"})
    } else {
        const newUser = await User.create({
            name,
            email,
            password
        })

        if(newUser) {
            res.status(200).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token: generateToken(newUser._id)
            })
        } else {
            res.status(400).json({message: "User not created!!"})
        }

    }
})

export {getUser, authUser}