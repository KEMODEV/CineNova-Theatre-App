import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom' 

const tabTitleUpdate = (props) => {

        let title = document.title;
        switch (true) {
        case props.location.pathname == "/contact":
            document.title = "CineNova - Contact";
            break;
    
        case props.location.pathname == "/tickets":
            document.title = "CineNova - Tickets & Seating";
            break;
    
        case props.location.pathname == "/billing":
            document.title = "CineNova - Billing Info"; 
            break;
    
        default:
            document.title = "CineNova"; 
            break;
        }
    
}

export default tabTitleUpdate