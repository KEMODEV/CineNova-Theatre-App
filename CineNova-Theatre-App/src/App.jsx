import './App.css'
import './index.css'
import Header from './components/Header'

function App() {

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  }

  const isDarkmodeActive = () => {
    return document.documentElement.classList.contains("dark");
  }

  return (
    <Header toggleTheme={toggleTheme} isDarkmodeActive={isDarkmodeActive} />
  )
}

export default App
