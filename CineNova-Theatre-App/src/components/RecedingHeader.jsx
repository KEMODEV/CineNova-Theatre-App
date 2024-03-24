import React, { useEffect, useRef } from 'react'

const RecedingHeader = () => {
    
    const headerRef = useRef(null);
    const logoDivRef = useRef(null);
    const logoRef = useRef(null);
    const cinenovaTitleRef = useRef(null);
    const navRef = useRef(null);
    const prevScrollCoordsRef = useRef(0);
  
    useEffect(() => {
      const windowWidth = window.innerWidth;
  
      // Store styles
      // const prevHeaderRefPt = headerRef.current.style.paddingTop;
      // const prevHeaderRefPb = headerRef.current.style.paddingBottom;
      // const prevLogoRefWidth = logoRef.current.style.width;
      // const prevCinenovaTitleRefSize = cinenovaTitleRef.current.style.fontSize;
      
      const handleScroll = () => {
        const curScrollCoords = window.scrollY;
        if (curScrollCoords > 110 && curScrollCoords > prevScrollCoordsRef.current) {
          
          // Recedes depending on header size which vary on those screen widths
          headerRef.current.style.transform = 
            window.innerWidth < 640 ? "translateY(-111px)"
              : window.innerWidth < 768 ? "translateY(-119px)"
              : "translateY(-143px)";
  
          /*windowWidth < 1024
            ? headerRef.current.style.transform = "translateY(-147px)"
            : headerRef.current.style.transform = "translateY(-163px)";*/
          //headerRef.current.style.opacity = "0.75";
  
          // Stylzing header to match new appearance
          //headerRef.current.style.paddingTop = "1.5rem";
          //headerRef.current.style.paddingBottom = "0.8rem";
  
          /*switch (true) {
            case windowWidth < 640:
              cinenovaTitleRef.current.style.fontSize = "1.2rem";
  
              break;
  
            case windowWidth < 930:
              logoRef.current.style.width = "4.5rem";
              cinenovaTitleRef.current.style.fontSize = "1rem";
  
  
              break;
            case windowWidth < 1024:
              cinenovaTitleRef.current.style.fontSize = "1.2rem";
              break;
            case windowWidth < 1280:
              
              break;
            default:  // < 1536px
  
              break;
          }
          logoRef.current.style.width = "3.5rem";*/
  
        } else {
          headerRef.current.style.transform = "translateY(20px)";
          //headerRef.current.style.opacity = "1";
  
          // Replacing edited styles with original
          //headerRef.current.style.paddingTop = prevHeaderRefPt;
          //headerRef.current.style.paddingBottom = prevHeaderRefPb;
          //logoRef.current.style.width = prevLogoRefWidth;
          //cinenovaTitleRef.current.style.fontSize = prevCinenovaTitleRefSize;
        }
        prevScrollCoordsRef.current = curScrollCoords;
      };
    
      /*const handleHover = () => {
        if (headerRef.current) {
          headerRef.current.style.opacity = "1";
        }
      };
    
      const handleHoverOut = () => {
        if (headerRef.current) {
          headerRef.current.style.opacity = "0.75";
        }
      };
    
      const headerElement = headerRef.current;
    
      if (headerElement) {
        headerElement.addEventListener("mouseenter", handleHover);
        headerElement.addEventListener("mouseleave", handleHoverOut);
      }*/
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
    
        /*if (headerElement) {
          headerElement.removeEventListener("mouseenter", handleHover);
          headerElement.removeEventListener("mouseleave", handleHoverOut);
        }*/
      };
    }, []);
}

export default RecedingHeader