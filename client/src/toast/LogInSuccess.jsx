import React from 'react'
import { ToastContainer, toast, Flip } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

export default function LogInSuccess() {

    const showToast = () => {
        toast.success(<h3>Log In Success </h3>)
    }
  return (
    <>
    <button onClick={showToast}>Show toast</button>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored" 
    transition={Flip}
    
    />
    
    
    </>
  )
}
