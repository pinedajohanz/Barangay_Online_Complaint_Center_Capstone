const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()
// dotenv.config()

const  auth = (req, res, next) => {
	//this will check if a token is existing in the Authorization Header
	const  token = req.header("Authorization")
	if (!token) {
		return  res.status(403).json({ err:  'Invalid token' });
	}
	try {
		//this will take the token from the Authorization header then will use
		//jwt.verify function to process it
		jwt.verify(token.slice(7), process.env.jwtSecret, (err, user) => {
		if(err) return  res.sendStatus(403)
			//this will store the user payload in the request
			req.user = user
		next()
	});

	} catch (err) {
		res.status(401).json({ error:  err.message });
	}
}
module.exports = auth;


//let tokenToVerify = token;
		//if (token.startsWith("Bearer ")) {
		//tokenToVerify = token.slice(7);
		//}
		//jwt.verify(tokenToVerify, process.env.jwtSecret, (err, user) => {
		//if (err) return res.status(403).json({ error: err.message });
		//this will store the user payload in the request
			//req.user = user
		//next()