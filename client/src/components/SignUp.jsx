import React, { useState } from "react"
import { Link } from "react-router-dom";
import {NavbarBootstrap} from "./Navbarbs";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

export const SignUp = ( {setAuth} ) => {
    // setFormData assigns a value from input of user
    const [formData, setFormData] = useState({
        first_name: "",
        middle_init: "",
        last_name: "",
        birthday: "",
        subdivision_address: "",
        house_street_address: "",
        contact_number: "",
        email_address: "",
        username: "",
        password: ""
    })

    //setting the inputs
    const onChange = (e) => {    //username     : testusername   
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        
        try {
            //fetch api for POST method
            axios.post("http://localhost:5000/signup", formData
            )
            // // response from server is stored in 'res'
            .then(res => {
                // if we got a 200 status it will redirect to Log In page
                if(res.status === 200){
                    window.location = '/login'    
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    };

    return (
        <> 
        <NavbarBootstrap />
        <div className="form-box d-flex mx-auto my-5 align-items-center justify-content-center shadow-lg">
            <Form onSubmit={onSubmitForm} className="needs-validation">
            <h2 className="text-center">Sign Up</h2>
                <Form.Group className="mb-3 was-validated" controlId="formfirst_name">
                    <Form.Label column sm>First name</Form.Label>
                            <Form.Control name="first_name" value={formData.first_name} onChange={onChange} type="text" placeholder="Johanz" required />
                            <div className="invalid-feedback"> Please Enter your first name </div>
                </Form.Group>
                <Form.Group className="mb-3 was-validated" controlId="formMiddle_init">
                    <Form.Label column sm>Middle initial</Form.Label>
                            <Form.Control name="middle_init" value={formData.middle_init} onChange={onChange} type="text" placeholder="B." required />
                            <div className="invalid-feedback"> Please Enter your middle initial </div>
                </Form.Group>
                <Form.Group className="mb-3 was-validated" controlId="formlast_name">
                    <Form.Label column sm>Last name</Form.Label>
                            <Form.Control name="last_name" value={formData.last_name} onChange={onChange} type="text" placeholder="Pineda" required/>
                            <div className="invalid-feedback"> Please Enter your last name </div>
                </Form.Group>
                <Form.Group className="mb-3 was-validated" controlId="formbirthday">
                    <Form.Label column sm={2}>Birthday</Form.Label>
                            <Form.Control name="birthday" value={formData.birthday} onChange={onChange} type="date" placeholder="DD/MM/YYYY" required />
                            <div className="invalid-feedback"> Please Enter your Birthday </div>
                </Form.Group>
                <Form.Group className="mb-3 was-validated" controlId="formsubdivision_address">
                    <Form.Label column sm={2}>Subdivision</Form.Label>
                            <Form.Control name="subdivision_address" value={formData.subdivision_address} onChange={onChange} type="text" placeholder="Westlake subdivision" required/>
                            <div className="invalid-feedback"> Please Enter your Subdivision </div>
                </Form.Group>
                <Form.Group className="mb-3 was-validated" controlId="formhouse_street_address">
                    <Form.Label column sm>House Street</Form.Label>
                            <Form.Control name="house_street_address" value={formData.house_street_address} onChange={onChange} type="text" placeholder="North street" required/>
                            <div className="invalid-feedback"> Please Enter your House street </div>
                </Form.Group>
                <Form.Group className="mb-3 was-validated" controlId="formcontact_number">
                    <Form.Label column sm>Contact Number</Form.Label>
                            <Form.Control name="contact_number" value={formData.contact_number} onChange={onChange} type="number" placeholder="09975113834" required/>
                            <div className="invalid-feedback"> Please Enter your contact number </div>
                </Form.Group>
                <Form.Group className="mb-3 was-validated" controlId="formemail_address">
                    <Form.Label column sm={2}>Email</Form.Label>
                            <Form.Control name="email_address" value={formData.email_address} onChange={onChange} type="email_address" placeholder="youremail@gmail.com" required/>
                            <div className="invalid-feedback"> Please Enter your Email </div>
                </Form.Group>
                <Form.Group className="mb-3 was-validated" controlId="formUsername">
                    <Form.Label column sm={2}>Username</Form.Label>
                            <Form.Control name="username" value={formData.username} onChange={onChange} type="username" placeholder="(ex. Johanz23)" required/>
                            <div className="invalid-feedback"> Please Enter your username </div>
                </Form.Group>
                <Form.Group className="mb-3 was-validated" controlId="formPassword">
                    <Form.Label column sm={2}>Password</Form.Label>
                            <Form.Control name="password" value={formData.password} onChange={onChange} type="password" placeholder="***********" required/>
                            <div className="invalid-feedback"> Please Enter your password </div>
                </Form.Group>
                <Button className="btn btn-primary block w-100" variant="primary" type="submit">
                    Submit
                </Button>
                {/* redirect to Log In page */}
                <Link to="/login">
                    <button className="btn btn-success my-3 block w-100">
                       Already have an account? Log in here!
                    </button>
                </Link>
            </Form>

        </div>
        </>
    )
}



            {/* <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="first_name">First name: </label>
                <input value={first_name} onChange={(e) => setfirst_name(e.target.value)} type="text" placeholder="Johanz" id="first_name" name="first_name"/>
                <label htmlFor="middle_init">Middle initial: </label>
                <input value={middle_init} onChange={(e) => setmiddle_init(e.target.value)} type="text" placeholder="B" id="middle_init" name="middle_init"/>
                <label htmlFor="last_name">Last name: </label>
                <input value={last_name} onChange={(e) => setlast_name(e.target.value)} type="text" placeholder="Pineda" id="last_name" name="last_name"/>
                <label htmlFor="birthday">Birthday: </label>
                <input value={birthday} onChange={(e) => setbirthday(e.target.value)} type="date" placeholder="MM/DD/YY" id="birthday" name="birthday"/>
                <label htmlFor="subdivision_address">subdivision_address: </label>
                <input value={subdivision_address} onChange={(e) => setsubdivision_address(e.target.value)} type="text" placeholder="Woodlane subdivision_address" id="subdivision_address" name="subdivision_address"/>
                <label htmlFor="house_house_street_address">House house_street_address: </label>
                <input value={house_street_address} onChange={(e) => sethouse_street_address(e.target.value)} type="text" placeholder="house_house_street_address" id="house_house_street_address" name="house_house_street_address"/>
                <label htmlFor="contact_number">Contact number: </label>
                <input value={contact_number} onChange={(e) => setcontact_number(e.target.value)} type="number" placeholder="09876543210" id="contact_number" name="contact_number"/>
                <label htmlFor="email_address">email_address: </label>
                <input value={email_address} onChange={(e) => setemail_address(e.target.value)} type="email_address" placeholder="youremail_address@gmail.com" id="email_address" name="email_address"/>
                <label htmlFor="username">Username: </label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Jiheon29" id="username" name="username"/>
                <label htmlFor="password">Password: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password"/>
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </form> */}

            // UNDER SIGN UP FUNCTION 
                // const [first_name, setfirst_name] = useState('')
    // const [middle_init, setmiddle_init] = useState('')
    // const [last_name, setlast_name] = useState('')
    // const [birthday, setbirthday] = useState('')
    // const [subdivision_address, setsubdivision_address] = useState('')
    // const [house_street_address, sethouse_street_address] = useState('')
    // const [contact_number, setcontact_number] = useState('')
    // const [email_address, setemail_address] = useState('')
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

            // UNDER ONSUBMITFORM FUNCTION
            // const response = await fetch('http://localhost:5000/signup', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ first_name, middle_init, last_name, birthday, subdivision_address, house_street_address, contact_number, email_address, username, password }),
        // });
        // const data = await response.json();
        // console.log(data)
        // if (data.success) {
        //     window.location= '/login';
        // } else {
        //     console.log(data.error);
        // }
    
            // OUTSIDE NG ONSUBMITFORM FUNCTION
    // const handleChange = (e) => {
    //     if (e.target.name === 'first_name') {
    //         setfirst_name(e.target.value);
    //     } else if (e.target.name === 'middle_init') {
    //         setmiddle_init(e.target.value);
    //     } else if (e.target.name === 'last_name') {
    //         setlast_name(e.target.value);
    //     } else if (e.target.name === 'birthday') {
    //         setbirthday(e.target.value);
    //     } else if (e.target.name === 'subdivision_address') {
    //         setsubdivision_address(e.target.value);
    //     } else if (e.target.name === 'house_street_address') {
    //         sethouse_street_address(e.target.value);
    //     } else if (e.target.name === 'contact_number') {
    //         setcontact_number(e.target.value);
    //     } else if (e.target.name === 'email_address') {
    //         setemail_address(e.target.value);
    //     } else if (e.target.name === 'username') {
    //         setUsername(e.target.value);
    //     } else if (e.target.name === 'password') {
    //         setPassword(e.target.value);
    //     }
    // };