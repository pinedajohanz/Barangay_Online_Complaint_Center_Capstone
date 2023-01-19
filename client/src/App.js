import React, { useState } from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home'


// return - same as render (nirerender sa screen ni user)
function App() {
  // const [currentForm, setCurrentForm] = useState('login')

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName)
  // }

  return (
    <>
    
    <Home />
    </>
  );
}

export default App;
