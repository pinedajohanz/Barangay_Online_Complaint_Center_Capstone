import React, { useState } from "react"
import { Link } from "react-router-dom";
import {NavbarBootstrap} from "./Navbarbs";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const SignUp = (props) => {
    const [firstName, setfirstName] = useState('')
    const [middleinit, setmiddleinit] = useState('')
    const [lastName, setlastName] = useState('')
    const [Bday, setBday] = useState('')
    const [Subdivision, setSubdivision] = useState('')
    const [Street, setStreet] = useState('')
    const [ContactNum, setContactNum] = useState('')
    const [Email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [successMessage, setSuccessMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/residents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, middleinit, lastName, Bday, Subdivision, Street, ContactNum, Email, username, password }),
        });
        const data = await response.json();
        if (data.success) {
            setSuccessMessage(data.message);
        } else {
            console.log(data.error);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'firstName') {
            setfirstName(e.target.value);
        } else if (e.target.name === 'middleinit') {
            setmiddleinit(e.target.value);
        } else if (e.target.name === 'lastName') {
            setlastName(e.target.value);
        } else if (e.target.name === 'Bday') {
            setBday(e.target.value);
        } else if (e.target.name === 'Subdivision') {
            setSubdivision(e.target.value);
        } else if (e.target.name === 'Street') {
            setStreet(e.target.value);
        } else if (e.target.name === 'ContactNum') {
            setContactNum(e.target.value);
        } else if (e.target.name === 'Email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    };
    
    

    return (
        <> 
        <NavbarBootstrap />
        <div className="form-box d-flex mx-auto my-5">
            <Form>
            <h2>Sign Up</h2>
                <Form.Group className="mb-3" controlId="formFirstname">
                    <Form.Label column sm={2}>First name</Form.Label>
                            <Form.Control value={firstName} onChange={handleChange} type="text" placeholder="Johanz" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMiddleinit">
                    <Form.Label column sm={2}>Middle initial</Form.Label>
                            <Form.Control value={middleinit} onChange={handleChange} type="text" placeholder="B." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastname">
                    <Form.Label column sm={2}>Last name</Form.Label>
                            <Form.Control value={lastName} onChange={handleChange} type="text" placeholder="Pineda" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBday">
                    <Form.Label column sm={2}>Birthday</Form.Label>
                            <Form.Control value={Bday} onChange={handleChange} type="date" placeholder="11/03/1996" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSubdivision">
                    <Form.Label column sm={2}>Subdivision</Form.Label>
                            <Form.Control value={Subdivision} onChange={handleChange} type="text" placeholder="Westlake Subdivision" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStreet">
                    <Form.Label column sm={2}>House Street</Form.Label>
                            <Form.Control value={Street} onChange={handleChange} type="text" placeholder="North Street" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContactnum">
                    <Form.Label column sm={2}>Contact Number</Form.Label>
                            <Form.Control value={ContactNum} onChange={handleChange} type="number" placeholder="09975113834" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label column sm={2}>Email</Form.Label>
                            <Form.Control value={Email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label column sm={2}>Username</Form.Label>
                            <Form.Control value={username} onChange={handleChange} type="username" placeholder="Jiheon23" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label column sm={2}>Password</Form.Label>
                            <Form.Control value={password} onChange={handleChange} type="password" placeholder="***********" />
                </Form.Group>
                <Button className="btn btn-primary" variant="primary" type="submit">
                    Submit
                </Button>
                <Link to="/login">
                    <button className="btn btn-success my-3">
                        Don't have an account yet? Sign Up here!
                    </button>
                </Link>
            </Form>
            
            
            {/* <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="firstname">First name: </label>
                <input value={firstName} onChange={(e) => setfirstName(e.target.value)} type="text" placeholder="Johanz" id="firstname" name="firstname"/>
                <label htmlFor="middleinit">Middle initial: </label>
                <input value={middleinit} onChange={(e) => setmiddleinit(e.target.value)} type="text" placeholder="B" id="middleinit" name="middleinit"/>
                <label htmlFor="lastname">Last name: </label>
                <input value={lastName} onChange={(e) => setlastName(e.target.value)} type="text" placeholder="Pineda" id="lastname" name="lastname"/>
                <label htmlFor="birthday">Birthday: </label>
                <input value={Bday} onChange={(e) => setBday(e.target.value)} type="date" placeholder="MM/DD/YY" id="birthday" name="birthday"/>
                <label htmlFor="subdivision">Subdivision: </label>
                <input value={Subdivision} onChange={(e) => setSubdivision(e.target.value)} type="text" placeholder="Woodlane Subdivision" id="subdivision" name="subdivision"/>
                <label htmlFor="house_street">House street: </label>
                <input value={Street} onChange={(e) => setStreet(e.target.value)} type="text" placeholder="house_street" id="house_street" name="house_street"/>
                <label htmlFor="contactnum">Contact number: </label>
                <input value={ContactNum} onChange={(e) => setContactNum(e.target.value)} type="number" placeholder="09876543210" id="contactnum" name="contactnum"/>
                <label htmlFor="email">Email: </label>
                <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor="username">Username: </label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Jiheon29" id="username" name="username"/>
                <label htmlFor="password">Password: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password"/>
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </form> */}
            

        

        </div>
        </>
    )
}