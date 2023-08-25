import express from "express";
import { userController } from "../controllers/userController.js";
import { checkAuthentication } from "../middleware/authMiddleware.js";
const router = express.Router();

// SIGN UP ROUTES
router.get("/signup", checkAuthentication, userController.getUserProfile);
router.get("/signup", userController.getSignup);
router.post("/signup", userController.postSignup);

// LOGIN ROUTES
router.get("/login", checkAuthentication, userController.getUserProfile);
router.get("/login", userController.getLogin);
router.post("/login", userController.postLogin);

// GET USER PROFILE ROUTES
router.get("/profile", checkAuthentication, userController.getUserProfile);
router.get("/profile", userController.getLogin);

// LOGOUT ROUTE
router.get("/logout", userController.logout);

export { router };
