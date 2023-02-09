import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SidebarRes from "../../components/SidebarRes";
import Viewbtn from "../Viewbtn"
import {FaArrowUp, FaArrowDown} from "react-icons/fa"

function SeeResponse() {
  // setting the inputs
  const [MyComplaints, setMyComplaints] = useState([]);
  // updates the state of the application to reflect the desired sort order.
  const [sorted, setSorted] = useState({ sorted: "", reversed: false});
  // retrieve resident_id from browser local storage
  const resident_id = localStorage.getItem('user.resident_id')
  // search box
  const [searchPhrase, setSearchPhrase] = useState("")
  // retrieve user token from local storage
  const token = localStorage.getItem('user.token') 
  
  // function for sorting by ID
  const SortbyID = () => {
    setSorted({ sorted: "id", reversed: !sorted.reversed})
      const idsCopy = [...MyComplaints];
      idsCopy.sort((idsA, idsB ) => {
        if (sorted.reversed) {
          return idsA.complaints_id - idsB.complaints_id
        }
        return idsB.complaints_id - idsA.complaints_id
      });
      setMyComplaints(idsCopy)
    }
 
    // function for sorting by Status
    const SortbyStatus = () => {
     setSorted({ sorted: "status", reversed: !sorted.reversed});
     // spread operator to retain the original array
     const MyCompCopy = [...MyComplaints];
      // .sort((parameter, parameter)) the parameter determines on sorting order
      MyCompCopy.sort((MyCompA, MyCompB ) => { 
        const status_infoA = `${MyCompA.status_msg}`;
        const status_infoB = `${MyCompB.status_msg}`;
        
        // order of the comparison depends on the value of the sorted.reversed property, which determines if the sort order should be ascending or descending.
        if (sorted.reversed) {
        // sorting is done by comparing the status_msg properties of two objects (positive# or negative#)
        return status_infoB.localeCompare(status_infoA);
        }
        return status_infoA.localeCompare(status_infoB);
      });
      setMyComplaints(MyCompCopy)
   }

  // GET the personal resident complaints to display
  async function getMyComplaints() {

    // if there is no token redirect to log in page
    if (!token) {
      window.location.href = "/login";
      return;
    }

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
      {/* <div className='container-sidebaronly'> */}
      <SidebarRes />
      {/* </div> */}
      <div className="container text-bg-light my-5 mx-5">
      <div className="h4 pb-2 mb-4 my-3 mx-3 text-success border-bottom border-success">
          See My Complaints
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
                  <th className="text-center" scope="col" onClick={SortbyID}> <span style={{ marginRight:10 }}>Complaint ID# </span> {renderArrow()}</th>
                  <th className="text-center" scope="col">Complaint Message</th>
                  <th className="text-center" scope="col" onClick={SortbyStatus}> <span style={{ marginRight:10 }}> Status </span> {renderArrow()}</th>
                  <th className="text-center" scope="col">View Response</th>
                  </tr>
              </thead>
              <tbody>
              {/* maps over an array to display each item in a row from state */}
              {MyComplaints.filter((Complaints)=> {
              // if search bar is empty then display all complaints
              if (searchPhrase === "") {
                return Complaints
              } else if (`${Complaints.complaints_id} ${Complaints.message_comp} ${Complaints.status_msg} `.toLowerCase().includes(searchPhrase.toLowerCase())) {
                return Complaints
              }
              }).map( Complaints => (
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