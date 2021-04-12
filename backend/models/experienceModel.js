import mongoose from "mongoose"

const experienceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "Sample"
    },
    link: {
        type: String,
        default: "Sample"
    },
    tag: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

const Experience = mongoose.model("Experience", experienceSchema)

export default Experience

