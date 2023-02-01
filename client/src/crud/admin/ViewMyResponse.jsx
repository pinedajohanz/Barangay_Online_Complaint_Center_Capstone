import "../../dashboard/Dashboard.css"
import SideBarAdmin from "../../components/SideBarAdmin";


export default function ViewMyResponse() {
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
                  <th className="text-center" scope="col">Type of Complaint</th>
                  <th className="text-center" scope="col">Date & Time</th>
                  <th className="text-center" scope="col">Name  </th>
                  <th className="text-center" scope="col">Status</th>
                  <th className="text-center" scope="col">View My Responses</th>
                  </tr>
              </thead>
              <tbody>
              {/* maps over an array to display each item in a row from state */}
              {/* {MyComplaints.map(Complaints => ( */}
                    <tr>
                      <td className="text-center" >ID</td>
                      <td className="text-center fw-semibold" > Type </td>
                      <td className="text-center fw-bold" >Date</td>
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
