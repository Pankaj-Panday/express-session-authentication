import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";

const userController = {
	getSignup: (req, res) => {
		res.render("signup", { title: "signup" });
	},
	postSignup: async (req, res) => {
		const name = req.body.username;
		const email = req.body.email;
		const password = req.body.password;

		const user = new User({
			name: name,
			email: email,
			password: await bcrypt.hash(password, 10),
		});
		try {
			await user.save();
			res.redirect("/");
		} catch (err) {
			console.log(err);
			res.status(500).send("Something went wrong. Try again!");
		}
	},
	getLogin: (req, res) => {
		res.render("login", { title: "login" });
	},
	postLogin: async (req, res) => {
		const email = req.body.email;
		const password = req.body.password;
		try {
			const user = await User.findOne({ email: email });
			if (user) {
				const match = await bcrypt.compare(password, user.password);
				if (match) {
					// Login Successful - Regenerate new session
					req.session.regenerate(function (err) {
						if (!err) {
							req.session.authenticated = true;
							req.session.email = user.email;
							req.session.name = user.name;
							res.redirect("/user/profile");
						} else {
							res.status(500).send("Something went wrong");
						}
					});
				} else {
					res.status(401).send("Invalid username or password");
				}
			} else {
				res.status(401).send("Invalid username or password");
			}
		} catch (err) {
			res.status(500).send("Something went wrong");
		}
	},
	getUserProfile: async (req, res) => {
		res.render("userProfile.ejs", {
			name: req.session.name,
			email: req.session.email,
			title: "profile",
		});
	},
	logout: (req, res) => {
		req.session.destroy(function () {
			res.redirect("/");
		});
	},
};

export { userController };
