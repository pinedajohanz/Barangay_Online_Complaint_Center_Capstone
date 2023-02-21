import React from 'react'
import {SideDataAdmin} from './SideDataAdmin'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ToastContainer, toast, Flip } from 'react-toastify'; 

const SideBarAdmin = () => {
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

    return (
        <>
        <div className='container-sidebar'>
            <div className="sidebaradmin">
                <div className='welcome'>
                    <h3 className='text-center text-white p-4'>WELCOME <br /> <span className='text-warning'>ADMIN</span> </h3>
                </div>
                <ul className="SidebarList">
                    {/* Maps over an array of objects from the imported "SideDataAdmin" component */}
                    {SideDataAdmin.map((val, key) => {
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

export default SideBarAdmin;