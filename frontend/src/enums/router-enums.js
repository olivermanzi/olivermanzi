/**
 * Returns router names
 */
const ROUTES = {
	// public
	user:{
		landing: "landing",
		resume: "resume",
	},
	//admin
	admin: {
		profile:"admin-user",
		bio:"admin-bio",
		experiences:"admin-experiences"
	},
	//other
	auth:{
		login:"login"
	},
	wip: "wip",
};

export default ROUTES;
