import React from 'react'
import Header from '../components/Header'
import HomeBody from '../components/HomeBody'

const Home = (props) => {

  return (
    <>
    <Header toggleTheme={props.toggleTheme} darkMode={props.darkMode} />
    <HomeBody darkMode={props.darkMode} />
    </>
  )
}

export default Home