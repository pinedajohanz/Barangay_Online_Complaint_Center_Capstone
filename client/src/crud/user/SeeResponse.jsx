import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SidebarRes from "../../components/SidebarRes";
import Viewbtn from "../Viewbtn"

function SeeResponse() {
  const [MyComplaints, setMyComplaints] = useState([]);
  // retrieve resident_id from browser local storage
  const resident_id = localStorage.getItem('user.resident_id')
  // retrieve user token from local storage
  const token = localStorage.getItem('user.token') 
  
  // GET the personal resident complaints to display
  async function getMyComplaints() {
    const res = await fetch(`http://localhost:5000/myComplaints/${resident_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
      body: JSON.stringify()
  });
    const MyComplaintsArray = await res.json();
    
    // converts date format to MM/DD/YYYY
    MyComplaintsArray.forEach(complaints => {
      complaints.date_res = (new Date(complaints.date_res)).toLocaleDateString()
    }); 
    
    // data transfer from array to setState then map it at table
    setMyComplaints(MyComplaintsArray);
    
  }
  //  called after the component renders, if the [depend] have not changed, the effect will not run again.
  useEffect(() => {
    getMyComplaints();
  }, []);

  return (
    <>
    <div className='main'>
      <div className='container-sidebaronly'>
      <SidebarRes />
      </div>
      <div className="container text-bg-light my-5 mx-5">
      <div className="h4 pb-2 mb-4 my-3 mx-3 text-success border-bottom border-success">
          See My Complaints
      </div>
          <table className="table table-hover">
              <thead className='table-success'>
                  <tr>
                  <th className="text-center" scope="col">Complaint ID#</th>
                  <th className="text-center" scope="col">Complaint Message</th>
                  <th className="text-center" scope="col">Status</th>
                  <th className="text-center" scope="col">View Response</th>
                  </tr>
              </thead>
              <tbody>
              {/* maps over an array to display each item in a row from state */}
              {MyComplaints.map(Complaints => (
                    <tr key={Complaints.MyComplaints}>
                      <td className="text-center" >{Complaints.complaints_id}</td>
                      <td className="text-center fw-semibold" >{Complaints.message_comp}</td>
                      <td className="text-center fw-bold" >{Complaints.status_msg}</td>
                      {/* View button  */}
                      <td>
                        <Viewbtn 
                        Complaint={Complaints.complaints_id} 
                        />
                      </td>
                    </tr>
                  ))
                  }
              </tbody>
          </table>
      </div>
    </div>
    </>
  )
}

export default SeeResponse