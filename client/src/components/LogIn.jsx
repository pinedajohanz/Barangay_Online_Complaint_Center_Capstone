import React from "react"
import { Link } from "react-router-dom";
import {NavbarBootstrap} from "./Navbarbs"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import axios from "axios";
import { Formik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast, Flip } from 'react-toastify'; 
import log_in_img from './image/log_in_img.svg'

export const LogIn = () => {
    // toastify notifications
    const notifyLogIn = () => {
        toast.success("Log in Credentials Accepted!")
    }
    const notifyResidentPage = () => {
        toast.info("Redirecting to Resident Page")
    }
    const notifyAdminPage = () => {
        toast.info("Redirecting to Admin Page")
    }
    const notifyError = () => {
        toast.error("Invalid Credentials")
    }

    // validation schema YUP
    const validationSchema = yup.object().shape({
        username: yup.string().min(4, "Minimum of 4 characters").max(20, "Maximum of 20 characters").required("Username is required"),
        password: yup.string().min(5, "Password must be at least 5 characters").max(25, "Maximum of 25 characters").required("Password is required")
      });
    
    // onSubmit form function for Log In authentication
    const onSubmitForm = async (values, { setSubmitting, setErrors }) => {
        
    try {
        //fetch api for POST method
        // after it fetch the data from API, data is stored in 'formData' 
        const res = await axios.post("http://localhost:5000/login", values)
        
        // response from server is stored in 'res'
            if(res.status === 200){
            // data within that response is stored in the variable "data"
            const data = res.data
            // resident_id will be stored in local storage browser
            localStorage.setItem('user.resident_id', data.resident_id);
            localStorage.setItem('user.token', data.token);
            // checks if the username is 'admin' then redirects to admin dashboard if true
            switch(data.username) {
                case 'admin':
                    notifyLogIn()
                    notifyAdminPage()
                    setTimeout(() => {
                        window.location = '/ViewMyResponse'
                    }, 2500); // delay of 2.5 seconds
                    break 
                default:
                    notifyLogIn()
                    notifyResidentPage()
                    setTimeout(() => {
                        window.location = '/MyProfile'
                    }, 2500); // delay of 2.5 seconds
                    break 
            } 
        } else {
            notifyError()
            setErrors({ server: 'Something went wrong, please try again later.' });
        }
        } catch (error) {
            notifyError()
            setErrors({ server: error.message });
        } finally {
        setSubmitting(false);
        }
    }

    return (
        <> 
        <NavbarBootstrap />
        <div className="container-out m-4 p-5">
            <div className="row d-sm-flex">
            <div className="col-md-6 container-login-img m-auto">
            <img className="img-fluid w-100 d-sm-block py-3 m-auto"
                    src={log_in_img}
                    alt="img"
                    style={{height:450, width:300}}
                    />
            </div>
            <div className="col-md-6 form-box d-flex p-4 m-auto justify-content-center shadow-lg">
            <Formik 
            // validationSchema - describes the validation requirements for each field
            validationSchema={validationSchema}
            initialValues={{ 
                username: '', 
                password: '' 
            }} 
            onSubmit={onSubmitForm}
            >   
                {({  isSubmitting, handleSubmit, handleChange, values, touched, errors  }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <h2 className="text-center">Log In</h2>
                    <hr />
                    <Form.Group className="mb-3 " controlId="formUsername">
                                <Form.Label column sm={2}>Username</Form.Label>
                                <InputGroup hasValidation>
                                        <Form.Control 
                                        name="username" 
                                        value={values.username} 
                                        onChange={handleChange} 
                                        // if set to true will display error message in form control
                                        isInvalid={!!errors.username}
                                        // touched - indicates whether a field has been touched by the user
                                        // errors - contains any validation errors for the field
                                        isValid={touched.username && !errors.username}
                                        type="username" 
                                        placeholder="(e.g. Johanz23)" 
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
                                        // if set to true will display error message in form control
                                        isInvalid={!!errors.password}
                                        // touched - indicates whether a field has been touched by the user
                                        // errors - contains any validation errors for the field
                                        isValid={touched.password && !errors.password}
                                        type="password" 
                                        placeholder="***********" 
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                            </Form.Group>
                    <Button className="block w-100" variant="primary" type="submit" disabled={isSubmitting}>
                        Log in
                    </Button>
                    {/* redirect to Sign Up page */}
                    <hr />
                    <Link to="/signup">
                        <button className="btn btn-info my-1 block w-100"> 
                        Don't have an account yet? Sign Up here!
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
            </div>
        </div>
        </>
    )
}


// const [state, setState] = useState('initial/default value')
    // useState('initial value')
    // setState <- this update the state
    // const [formData, setFormData] = useState({
    //     username: "",
    //     password: ""
    // })
    
     //setting the inputs
    // const onChange = (e) => {    //username     : testusername   
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }


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