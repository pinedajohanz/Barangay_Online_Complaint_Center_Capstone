import React from 'react'

function LogOutbtn() {

    const handleLogout = () => {
        localStorage.removeItem('user.token')
        localStorage.removeItem('user.resident_id')
        window.location = "/"
    }
  return (
    <>
        {/* <button className="btn btn-primary" onClick={handleLogout}> Log Out</button> */}
    </>
  )
}

export default LogOutbtn