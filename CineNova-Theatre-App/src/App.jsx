import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import Header from './components/Header'
import HomeBody from './components/HomeBody'
import Contact from './pages/Contact'
import Tickets from './components/Tickets'
import Billing from './pages/Billing'

function App() {

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    const documentClassList = document.documentElement.classList;
    darkMode
      ? documentClassList.add("dark")
      : documentClassList.remove("dark");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  /*window.addEventListener("load", () => {
    document.title="CineNova";
  })*/


  
  return (
    <>
    {/*<Home toggleTheme={toggleTheme} darkMode={darkMode} />*/}
    <div id='overlay'></div>
    <Router>
      <Header 
        toggleTheme={toggleTheme} 
        darkMode={darkMode} 
      />
      <Routes>
        <Route 
          path="/" 
          element={<HomeBody darkMode={darkMode} />}
        />
        <Route 
          path="/contact" 
          element={<Contact darkMode={darkMode} />} 
        />
        <Route 
          path="/tickets" 
          element={<Tickets darkMode={darkMode} />} 
        />
        <Route 
          path="/billing" 
          element={<Billing darkMode={darkMode} />} 
        />
      </Routes>
    </Router>
    </>
  )
}

export default App