import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoute from "./routes/userRoutes.js"
import experienceRoute from "./routes/experienceRoutes.js"



dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.use("/experiences", experienceRoute)
app.use("/users", userRoute)



app.use("/", (req, res) => {
    res.send("Hello People")
})

const PORT = process.env.PORT ||  5000

app.listen(PORT, (req, res) => {
    console.log(`Server Started on ${PORT}`)
})