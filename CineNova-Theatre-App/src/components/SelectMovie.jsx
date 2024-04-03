import React from 'react'
import { useNavigate } from 'react-router-dom'
// import useLocalStorage from 'use-local-storage'


const SelectMovie = () => {
  const navigate = useNavigate();

  const selectMovie = (event) => {
    event.preventDefault();
    navigate("/tickets");
    let movieImg = event.target.src;
    let movieTitle = event.target.alt;
  }
}

export default SelectMovie