import dotenv from "dotenv";
// Load Environment variables
dotenv.config();

import express from "express";
import { URL, fileURLToPath } from "node:url";
import session from "express-session";
import { connectDB } from "./db/connect.js";
import { router as homeRouter } from "./routes/homeRouter.js";
import { router as userRouter } from "./routes/userRouter.js";
import ejs from "ejs";

const app = express();
const staticDir = fileURLToPath(new URL("public", import.meta.url));

// Connect DB
connectDB();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 3600000, // maximum age of the session cookie in milliseconds
			// secure: false, 	//  determines if cookie should be sent only over https connection,	(default: false)
			// httpOnly: false,	// if true, prevents the cookie from being accessed by JavaScript on the client side (default is true)
			// sameSite: true, (default: false)
		},
	})
);
app.use(express.static(staticDir));
app.use("/user", express.static(staticDir));

// using ejs for rendering;
app.set("view engine", "ejs");

// custom routes
app.use("/", homeRouter);
app.use("/user", userRouter);

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server started on port: ${port}`);
});
