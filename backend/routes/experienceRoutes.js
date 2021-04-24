import express from "express"
import { addExperience, createCommentExperience, getExperience, getExperienceById, getExperienceEmotional, getExperienceHappy, getExperienceLove } from "../controllers/experienceController.js"
import {protect} from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/emotional").get(getExperienceEmotional)
router.route("/happy").get(getExperienceHappy)
router.route("/love").get(getExperienceLove)
router.route("/create-experience").post(protect, addExperience)
router.route("/comment/:id").post(protect, createCommentExperience)
router.route("/user-experience/:id").get(getExperienceById)
router.route("/all").get(getExperience)

export default router