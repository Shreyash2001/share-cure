import asyncHandler from "express-async-handler"
import Experience from "../models/experienceModel.js"

const addExperience = asyncHandler(async(req, res) => {
    const {title, about, description, image, link, tag} = req.body

    if(title !== undefined && description !== undefined && tag !== undefined && about !== undefined) {
        const experience = await Experience.create({
            user: req.user._id,
            title: title,
            about: about,
            description: description,
            link: link,
            image: image,
            tag: tag
        })
    
        if(experience) {
            res.status(200).json({
                user: req.user._id,
                id: experience._id,
                title: experience.title,
                about: experience.about,
                description: experience.description,
                link: experience.link,
                image: experience.image,
                tag: experience.tag
            })
        } else {
            res.status(400).json({message:"Not Created"})
        }
    } else {
        res.status(400).json({message:"Please fill all fields!!!"})
    }
    
})

const getExperience = asyncHandler(async(req, res) => {
    const experience = await Experience.find({})
    if(experience) {
        res.status(200).json(experience)
    } else {
        res.status(404).json({message:"Nothing found"})
    }
})

export {addExperience, getExperience}