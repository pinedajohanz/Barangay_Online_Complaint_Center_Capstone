import React from 'react'
import { ToastContainer, toast, Flip } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpSuccess() {
        toast.success(<h4>Account Created! Redirecting to Log In page </h4>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition:{Flip}
            })
    

  return (
    <>
    <ToastContainer
    // position="top-right"
    // autoClose={5000}
    // hideProgressBar={false}
    // newestOnTop={false}
    // closeOnClick
    // rtl={false}
    // pauseOnFocusLoss
    // draggable
    // pauseOnHover
    // theme="colored" 
    // transition={Flip}
    />
    
    
    </>
  )
}
