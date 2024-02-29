import './index.css'
import { useState, useEffect, useMemo } from 'react'
import useLocalStorage from 'use-local-storage'
import Home from './pages/Home'

function App() {

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const docuemntClassList = document.documentElement.classList;

  const toggleTheme = () => {
    docuemntClassList.toggle("dark");
    setDarkMode(!darkMode);
  }

  return (
    <Home toggleTheme={toggleTheme} darkMode={darkMode} />
  )
}

export default App