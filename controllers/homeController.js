const homeController = {
	home: (req, res) => {
		res.render("home", { title: "home" });
	},
};

export { homeController };
