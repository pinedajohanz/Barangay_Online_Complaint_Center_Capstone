import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SideBarAdmin from "../../components/SideBarAdmin";
import Respondbtn from '../Respondbtn';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function ResToComp() {
  const [AllComp, setAllComp] = useState([]);

  const [ids] = AllComp.map(complaints => complaints.complaints_id) // retrieves only 1 ID

  const [status_info] = AllComp.map(complaints => complaints.status_msg)

  //const [complaints_id, message_comp, ...] = AllComp;
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false});

  //not working sort by ID
  const SortbyID = () => {
   setSorted({ sorted: "id", reversed: !sorted.reversed})
     const idsCopy = [...ids];
     idsCopy.sort((idsA, idsB ) => {
       if (sorted.reversed) {
         return idsA.id - idsB.id
       }
       return idsB.id - idsA.id
     });
     setAllComp(idsCopy)
   }

   //working ang status sort but once lang nagana
   const SortbyStatus = () => {
    setSorted({ sorted: "status", reversed: !sorted.reversed});
    const AllCompCopy = [...AllComp];
     AllCompCopy.sort((AllCompA, AllCompB ) => { 
       const status_infoA = `${AllCompA.status_msg}`;
       const status_infoB = `${AllCompB.status_msg}`;

       if (sorted.reversed) {
        status_infoB.localeCompare(status_infoA);
       }
       return status_infoA.localeCompare(status_infoB);
     });
     setAllComp(AllCompCopy)
  }


  // re-use function (DISPLAY ALL COMPLAINTS) for See Responses to Complaints section (ADMIN)
  // GET all Complaints from Residents
  async function getAllComp() {
    const res = await fetch("http://localhost:5000/allcomplaints");

    // JSON data stored in array variable
    const AllCompArray = await res.json();
    
    // converts date format to MM/DD/YYYY
    AllCompArray.forEach(complaints => {
      complaints.date_time = (new Date(complaints.date_time)).toLocaleString()
    }); 

    // data transfer from array to setState then map it at table
    setAllComp(AllCompArray);
  }

  // called after the component renders, if the [depend] have not changed, the effect will not run again.
  useEffect(() => {
    getAllComp();
  }, []);

  // const columns = [
  //   { 

  //     field: 'respond',
  //     header: 'Respond',
  //     body: (AllComp) => <Respondbtn Complaints={AllComp} />
  //   }
  // ]

    
  return (
    <>
    <div className='main'>
      <SideBarAdmin />
      <div className="container-table m-5 text-bg-light">
      <div className="h4 pb-2 mb-4 my-3 mx-3 text-success border-bottom border-success">
        Respond to Complaints
      </div>
          <table className="table table-hover">
              <thead className='table-success'>
                  <tr>
                  <th scope="col" onClick={SortbyID}>Complaint ID#</th>
                  <th scope="col">Message from Complainant</th>
                  <th scope="col">Location of Complaint</th>
                  <th scope="col">Type of Complaint</th>
                  <th scope="col">Date & Time</th>
                  {/* <th scope="col">Time(1 COLUMN NALANG)MERGE DATETIME COLUMN</th> */}
                  <th scope="col">Resident Name firstname plus lastname</th>
                  <th scope="col" onClick={SortbyStatus}>Status</th>
                  {/* <th scope="col">0 = IN-PROGRESS / 1 = COMPLETED</th> */}
                  <th scope="col">Respond to Complaint</th>

                  </tr>
              </thead>
              <tbody>
              {/* maps over an array to display each item in a row from state */}
              {AllComp.map( Complaints => (
                    <tr key={Complaints.complaints_id}>
                      <td>{Complaints.complaints_id}</td>
                      <td className="fw-semibold">{Complaints.message_comp}</td>
                      <td>{Complaints.location_of_complaint}</td>
                      <td className="fw-semibold">{Complaints.type_of_complaint}</td>
                      <td>{Complaints.date_time}</td>
                      {/* <td>{Complaints.date_time}</td> */}
                      <td>{Complaints.resident_id}</td>
                      <td className="fw-bolder">{Complaints.status_msg}</td>
                      {/* <td>{Complaints.status_info_id}</td> */}
                      <td>
                        
                        <Respondbtn Complaints={Complaints} />
                        
                      </td>
                  </tr>
              )
              )
              }
              </tbody>
          </table>
      </div>
    </div>
    </>
  )
}

export default ResToComp