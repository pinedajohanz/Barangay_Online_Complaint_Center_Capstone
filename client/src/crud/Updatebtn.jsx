import e from 'cors';
import React, { useState } from 'react'
import { ToastContainer, toast, Flip } from 'react-toastify'; 

function Updatebtn({ Complaints }) {
    // toastify function
    const notify = () => {
        toast.info("Status Updated!")
    }

    const token = localStorage.getItem('user.token') 

    // editNum function
    const editNum = async (id) => {
        try {
            // package the insert data in 'body'
            const body = {status_info_id}
            
            const res = await fetch(`http://localhost:5000/updatecomp/${id}`, {
                // put request to update it
                method: "PUT",
                // body of request is set as JSON
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
                // convert the JS object to a JSON string
                body: JSON.stringify(body)
            });
            //notification for update status
            notify()
            
            setTimeout(() => {
            window.location = "/UpdateDeleteStatus"}, 1500);
        } catch (err) {
            console.error(err.message)
        }
    }
    // useState(props.default value)
    const [status_info_id, setStatus_info_id] = useState(Complaints.status_info_id)

  return (
    <>
        
        <button 
            type="button" 
            className="btn btn-primary" 
            data-bs-toggle="modal" 
            // target complaint id row to update
            data-bs-target={`#id${Complaints.complaints_id}`}
        >
            Update
        </button>

        <div className="modal fade" id={`id${Complaints.complaints_id}`} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 
                    className="modal-title fs-5" 
                    id="ModalLabel"
                >
                    Update Status of Complaint
                </h1>
                <button 
                    type="button" 
                    className="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close"
                    onClick={() => setStatus_info_id(Complaints.status_info_id)}>
                </button>
            </div>
            <div className="modal-body">
                {/* updating the status via select a option in dropdown */}
                <p> Select: IN-PROGRESS  /  COMPLETED</p>
                <select 
                className="form-control" 
                value={status_info_id} 
                onChange={e => setStatus_info_id(e.target.value)} 
                > 
                   <option value="0">IN-PROGRESS</option>
                    <option value="1">COMPLETED</option>
                </select>
            </div>
            <div className="modal-footer">
                {/* button to execute edit status function */}
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => editNum(Complaints.complaints_id)}
            >
                Update
            </button>
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-dismiss="modal"
                    onClick={() => setStatus_info_id(Complaints.status_info_id)}
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

export default Updatebtn