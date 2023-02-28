import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SideBarAdmin from "../../components/SideBarAdmin";
import Updatebtn from '../Updatebtn';
import { ToastContainer, toast, Flip } from 'react-toastify'; 
import {FaArrowUp, FaArrowDown} from "react-icons/fa"
import DeleteIcon from '@mui/icons-material/Delete';


function UpdateDeleteStatus() {
  // toastify notification
  const notify = () => {
    toast.warning("Complaint Deleted!")
}
  // searchPhrase is equal to what input user type in the search bar
  const [searchPhrase, setSearchPhrase] = useState("")

  // setting the inputs
  const [AllComp, setAllComp] = useState([]);

  // filter button
  const [selectFilter, setselectFilter] = useState('ALL')

  // retrieve token from local storage
  const token = localStorage.getItem('user.token') 

  // updates the state of the application to reflect the desired sort order.
  const [sorted, setSorted] = useState({ sorted: "", reversed: false});


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
      // sets the state to the new returned value of array
      setAllComp(AllCompCopy)
    }


  // DELETE Complaint function
  async function deleteComp(id) {
    console.log(id)

    // if there is no token redirect to log in page
    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      await fetch(`http://localhost:5000/complaint/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify()
      });
      // notification upon delete of complaint
      notify()

      // setState to update the state (AllComp) that hold all complaints, by filtering out the complaint that has just been deleted. if ID != ID passed to the function, it keeps the element in the array and returns a new array without the element that was removed.
      setAllComp(AllComp.filter(Complaints => Complaints.complaints_id !== id))

    } catch (err) {
        console.error(err.message)
    }
  }

  // GET all COMPLAINTS to display in the table
  async function getAllComp() {
    const res = await fetch("http://localhost:5000/allcomplaints", {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
      body: JSON.stringify()
  });
    // data stored in this Array
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
        Update Status of Complaints / Delete Complaints
      </div>
      <div class="row">
        <div className="search-container">
          <input 
          type="text" 
          placeholder="Search" 
          onChange={event => {setSearchPhrase(event.target.value)}} 
          />
        </div> 
        <div class="col-6" style={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
          <select value={selectFilter} onChange={event => {setselectFilter(event.target.value)}}  class="form-select" aria-label="Default select example" style={{marginLeft:'auto', padding:10, borderRadius:0}}>
            <option selected>Filter by Status</option>
            <option value="ALL">ALL</option>
            <option value="IN PROGRESS">IN PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>
      </div>
        <table className="table table-hover">
            <thead className='table-success'>
                <tr>
                <th scope="col" onClick={SortbyID}> <span style={{ marginRight:10 }}> Complaint ID#  </span> {renderArrow()}</th>
                <th scope="col">Message from Complainant</th>
                <th scope="col">Location of Complaint</th>
                <th scope="col">Type of Complaint</th>
                <th scope="col">Date and Time</th>
                {/* <th scope="col">X</th> */}
                <th scope="col"> Name</th>
                <th scope="col" onClick={SortbyStatus}> <span style={{ marginRight:10 }}> Status </span> {renderArrow()}</th>
                {/* <th scope="col">0 = IN-PROGRESS / 1 = COMPLETED</th> */}
                <th scope="col">Update status</th>
                <th scope="col">Delete complaint</th>

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
            })
            .filter((Complaints)=> {
              // if state equal to 'ALL' then display all complaints
              if (selectFilter === "ALL") {
                return Complaints
              }
              else if (
                // if state equal 'COMPLETED' or 'IN PROGRESS' then display that status
                `${Complaints.status_msg}`.toLowerCase().includes(selectFilter.toLowerCase())) { 
                return Complaints
              }
            })
            // map/display out the returned Complaints
            .map( Complaints => (
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
                      {/* passing a prop to updatebtn component */}
                      <Updatebtn Complaints={Complaints} />
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteComp(Complaints.complaints_id)} >
                        <DeleteIcon />
                        
                      </button>
                    </td>
                  </tr>
                ))
            }
            </tbody>
        </table>
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

export default UpdateDeleteStatus