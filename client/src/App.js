import React from "react"
import './App.css';
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css';

// return - same as render (nirerender sa screen ni user)
// renders the Home component in App function
function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
