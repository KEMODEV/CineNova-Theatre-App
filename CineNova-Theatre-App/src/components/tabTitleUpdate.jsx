import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom' 

const tabTitleUpdate = (props) => {

        //let title = document.title;
        switch (props.location.pathname) {
        case "/contact":
            document.title = "CineNova - Contact";
            break;
    
        case "/tickets":
            document.title = "CineNova - Tickets & Seating";
            break;
    
        case "/checkout":
            document.title = "CineNova - Checkout"; 
            break;

        case "/confirmation":
            document.title = "CineNova - Purchase Confirmed"; 
            break;
    
        default:
            document.title = "CineNova"; 
            break;
        }
    
}

export default tabTitleUpdate