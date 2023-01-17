// Create an index.js file, which we’ll use as the entry point for our server. At the top, we’ll require the express module, the built-in body-parser middleware, and we’ll set our app and port variables:
// npm run dev -> auto refresh server
const bodyParser = require ('body-parser')
const bcrypt = require('bcrypt')
const express = require('express') 
const cors = require('cors')
const {v4: uuidv4}  = require('uuid')
// const uuid = require('uuid/v4')

const generateJWT = require("./jwt/jwtGenerator")
const auth = require("./middleware/auth")
const pool = require('./db')
const app = express() 

//middleware
app.use(bodyParser.json())
app.use(cors()) 
app.use(express.json()) //req.body

///////////ROUTES//////////////

// (SIGN UP PAGE)
// CREATE a resident row 
// link - http://localhost:5000/signup
app.post("/signup", async (req, res) => {
    try {

         //take the username and password from the req.body
        const { 
            first_name,
            middle_init,
            last_name,
            birthday,
            subdivision_address,
            house_street_address,
            contact_number,
            email_address,
            username,
            password } = req.body
        


        //Check if the user is already existing
        const user = await pool.query(`SELECT * FROM Residents WHERE
        username = $1`, [username])

        if (user.rows.length > 0) {
            res.status(401).send("User already exists")
        }
        
        //Setup Bcrypt for password hashing
        const hash = await bcrypt.hash(password, 10)
        
        
        //Add the new user into the database
        //generate the uuid using the uuidv4() function

        const newResidents = await pool.query(
            `INSERT INTO Residents (uuid, first_name, middle_init, last_name, birthday, subdivision_address, house_street_address, contact_number, email_address, username, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING * `, 
            [uuidv4(), first_name, middle_init, last_name, birthday, subdivision_address, house_street_address, contact_number, email_address, username, hash])

        //generate and return the JWT token
        const token = generateJWT(newResidents.rows[0])

        res.json({
            token
        })
            // res.json(newResidents.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).send(err.message)
    }
});

/* {
    "first_name": "Juanica",
    "middle_init": "B",
    "last_name": "Pineda",
    "birthday": "10/10/66",
    "subdivision_address": "Woodlane Subdivision",
    "house_street_address": "B9 L1",
    "contact_number": "9975113834",
    "email_address": "pinedarob@gmail.com",
    "username": "rob3",
    "password": "robpin345123"
} */

// (LOG IN PAGE) 
// link - http://localhost:5000/login
// find the username first if match then compare the password from user to database
app.post('/login', async (req, res) => {
try {
    //take the username and password from the req.body
    const { username, password } = req.body
    
    //Check if the user is not existing
    const user = await pool.query('SELECT * FROM Residents WHERE username = $1 ', [
        username
    ]);
    
    if (user.rows.length < 0) {
        res.status(401).send("Invalid Username") 
        return
    }

    //Check if the password matches using bcrypt
    const isValid = await bcrypt.compare(password, user.rows[0].password)
    if (!isValid) {
        return res.status(401).json("Invalid Password")
    }
    //generate and return the JWT
    const token = generateJWT(user.rows[0])
    res.json({
        token
    })

    // res.json("Log in success")

    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
    })
}
});  

// provide the auth middleware
app.get('/verify', auth, async (req, res) => {
    try {

        //return the user object
        res.json(req.user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Error"
        });
    }
})

// SUBMIT A COMPLAINT  (DEBUG AGAIN)
// CREATE a complaint row 
// link - http://localhost:5000/complaints
app.post("/complaints", async (req, res) => {
    try {
        const { message_comp, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing, resident_id, status_info_id  } = req.body
        const newComplaints = await pool.query(
            `INSERT INTO Complaints (message_comp, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing, resident_id, status_info_id ) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING * `, 
            [message_comp, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing, resident_id, status_info_id ])

            res.json(newComplaints.rows)
    } catch (err) {
        console.error(err.message)
    }
});

