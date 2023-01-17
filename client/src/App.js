import React, { useState } from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import {LogIn} from './components/LogIn'
import {SignUp} from './components/SignUp'
import {NavbarBootstrap} from './components/Navbarbs'
import Home from './pages/Home'
import ContactUsPage from './pages/ContactUsPage'
import AboutPage from './pages/AboutPage'

// return - same as render (nirerender sa screen ni user)
function App() {
  // const [currentForm, setCurrentForm] = useState('login')

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName)
  // }

  return (
    <>
    
    {/* { <div className="App">
      {
        currentForm === 'login' ? <LogIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
      
    </div> } */}
    <Home />
    </>
  );
}

export default App;
