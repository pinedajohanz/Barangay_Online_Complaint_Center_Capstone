import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SideBarAdmin from "../../components/SideBarAdmin";
import Respondbtn from '../Respondbtn';
import {FaArrowUp, FaArrowDown} from "react-icons/fa"

function ResponseToComplaint() {
  // setting the inputs
  const [AllComp, setAllComp] = useState([]);
  // updates the state of the application to reflect the desired sort order.
  const [sorted, setSorted] = useState({ sorted: "", reversed: false});
  // search box
  const [searchPhrase, setSearchPhrase] = useState("")
  // retrieve user token from local storage
  const token = localStorage.getItem('user.token') 
  
  // function for sorting by ID
  const SortbyID = () => {
   setSorted({ sorted: "id", reversed: !sorted.reversed})
     const idsCopy = [...AllComp];
     idsCopy.sort((idsA, idsB ) => {
       if (sorted.reversed) {
         return idsA.complaints_id - idsB.complaints_id
       }
       return idsB.complaints_id - idsA.complaints_id
     });
     setAllComp(idsCopy)
   }

   // function for sorting by Status
   const SortbyStatus = () => {
    setSorted({ sorted: "status", reversed: !sorted.reversed});
    // spread operator to retain the original array
    const AllCompCopy = [...AllComp];
    // .sort((parameter, parameter)) the parameter determines on sorting order
    AllCompCopy.sort((AllCompA, AllCompB ) => { 
      const status_infoA = `${AllCompA.status_msg}`;
      const status_infoB = `${AllCompB.status_msg}`;

      // order of the comparison depends on the value of the sorted.reversed property, which determines if the sort order should be ascending or descending.
      if (sorted.reversed) {
      // sorting is done by comparing the status_msg properties of two objects (positive# or negative#)
      return status_infoB.localeCompare(status_infoA);
      }
      return status_infoA.localeCompare(status_infoB);
    });
    setAllComp(AllCompCopy)
  }

  // GET all Complaints from Residents
  async function getAllComp() {

    // if there is no token redirect to log in page
    if (!token) {
      window.location.href = "/login";
      return;
    }

    const res = await fetch("http://localhost:5000/allcomplaints", {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
      body: JSON.stringify()
  });
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

  // arrow icon for sorting 
  const renderArrow = () => {
    if(sorted.reversed) {
      return <FaArrowUp />
    }
    return <FaArrowDown />
  }

  return (
    <>
    <div className='main'>
      <SideBarAdmin />
      <div className="container-table m-5 text-bg-light">
      <div className="h4 pb-2 mb-4 my-3 mx-3 text-success border-bottom border-success">
        Respond to Complaints
      </div>
      <div className="search-container">
        <input 
        type="text" 
        placeholder="Search" 
        onChange={event => {setSearchPhrase(event.target.value)}} 
        />
      </div> 
          <table className="table table-hover">
              <thead className='table-success'>
                  <tr>
                    <th scope="col" onClick={SortbyID}> <span style={{ marginRight:5 }}>Complaint ID# </span> {renderArrow()}</th>
                    <th scope="col">Message from Complainant</th>
                    <th scope="col">Location of Complaint</th>
                    <th scope="col">Type of Complaint</th>
                    <th scope="col">Date & Time</th>
                    <th scope="col"> Name </th>
                    <th scope="col" onClick={SortbyStatus}> <span style={{ marginRight:10 }}> Status </span> {renderArrow()}</th>
                    <th scope="col">Respond to Complaint</th>
                  </tr>
              </thead>
              <tbody>
              {/* maps over an array to display each item in a row from state */}
              {AllComp.filter((Complaints)=> {
              // if search bar is empty then display all complaints
              if (searchPhrase == "") {
                return Complaints
              // filter Complaints based on input of user 
              } else if (`${Complaints.complaints_id} ${Complaints.message_comp} ${Complaints.location_of_complaint} ${Complaints.type_of_complaint} ${Complaints.date_time} ${Complaints.status_msg} `.toLowerCase().includes(searchPhrase.toLowerCase())) {
                return Complaints
              }
              // map/display out the returned Complaints
              }).map( Complaints => (
                    <tr key={Complaints.complaints_id}>
                      <td className='text-center'>{Complaints.complaints_id}</td>
                      <td>{Complaints.message_comp}</td>
                      <td>{Complaints.location_of_complaint}</td>
                      <td>{Complaints.type_of_complaint}</td>
                      <td>{Complaints.date_time}</td>
                      <td>{Complaints.first_name} {Complaints.last_name}</td>
                      <td 
                      style={{ color: Complaints.status_msg  === 'IN PROGRESS'? 'black': 'green'}}
                      className='fw-semibold'
                      >
                        { Complaints.status_msg } 
                      </td>
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

export default ResponseToComplaint