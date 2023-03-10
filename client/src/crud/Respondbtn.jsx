// import e from 'express';
import React, { useState } from 'react'
import { ToastContainer, toast, Flip } from 'react-toastify'; 
import ReplyIcon from '@mui/icons-material/Reply';

function Respondbtn({ Complaints }) {
    // toastify function
    const notify = () => {
        toast.success("Response Submitted!")
    }
    // retrieve user token from local storage
    const token = localStorage.getItem('user.token') 
    // stores the message to be submitted as a response
    const [message_gov, setmessage_gov] = useState("");
    const { complaints_id } = Complaints


    // reply function
    const reply = async (e) => {
        e.preventDefault();
        try {
            const body = {message_gov, complaints_id} 
            const res = await fetch("http://localhost:5000/response", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
                body: JSON.stringify(body)
            });
            // display notification that response is submitted
            notify()

        } catch (err) {
            console.error(err.message)
            toast.warn("Expired Token")
        }
    }

   
  return (
    <>
        {/* button of modal */}
        <div className='d-grid gap-2'>
        <button 
            type="button" 
            className="btn btn-success" 
            data-bs-toggle="modal" 
            data-bs-target={`#id${complaints_id}`}
            style={{width:80, marginLeft:10}}
        >
            <ReplyIcon />
            
        </button>
        </div>
        {/* id = "id22" */}
        {/* Header of inner modal */}
        <div className="modal fade" id={`id${complaints_id}`} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 
                    className="modal-title fs-5" 
                    id="ModalLabel"
                >
                    Respond to a Complaint
                </h1>
                <button 
                    type="button" 
                    className="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close"
                >
                </button>
            </div>
            {/* body of inner modal */}
            <div className="modal-body">
                {/* Message to be sent to a complaint */}
                <form onSubmit={reply} className="form my-1">
                <label>Type your message:</label>
                    <textarea className="form-control my-3" type="text" placeholder="Type here..." value={message_gov} onChange={e => setmessage_gov(e.target.value)} />
                {/* Edit: User na naka log in dapat naka-assign automatic sa resident ID below */}
                <label> ID# (AUTO GENERATED)</label>
                    <input className="form-control my-3" type="number" placeholder="Complaints ID" value={complaints_id} aria-label="Disabled input example" disabled />
                <div className='d-grid gap-2'>
                    <button className="btn btn-success my-3">Submit</button>
                </div>
                </form>
                
                
            </div>
            {/* footer of inner modal */}
            <div className="modal-footer">
            {/* button of inner modal */}
            
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
            
            </div>
            </div>
        </div>
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
    </>
  )
}

export default Respondbtn