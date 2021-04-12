import mongoose from 'mongoose'

const thoughtSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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
    timsestamps: true
})

const Thought = mongoose.model("Thought", thoughtSchema)

export default Thought