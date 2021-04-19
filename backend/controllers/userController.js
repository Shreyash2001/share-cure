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
            journal: user.journal,
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
            password,
            journal: {description:"Sample Data", tag:"Sample"}
        })

        if(newUser) {
            res.status(200).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                journal: newUser.journal,
                token: generateToken(newUser._id)
            })
        } else {
            res.status(400).json({message: "User not created!!"})
        }

    }
})

const createUserJournal = asyncHandler(async(req, res) => {
    const {title, description, tag} = req.body
    const user = await User.findById(req.user._id)
    
    if(user) {
        const data = {
            title: title,
            description: description,
            tag: tag
        }
        user.journal.push(data)
      const addedJournalUser = await user.save()
      if(addedJournalUser) {
        res.status(200).json({addedJournalUser})
      } else {
          res.status(400).json({message:"Not added"})
      }
       
    } else {
        res.status(400).json({message:"Sorry Not Created"})
    }
})

const getInfoOfUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)
    if(user) {
        res.status(200).json({
            _id: user._id,
            journal: user.journal

        })
    } else {
        res.status(404).json({message:"User Not Found!!!"})
    }
})


export {getUser, authUser, createUserJournal, getInfoOfUser}