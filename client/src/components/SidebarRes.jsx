import React, { useState, useEffect } from 'react'
import {SideDataRes} from './SideDataRes'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ToastContainer, toast, Flip } from 'react-toastify'; 

const SidebarRes = () => {
  // toastify for logging out
  const notifyLogOut = () => {
    toast.info("Logging out...")
  }
  // log out function
  const handleLogout = () => {
      notifyLogOut()
      localStorage.removeItem('user.token')
      localStorage.removeItem('user.resident_id')
      setTimeout(() => {
        window.location = '/'
      }, 2500); // delay of 2.5 seconds
  }

  // setting inputs by useState(Array) hook
  const [PersoInfo, setPersoInfo] = useState([]);
  const token = localStorage.getItem('user.token')

  // get user's resident_id & token from local storage of browser 
  const resident_id = localStorage.getItem('user.resident_id')

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
        <div className="container-sidebar">
            <div className="sidebarresident">
                <div className='welcome'>
                  <h3 className='text-center text-white p-4'>WELCOME <br /> <span className='text-warning'>{PersoInfo[0]?.first_name}</span>!</h3>
                </div>
                <ul className="SidebarList">
                    {/* Maps over an array of objects from the imported "SideDataRes" component */}
                    {SideDataRes.map((val, key) => {
                        return (
                            // map() creates (li) element. The id is determined by checking 
                            // if the window location pathname is equal to the link of the current object in the array
                            // if path is equal to val.link then set it to active
                            <li 
                                key={key} 
                                className="row"
                                id={window.location.pathname === val.link ? "active" : ""}
                                onClick={()=> {
                                    window.location.pathname = val.link;
                                    }}
                            >       
                            {/* display the icon and title properties of the current object in the array */}
                                    <div id="icon">
                                        {val.icon}
                                    </div>
                                    <div id="title">
                                        {val.title}
                                    </div>
                            </li>
                        );
                    })}
                    {/* LOG OUT button */}
                    <div id='logout'>
                      <button className='btn btn-dark' style={{width:'100%'}} onClick={handleLogout}><ExitToAppIcon /> Log out</button>
                    </div>
                </ul>
                
    
            </div>
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
        
        </>
    );
}

export default SidebarRes;
