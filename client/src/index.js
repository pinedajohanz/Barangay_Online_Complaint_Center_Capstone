import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './pages/AboutPage'
import ContactUsPage from './pages/ContactUsPage'
import Home from './pages/Home'
import {LogIn} from './components/LogIn'
import {SignUp} from './components/SignUp'
import UserDash from './dashboard/UserDash'
import AdminDash from './dashboard/AdminDash'
import SeeResPersoInfo from './crud/user/SeeResPersoInfo';
import FileComp from './crud/user/FileComp';
import SeeResponse from './crud/user/SeeResponse';
import ResToComp from './crud/admin/ResToComp';
import ViewAllRes from './crud/admin/ViewAllRes';
import UpdateDeleteStatus from './crud/admin/UpdateDeleteStatus';

//  Sets up several routes that map to different pages and components in the application.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        	  <Routes>
            	<Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactUsPage />} /> 

                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/UserDash" element={<UserDash />} />
                <Route path="/AdminDash" element={<AdminDash />} />

                {/* Routing for User Side */}
                <Route path="/SeeResPersoInfo" element={<SeeResPersoInfo />} />
                {/* <Route path="/SeeMyComp" element={<SeeMyComp />} /> */}
                <Route path="/FileComp" element={<FileComp />} />
                <Route path="/SeeResponse" element={<SeeResponse />} />
                
                {/* Routing for Admin Side */}
                <Route path="/ResToComp" element={<ResToComp />} />
                <Route path="/UpdateDeleteStatus" element={<UpdateDeleteStatus />} />
                <Route path="/ViewAllRes" element={<ViewAllRes />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
