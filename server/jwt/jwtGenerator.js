const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()
// dotenv.config();


const  generateJWT = (user) => {
	return  jwt.sign(user, process.env.jwtSecret, { expiresIn:  '365d' })
}
module.exports =  generateJWT;
