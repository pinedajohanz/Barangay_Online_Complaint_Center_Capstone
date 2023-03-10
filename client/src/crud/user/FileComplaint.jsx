import React from 'react'
import "../../dashboard/Dashboard.css"
import SidebarRes from "../../components/SidebarRes";
import { useState } from 'react'
import e from 'cors';
import { ToastContainer, toast, Flip } from 'react-toastify'; 
import ClearIcon from '@mui/icons-material/Clear';

function FileComplaint() {
    // pop up notification if form submitted successfully
    const notify = () => {
        toast.success("Complaint Form Submitted!")
    }

    const notifyError = () => {
        toast.error("Form Error")
    }

    // function for clear form button
    const ResetForm = () => {
        setmessage_comp("");
        setlocation_of_complaint("");
        settype_of_complaint("");
    }

    // setting inputs by useState hook
    const [message_comp, setmessage_comp] = useState("");
    const [location_of_complaint, setlocation_of_complaint] = useState("");
    const [type_of_complaint, settype_of_complaint] = useState("");
    // const [date_of_filing, setdate_of_filing] = useState("");
    // const [time_of_filing, settime_of_filing] = useState("");
    // default value must be the resident_id who logged in the user dashboard
    // get resident_id from local storage browser
    const resident_id = localStorage.getItem('user.resident_id')

    // const [status_info_id, setstatus_info_id] = useState("0");

    // upon submit function
    const onSubmitForm = async (e) => {
        e.preventDefault();
        
        try {
            // store the data in the 'body'
            const body = { message_comp, location_of_complaint, type_of_complaint, resident_id }
            // retrieve the token from local storage
            const token = localStorage.getItem('user.token')
            // if there is no token redirect to log in page
            if (!token) {
                window.location.href = "/login";
                return;
              }

            const res = await fetch("http://localhost:5000/complaints", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
                body: JSON.stringify(body)
            });
            // pop up notification if form submitted
            notify()
            // reset form after submit
            ResetForm()
        
        console.log(res)
        } catch (err) {
            notifyError()
            console.error(err.message)
        }
    }
  return (
    <>
    <div className='main'>
    <SidebarRes />
    <div className="container text-bg-light my-5 mx-5">
        <form onSubmit={onSubmitForm} className="form my-4 mx-4">
        <h2 className="text-center my-5">File A Complaint Form</h2>
        <hr />
            <label className="fs-4">Complaint message:</label>
            <textarea className="form-control my-3" type="text" placeholder="Write your Complaint here...." value={message_comp} onChange={e => setmessage_comp(e.target.value)} required />
            <label className="fs-4">Location of Complaint:</label>
            <input className="form-control my-3" type="text" placeholder="(e.g. Mary Homes Subdivision)" value={location_of_complaint} onChange={e => setlocation_of_complaint(e.target.value)} required/>
            <label className="fs-4">Type of Complaint:</label>
            <input className="form-control my-3" type="text" placeholder="(Road Issue, Drainage Issue, Electrical Issue)" value={type_of_complaint} onChange={e => settype_of_complaint(e.target.value)} required />
            <label className="fs-5">User ID# <span className='fs-6 fw-light'>(AUTO GENERATED)</span></label>
            <input className="form-control my-3" type="number" placeholder="RESIDENT ID" value={resident_id} aria-label="Disabled input example" disabled />
            
            <div className=' gap-2'>
            <button className="col-9 btn btn-primary my-2 btn-lg" >Submit</button>
            <button className="col-3 btn btn-secondary my-2 btn-md" onClick={ResetForm} style={{padding:10, width:250, marginLeft:20}}>
                Clear Form
                </button>
            </div>
            
        </form>
    </div>
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
export default FileComplaint