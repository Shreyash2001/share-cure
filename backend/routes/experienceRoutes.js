import express from "express"
import { addExperience, getExperience } from "../controllers/experienceController.js"
import {protect} from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/create-experience").post(protect, addExperience)
router.route("/all").get(getExperience)

export default router