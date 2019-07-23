module.exports = {
	
	// user and admin route restriction
	isAuth: (req,res,next) => {

		let userRole = req.user[0]['role_id'];
		if (userRole != 2) {
			return res.status(403).json({
				error: "Access Denied"
			});
		}
		next();
	},
	isAdmin: (req,res,next) => {

		let userRole = req.user[0]['role_id'];
		if (userRole != 1) {
			return res.status(403).json({
				error: "Admin Access Denied"
			});
		}
		next();
	}
}