import React from 'react'
import UpdateIcon from '@mui/icons-material/Update';
import ViewListIcon from '@mui/icons-material/ViewList';
import ReplyIcon from '@mui/icons-material/Reply';
import PageviewIcon from '@mui/icons-material/Pageview';

// array of objects 
export const SideDataAdmin = [
    {
        title: "View Responses to Complaints",
        icon: <PageviewIcon />,
        link: "/ViewMyResponse" 
    },
    {
        title: "Respond to Complaints",
        icon: <ReplyIcon />,
        link: "/ResponseToComplaint"
    },
    {
        title: "Update/Delete Complaints",
        icon: <UpdateIcon />,
        link: "/UpdateDeleteStatus"
    },
    {
        title: "View Residents Info",
        icon: <ViewListIcon />,
        link: "/ViewAllResidentsInfo"
    }
    // {
    //     title: "Log Out",
    //     icon: <LogOutbtn />,
    //     link: "/"
    // }
   
]