/*
{
    "message_comp": "I would like to file a complaint",
    "location_of_complaint": "Nesi Compound",
    "type_of_complaint": "Drainage Issue",
    "date_of_filing": "12/04/23",
    "time_of_filing": "14:00",
    "resident_id": 6,
    "status_info_id": 0
}
*/

// BARANGAY RESPONSE TO A COMPLAINT
// link - http://localhost:5000/response
app.post("/response", async (req, res) => {
    try {
        const { message_gov, complaints_id  } = req.body
        const response = await pool.query(
            `INSERT INTO Responses (message_gov, complaints_id) VALUES($1, $2) RETURNING * `, 
            [message_gov, complaints_id])

            res.json(response.rows)
    } catch (err) {
        console.error(err.message)
    }
});

// DISPLAY ALL complaints
// link - http://localhost:5000/allcomplaints
app.get("/allcomplaints", async (req, res) => {
    try {
        const  allComplaints = await  pool.query('SELECT * FROM Complaints');
        res.json(allComplaints.rows)
    } catch (error) {
        console.error(err.message)
    }
});

// DISPLAY ALL residents info 
// (run on browser: http://localhost:5000/allresidents)
app.get("/allresidents", async (req, res) => {
     try {
 	    const  allResidents = await  pool.query('SELECT * FROM Residents');
 	    res.json(allResidents.rows)
     } catch (error) {
 	    console.error(err.message)
     }
});

// DISPLAY Personal info with their complaints
// link - http://localhost:5000/allresidentscomp
app.get("/allresidentscomp", async (req, res) => {
    try {
        const  allResidentscomp = await  pool.query(
            'SELECT residents.resident_id, first_name, middle_init, last_name, subdivision_address, house_street_address, complaints.complaints_id, message_comp, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing FROM Residents INNER JOIN complaints ON residents.resident_id = complaints.resident_id');
        res.json(allResidentscomp.rows)
    } catch (error) {
        console.error(err.message)
    }
});

// DISPLAY Complaints that are In Progress OR Completed status 
// link - http://localhost:5000/allComplaints/status/1 or change last integer to other PK
app.get("/allComplaintstat/:status_info_id", async (req, res) => {
    try {
        const { status_info_id } = req.params
        const  allComplaintstat = await  pool.query(
            'SELECT * FROM Complaints INNER JOIN residents ON residents.resident_id = complaints.resident_id INNER JOIN status_info ON complaints.status_info_id = status_info.status_info_id WHERE complaints.status_info_id = $1',
            [ status_info_id ])

            res.json(allComplaintstat.rows)
    } catch (error) {
        console.error(err.message)
    }
}); 

// DISPLAY a SPECIFIC resident personal info
// (run on browser: http://localhost:5000/allresidents/1 or change last integer to other PK)
app.get("/allresidents/:resident_id", async (req, res) => {
    try {
        const { resident_id } = req.params
        const allresidents = await pool.query("SELECT * FROM Residents WHERE resident_id = $1", 
        [resident_id])

        res.json(allresidents.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// UPDATE a status of a complaint 
// link - http://localhost:5000/updatecomp/1 or change last integer
app.put("/updatecomp/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { status_info_id } = req.body
        const updateStat = await pool.query(
            "UPDATE Complaints SET status_info_id = $1 WHERE complaints_id = $2", 
            [status_info_id, id]
            )
            res.json("Status was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

// DELETE a complaint 
// link - http://localhost:5000/complaint/1 or change last integer
app.delete("/complaint/:id", async (req, res) => {
    try {
        const {id} = req.params
        const deleteComp = await pool.query(
            "DELETE FROM Complaints WHERE complaints_id = $1", [
            id
        ])
        res.json("Complaint was deleted")
    } catch (err) {
        console.log(err.message)
    }
})


app.listen(5000,  ()  =>  { 
    console.log('App running on port 5000')  
})


