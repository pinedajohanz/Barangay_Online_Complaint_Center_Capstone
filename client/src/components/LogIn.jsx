import React, { useState } from "react"
import { Link } from "react-router-dom";
import {NavbarBootstrap} from "./Navbarbs"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from "axios";

export const LogIn = ({ setAuth }) => {
    // const [state, setState] = useState('initial/default value')
    // useState('initial value')
    // setState <- this update the state
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    
     //setting the inputs
    const onChange = (e) => {    //username     : testusername   
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    // onSubmit form function for Log In authentication
    const onSubmitForm = async (e) => {
        e.preventDefault()
        
    try {
        //fetch api for POST method
        // after it fetch the data from API, data is stored in 'formData' 
        axios.post("http://localhost:5000/login", formData
        )
        
        // response from server is stored in 'res'
        .then(res => {
            // data within that response is stored in the variable "data"
            const data = res.data
            // resident_id will be stored in local storage browser
            localStorage.setItem('user.resident_id', data.resident_id);
            localStorage.setItem('user.token', data.token);
            // checks if the username is 'admin' then redirects to admin dashboard if true
            switch(data.username) {
                case 'admin':
                    window.location = '/AdminDash';
                     break;
                default:
                    window.location = '/SeeResPersoInfo'; // old path /UserDash
                    break; 
            }
        })

    } catch (error) {
        console.log(error.message)
        }
    }

    return (
        <> 
        <NavbarBootstrap />
        <div className="form-box d-flex mx-auto my-5 align-items-center justify-content-center shadow-lg">
        
            <Form onSubmit={onSubmitForm} className="needs-validation">
                <h2 className="text-center">Log In</h2>
                <Form.Group className="mb-2 was-validated" controlId="formUsername">
                    <Form.Label column sm={2}>Username</Form.Label>
                            <Form.Control name="username" value={formData.username} onChange={onChange} type="text" placeholder="Enter username here" required />
                            <div className="invalid-feedback"> Please Enter your username </div>
                </Form.Group>
                <Form.Group className="mb-2 was-validated" controlId="formPassword">
                    <Form.Label column sm={2}>Password</Form.Label>
                            <Form.Control name="password" value={formData.password} onChange={onChange} type="password" placeholder="***********" required />
                            <div className="invalid-feedback"> Please Enter your password </div>
                </Form.Group>
                <Button className="block w-100" variant="primary" type="submit" >
                    Log in
                </Button>
                {/* redirect to Sign Up page */}
                <Link to="/signup">
                    <button className="btn btn-success my-3 block w-100"> 
                    Don't have an account yet? Sign Up here!
                    </button>  
                </Link>
            </Form>
            
        </div>
        
        </>
    )
}

// if(res.username === 'admin'){
            //     window.location = '/AdminDash'
            // }
            // else {
            //     window.location = '/UserDash'
                         
            // }

// .then(res => {
        //     console.log(res)
        //     if(res.username !== 'admin' && res.status === 200){
        //         window.location = '/UserDash'
        //     }
        // }
        // )


        // after try {
            //making a body object from the values of username and password
            // const body = { username, password }

            // after .post
            // {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify( body )
        // }
        

        // after onchange old format
            //deconstructing the username and password variable from the inputs
            // const { username, password } = inputs

        // after .then old format
           //  const parseRes = await response.json();
        //  if (parseRes.token) {
        //      // if username = admin & password = admin, redirect to Admin dashboard (Insert in database admin credentials)
        //      // login successful, redirect to Resident dashboard 
        //      localStorage.setItem("token", parseRes.token)
        //      setAuth(true)
        //  } else {
        //      setAuth(false)
        //      console.log("Something wrong")
        // }


    // after catch error old format
  // const handleChange = (e) => {
    //     if (e.target.name === 'username') {
    //         setUsername(e.target.value);
    //     } else if (e.target.name === 'password') {
    //         setPassword(e.target.value);
    //     }
    // };



{/* <div className="auth-form-container">
            <h2>Log In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Jiheon" id="username" name="username"/>
                <label htmlFor="password">Password: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password"/>
                <button className="btn btn-primary" type="submit">Log In</button>
            </form>
            <button className="btn btn-light my-3" onClick={() => props.onFormSwitch('signup')}>Don't have an account yet? Sign Up here!</button>
        </div> */}