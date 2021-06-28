import JWT from "jsonwebtoken";
const SECRET = process.env.VUE_APP_JWT_SECRET;

/**
 * Checks validity of token and (if successful, returns decoded token).
 * @param {String} token
 * @returns {String | Object}
 */
export const verifyToken = (token) => {
	const decoded = JWT.verify(token, SECRET);
	return decoded;
};
