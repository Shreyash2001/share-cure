import asyncHandler from "express-async-handler"
import Thought from "../models/thoughtModel.js"

const addThought = asyncHandler(async(req, res) => {
    const {title, description, tag} = req.body
    if(title !== undefined && description !== undefined && tag !== undefined ) {
        const thought = await Thought.create({
            user: req.user._id,
            title: title,
            description: description,
            tag: tag
        })
    
        if(thought) {
            res.status(200).json({
                user: req.user._id,
                id: thought._id,
                title: thought.title,
                description: thought.description,
                tag: thought.tag,
                like: thought.like
            })
        } else {
            res.status(400).json({message:"Not Created"})
        }
    } else {
        res.status(400).json({message:"Please fill all fields!!!"})
    }
    
})

export {addThought}