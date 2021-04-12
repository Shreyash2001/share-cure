import express from "express"
import { authUser, getUser } from "../controllers/userController.js"

const router = express.Router()

router.route("/login").post(authUser)
router.route("/register").post(getUser)

export default router