import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SidebarRes from "../../components/SidebarRes";

function MyProfile() {
  // get user's resident_id & token from local storage of browser 
  const resident_id = localStorage.getItem('user.resident_id')
  const token = localStorage.getItem('user.token')
  // setting inputs by useState(Array) hook
  const [PersoInfo, setPersoInfo] = useState([]);
  
  async function getPersoInfo() {
    // if there is no token redirect to log in page
    if (!token) {
      window.location.href = "/login";
      return;
    }

    // API needs a resident_id to get the personal info of that user
    const res = await fetch(`http://localhost:5000/allresidents/${resident_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
      body: JSON.stringify()
  });
    // API returns an array of personal information then saved 'PersoInfoArray'.
    const PersoInfoArray = await res.json();

    // converts date format to MM/DD/YYYY
    PersoInfoArray.forEach(residents => {
      residents.birthday = (new Date(residents.birthday)).toLocaleDateString()
    }); 
    // to update the PersoInfo state with the user's personal information.
    setPersoInfo(PersoInfoArray);
  }
  // The empty array passed as the second argument to useEffect ensures that the function is only called once, on the initial render of the component.
  useEffect(() => {
    getPersoInfo();
  }, []);

  return (
    <>
    <div className='main'>
    <SidebarRes />
    <div className="container text-bg-light mx-5 my-5">
      {/* maps over an array to display each item in a row from state */}
    {PersoInfo.map(Info => (
      <div className="col my-4 mx-4">
                <div className="card-body p-4">
                  <h3 className='text-success'>My Profile</h3>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h5>User ID#</h5>
                      <p className="text-muted">{Info.resident_id} </p>
                    </div>
                    <div className="col-6 mb-3">
                      <h5>First Name</h5>
                      <p className="text-muted">{Info.first_name} </p>
                    </div>
                  </div>
                  
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h5>Middle initial</h5>
                      <p className="text-muted">{Info.middle_init} </p>
                    </div>
                    <div className="col-6 mb-3">
                      <h5>Last Name</h5>
                      <p className="text-muted">{Info.last_name} </p>
                    </div>
                  </div>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h5>Birthday</h5>
                      <p className="text-muted">{Info.birthday} </p>
                    </div>
                    <div className="col-6 mb-3">
                      <h5>Contact Number</h5>
                      <p className="text-muted">{Info.contact_number} </p>
                    </div>
                  </div>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h5>Subdivision</h5>
                      <p className="text-muted">{Info.subdivision_address} </p>
                    </div>
                    <div className="col-6 mb-3">
                      <h5>House Street</h5>
                      <p className="text-muted">{Info.house_street_address} </p>
                    </div>
                  </div>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h5>Email</h5>
                      <p className="text-muted">{Info.email_address} </p>
                    </div>
                    <div className="col-6 mb-3">
                      <h5>Username</h5>
                      <p className="text-muted">{Info.username} </p>
                    </div>
                  </div>
                </div>
        </div>
      ))}
        
    </div>
    </div>
    </>
  )
}

export default MyProfile