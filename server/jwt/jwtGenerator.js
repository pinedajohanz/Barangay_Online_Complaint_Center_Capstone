// used for creating, signing, and verifying JWTs
const jwt = require("jsonwebtoken")
// used for loading environment variables from a .env file.
const dotenv = require("dotenv").config()


// takes a user object as an argument and returns a JWT token.
const  generateJWT = (user) => {
	// first argument is the payload to be included in the JWT
	// second argument is the secret used to sign the JWT
	// third argument is expiration of token
	return  jwt.sign(user, process.env.jwtSecret, { expiresIn:  '365d' })
}
module.exports =  generateJWT;
