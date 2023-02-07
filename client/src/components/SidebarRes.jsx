import React from 'react'
import {SideDataRes} from './SideDataRes'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SidebarRes = () => {

    const handleLogout = () => {
        localStorage.removeItem('user.token')
        localStorage.removeItem('user.resident_id')
        window.location = "/"
    }

    return (
        <>
        <div className="container-sidebar">
            <div className="sidebarresident">
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
                    <div className='row' id='logout'>
                    <ExitToAppIcon />
                    <button className='btn btn-dark' onClick={handleLogout}><ExitToAppIcon /> Log out</button>
                    </div>
                </ul>
            </div>
        </div>
        
        </>
    );
}

export default SidebarRes;
