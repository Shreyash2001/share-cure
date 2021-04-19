import express from "express"
import { authUser, createUserJournal, getInfoOfUser, getUser } from "../controllers/userController.js"
import {protect} from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/all-journals").get(protect, getInfoOfUser)
router.route("/create-journal").post(protect, createUserJournal)
router.route("/login").post(authUser)
router.route("/register").post(getUser)

export default router