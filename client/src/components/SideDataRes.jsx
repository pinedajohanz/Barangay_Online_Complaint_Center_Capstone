import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import FeedIcon from '@mui/icons-material/Feed';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// array of objects 
export const SideDataRes = [
    {
        title: "Profile",
        icon: <HomeIcon />,
        link: "/SeeResPersoInfo"
    },
    // {
    //     title: "See my Complaints",
    //     icon: <FindInPageIcon />,
    //     link: "/SeeMyComp"
    // },
    {
        title: "File a Complaint",
        icon: <ReportIcon />,
        link: "/FileComp"
    },
    {
        title: "See My Complaints",
        icon: <FeedIcon />,
        link: "/SeeResponse"
    },
    {
        title: "FAQs",
        icon: <HelpIcon />,
        link: "/"
    }
    // {
    //     title: "Log Out",
    //     icon: <ExitToAppIcon />,
    //     link: "/"
    // }
]
