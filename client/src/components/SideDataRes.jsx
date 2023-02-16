import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import FeedIcon from '@mui/icons-material/Feed';

// array of objects 
export const SideDataRes = [
    {
        title: "Profile",
        icon: <HomeIcon />,
        link: "/MyProfile"
    },
    {
        title: "File a Complaint",
        icon: <ReportIcon />,
        link: "/FileComplaint"
    },
    {
        title: "See My Complaints",
        icon: <FeedIcon />,
        link: "/SeeResponse"
    },
    {
        title: "FAQs",
        icon: <HelpIcon />,
        link: "/FAQs"
    }
]
