const checkAuthentication = (req, res, next) => {
	if (req.session && req.session.authenticated) {
		next();
	} else {
		next("route");
	}
};

export { checkAuthentication };
