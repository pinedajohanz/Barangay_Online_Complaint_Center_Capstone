import React, { useState } from "react"
import { Link } from "react-router-dom";
import {NavbarBootstrap} from "./Navbarbs";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import axios from "axios";
import * as yup from 'yup';
import { Formik } from 'formik';
import { ToastContainer, toast, Flip } from 'react-toastify'; 

export const SignUp = ( {setAuth} ) => {

    const notifyCreate = () => {
        toast.success("Account Created!")
    }
    const notifyRedirect = () => {
        toast.info("Redirecting to Log In Page")
    }

    const notifyError = () => {
        toast.danger("Something went wrong")
    }
    // setFormData assigns a value from input of user
    // const [formData, setFormData] = useState({
    //     first_name: "",
    //     middle_init: "",
    //     last_name: "",
    //     birthday: "",
    //     subdivision_address: "",
    //     house_street_address: "",
    //     contact_number: "",
    //     email_address: "",
    //     username: "",
    //     password: ""
    // })

    const schema = yup.object().shape({
        first_name: yup.string().min(2, "Minimum of 2 characters").max(20, "Maximum of 20 characters").required("First name is required"),
        middle_init: yup.string().max(2, "Maximum of 2 characters").required("Middle initial is required"),
        last_name: yup.string().min(2, "Minimum of 2 characters").max(20, "Maximum of 20 characters").required("Last name is required"),
        birthday: yup.date().required("Birthday is required"),
        subdivision_address: yup.string().required("Subdivision is required"),
        house_street_address: yup.string().required("House street is required"),
        contact_number: yup.string().matches(/^\d{10}$/, 'Contact number must be 11 digits').required("Contact number is required"),
        email_address: yup.string().email("Invalid email address").required("Email is required"),
        username: yup.string().min(4, "Minimum of 4 characters").max(20, "Maximum of 20 characters").required("Username is required"),
        password: yup.string().min(5, "Password must be at least 5 characters").max(25, "Maximum of 25 characters").required("Password is required")
    })

    
    //setting the inputs
    // const onChange = (e) => {    //username     : testusername   
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }

    const handleSubmitForm = async (values, { setSubmitting, setErrors }) => {
        try {
            // e.preventDefault()
            //fetch api for POST method
            const res = await axios.post("http://localhost:5000/signup", values)
            // // response from server is stored in 'res'
            // .then(res => {
                // if we got a 200 status it will redirect to Log In page
                if(res.status === 200){
                    notifyCreate()
                    notifyRedirect()
                    setTimeout(() => {
                        window.location = '/login'
                    }, 2000); // delay of 2 seconds
            } else {
                notifyError()
                setErrors({ server: 'Something went wrong, please try again later.' });
            }
            
        } catch (error) {
            setErrors({ server: error.message });
        } finally {
        setSubmitting(false);
        }
    };

    return (
        <> 
        <NavbarBootstrap />
        <div className="form-box d-flex mx-auto my-5 align-items-center justify-content-center shadow-lg">
            <Formik
            validationSchema={schema}
            initialValues={{
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
            }}
            onSubmit={handleSubmitForm}
            >
                {({ isSubmitting, handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit} >
                    <h2 className="text-center">Sign Up</h2>
                    <hr />
                        <Form.Group className="mb-3" controlId="formfirst_name">
                            <Form.Label column sm>First name</Form.Label>
                                    <Form.Control 
                                    name="first_name" 
                                    value={values.first_name} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.first_name}
                                    isValid={touched.first_name && !errors.first_name}
                                    type="text" 
                                    placeholder="Johanz Robert" 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.first_name}
                                    </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formMiddle_init">
                            <Form.Label column sm>Middle initial</Form.Label>
                                    <Form.Control 
                                    name="middle_init" 
                                    value={values.middle_init} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.middle_init}
                                    isValid={touched.middle_init && !errors.middle_init}
                                    type="text" 
                                    placeholder="B." 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.middle_init}
                                    </Form.Control.Feedback>
                                    
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formlast_name">
                            <Form.Label column sm>Last name</Form.Label>
                                    <Form.Control 
                                    name="last_name" 
                                    value={values.last_name} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.last_name}
                                    isValid={touched.last_name && !errors.last_name}
                                    type="text" 
                                    placeholder="Pineda" 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.last_name}
                                    </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formbirthday">
                            <Form.Label column sm={2}>Birthday</Form.Label>
                                    <Form.Control 
                                    name="birthday" 
                                    value={values.birthday} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.birthday}
                                    isValid={touched.birthday && !errors.birthday}
                                    type="date" 
                                    placeholder="DD/MM/YYYY"  
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.birthday}
                                    </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formsubdivision_address">
                            <Form.Label column sm={2}>Subdivision</Form.Label>
                                    <Form.Control 
                                    name="subdivision_address" 
                                    value={values.subdivision_address} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.subdivision_address}
                                    isValid={touched.subdivision_address && !errors.subdivision_address}
                                    type="text" 
                                    placeholder="Westlake subdivision" 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.subdivision_address}
                                    </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formhouse_street_address">
                            <Form.Label column sm>House Street</Form.Label>
                                    <Form.Control 
                                    name="house_street_address" 
                                    value={values.house_street_address} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.house_street_address}
                                    isValid={touched.house_street_address && !errors.house_street_address}
                                    type="text" 
                                    placeholder="North street"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.house_street_address}
                                    </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formcontact_number">
                            <Form.Label column sm>Contact Number</Form.Label>
                                    <Form.Control name="contact_number" 
                                    value={values.contact_number} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.contact_number}
                                    isValid={touched.contact_number && !errors.contact_number}
                                    type="number" 
                                    placeholder="09975113834" 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.contact_number}
                                    </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formemail_address">
                            <Form.Label column sm={2}>Email</Form.Label>
                                    <Form.Control 
                                    name="email_address" 
                                    value={values.email_address} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.email_address}
                                    isValid={touched.email_address && !errors.email_address}
                                    type="email_address" 
                                    placeholder="youremail@gmail.com" 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email_address}
                                    </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formUsername">
                            <Form.Label column sm={2}>Username</Form.Label>
                            <InputGroup hasValidation>
                                    <Form.Control 
                                    name="username" 
                                    value={values.username} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.username}
                                    isValid={touched.username && !errors.username}
                                    type="username" 
                                    placeholder="(ex. Johanz23)" 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                    {errors.username}
                                    </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label column sm={2}>Password</Form.Label>
                                    <Form.Control name="password" 
                                    value={values.password}
                                    onChange={handleChange} 
                                    isInvalid={!!errors.password}
                                    isValid={touched.password && !errors.password}
                                    type="password" 
                                    placeholder="***********" 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                        </Form.Group>
                        <Button className="btn btn-primary block w-100" variant="primary" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                        {/* redirect to Log In page */}
                        <hr />
                        <Link to="/login">
                            <button className="btn btn-info my-1 block w-100">
                               Already have an account? Log in here!
                            </button>
                        </Link>
                    </Form>
                )}
            
            </Formik>
            <ToastContainer
            position="top-right"
            autoClose={9000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" 
            transition={Flip}  />
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