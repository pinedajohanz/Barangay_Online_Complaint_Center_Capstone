import "./Dashboard.css"
import SideBarAdmin from "../components/SideBarAdmin";
import React from 'react'

export default function AdminDash() {
  return (
    <>
        <div className="main">
          <SideBarAdmin />
            <div className="container-main">
            <div className="container text-bg-light my-5 mx-5">
      <div className="h4 pb-2 mb-4 my-3 mx-3 text-success border-bottom border-success">
          View My Responses to a Complaint
      </div>
          <table className="table table-hover">
              <thead className='table-success'>
                  <tr>
                  <th className="text-center" scope="col">Complaint ID#</th>
                  <th className="text-center" scope="col">Complaint Message</th>
                  <th className="text-center" scope="col">Resident name? firstname lastname</th>
                  <th className="text-center" scope="col">Status</th>
                  <th className="text-center" scope="col">View My Responses</th>
                  </tr>
              </thead>
              <tbody>
              {/* maps over an array to display each item in a row from state */}
              {/* {MyComplaints.map(Complaints => ( */}
                    <tr>
                      <td className="text-center" >1</td>
                      <td className="text-center fw-semibold" >MAY REKLAMO AKO Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, hic. Aliquid repellendus aperiam quidem odio voluptas? Dignissimos quod totam magni ullam quasi. Repudiandae pariatur eveniet cum facere aliquam soluta. Nobis.</td>
                      <td className="text-center fw-bold" >JOHANZ PINEDA</td>
                      <td className="text-center fw-bold" >COMPLETED</td>
                      <td> <button>View button modal then display responses to this complaint ID</button>
                        {/* <Viewbtn 
                        Complaint={Complaints.complaints_id} 
                        /> */}
                      </td>
                    </tr>
                  {/* ))
                  } */}
              </tbody>
          </table>
      </div>
            </div>
        </div>
    </>
  )  
}
