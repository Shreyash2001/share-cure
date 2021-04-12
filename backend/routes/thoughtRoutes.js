import express from "express"
import { addThought } from "../controllers/thoughtController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/create-thought").post(protect, addThought)

export default router