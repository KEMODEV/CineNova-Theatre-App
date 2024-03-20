import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCarousel = () => {
    const navigate = useNavigate();

    const navigateToTickets = () => {
        navigate('/tickets');
    }

    useEffect(() => {
        const elem = document.querySelector('.main-carousel');
        const flkty = new Flickity(elem, {
            imagesLoaded: true,
            percentPosition: false,
        });
        const carouselCells = elem.querySelectorAll('.carousel-cell');
        const imgs = elem.querySelectorAll('.carousel-cell img');
        
        //const neonYellowBorder = "carousel-cell w-32 h-auto dark:border-4 rounded-[6px] dark:border-[#ffff0000] dark:border-[#ffff00] dark:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#FFFF00,0_0_8px_#FFFF00,0_0_14px_#FFFF00] drop-shadow-[0_10px_10px_rgba(255,255,0,0.5)] transition duration-500 ease-in-out";

        // Flickity movie carousel
        flkty.on('scroll', () => {
            const centerSlideIndex = parseInt(flkty.selectedIndex); 

            const navigateToTickets = () => {
                navigate('/tickets');
            }
        
            flkty.slides.forEach((slide, i) => {
                const carouselCell = carouselCells[i];
                const img = imgs[i];
                
                // Check if the slide is before or after the centered slide
                if (i <= centerSlideIndex - 1 || i >= centerSlideIndex + 1) {
                    carouselCell.style.opacity = '0.5';
                    /*carouselCell.addEventListener("mouseover", () => { 
                    carouselCell.style.transform = "scale(1.1)";
                    });
                    carouselCell.addEventListener("mouseout", () => { 
                    carouselCell.style.transform = "scale(1)";
                    });*/
                    img.style.cursor = 'grab';
                    //carouselCell.className = prevCellClassName;
                } else {
                    carouselCell.style.opacity = '1'; 
                    img.style.cursor = 'pointer';
                    carouselCell.addEventListener("click", navigateToTickets);
                    //carouselCell.className = neonYellowBorder;
                }
            });
        });

        
    });
    
}

export default MovieCarousel