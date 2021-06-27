import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from './components/navbar'
import Home from './components/core/Home.js'
import About from './components/core/About.js'
import Footer from './components/core/Footer'

const MainRouter = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default MainRouter
