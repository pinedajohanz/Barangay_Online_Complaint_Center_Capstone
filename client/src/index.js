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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   }
//   // {
//   //     path: "About",
//   //     element: <AboutPage />,
//   // },
//   // {
//   //     path: "ContactUs",
//   //     element: <ContactUsPage />,
//   // },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
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
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
