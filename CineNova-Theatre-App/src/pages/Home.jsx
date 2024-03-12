import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Header from '../components/Header'
// import HomeBody from '../components/HomeBody'
// import Contact from './Contact'
// import Tickets from '../components/Tickets'
// import Billing from './Billing'

const Home = (props) => {

  return ( <></>
    /*<Router>
      <Header toggleTheme={props.toggleTheme} darkMode={props.darkMode} />
      <Routes>
        <Route exact path="/">
          <HomeBody darkMode={props.darkMode} />
        </Route>
        <Route exact path="/contact">
          <Contact darkMode={props.darkMode} />
        </Route>
        <Route exact path="/tickets">
          <Tickets darkMode={props.darkMode} />
        </Route>
        <Route exact path="/billing">
          <Billing darkMode={props.darkMode} />
        </Route>
      </Routes>
    </Router>*/
  )
}

export default Home