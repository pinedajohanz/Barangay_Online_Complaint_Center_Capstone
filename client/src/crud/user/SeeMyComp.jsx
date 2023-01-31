// import React, { useState, useEffect } from 'react'
import "../../dashboard/Dashboard.css"
import SidebarRes from "../../components/SidebarRes";

function SeeMyComp() {
  
  // async function getComp() {
  //   const res = await fetch("");

  //   const compArray = res.json();
  // }
  
  //   useEffect(() => {
  //   getComp();
  // }, []);

  return (

    <>
    <div className="main">
      <SidebarRes />
      <div className="container text-bg-light">
          <table className="table table-striped table-hover">
              <thead>
                  <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Middle Initial</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Birthday</th>
                  <th scope="col">Subdivision</th>
                  <th scope="col">House Street</th>
                  <th scope="col">Contact Number</th>
                  <th scope="col">Email</th>

                  </tr>
              </thead>
              <tbody>
              
          
              </tbody>
          </table>
      </div>
    </div>
    </>
  )
}

export default SeeMyComp