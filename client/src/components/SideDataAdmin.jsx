import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import UpdateIcon from '@mui/icons-material/Update';
import ViewListIcon from '@mui/icons-material/ViewList';
import ReplyIcon from '@mui/icons-material/Reply';
import PageviewIcon from '@mui/icons-material/Pageview';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// array of objects 
export const SideDataAdmin = [
    {
        title: "View Responses to Complaints",
        icon: <PageviewIcon />,
        link: "/AdminDash" 
    },
    {
        title: "Respond to Complaints",
        icon: <ReplyIcon />,
        link: "/ResToComp"
    },
    {
        title: "Update status/Delete Complaints",
        icon: <UpdateIcon />,
        link: "/UpdateDeleteStatus"
    },
    {
        title: "View Residents Info",
        icon: <ViewListIcon />,
        link: "/ViewAllRes"
    },
    {
        title: "Log Out",
        icon: <ExitToAppIcon />,
        link: "/"
    }
   
]
