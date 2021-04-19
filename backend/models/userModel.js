import mongoose from "mongoose"
import bcrypt from "bcrypt"

const journalSchema = mongoose.Schema({
    title: {
        type:String
    },
    description: {
        type: String,
        default:"Sample Data"
    },
    tag: {
        type: String,
        default:"Sample"
    },
})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    journal: [journalSchema]
    
}, {
    timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next()
    } 
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", userSchema)

export default User