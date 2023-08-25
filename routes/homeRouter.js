import express from "express";
import { homeController } from "../controllers/homeController.js";
import { checkAuthentication } from "../middleware/authMiddleware.js";
import { userController } from "../controllers/userController.js";
const router = express.Router();

router.get("/", checkAuthentication, userController.getUserProfile);
router.get("/", homeController.home);

export { router };
