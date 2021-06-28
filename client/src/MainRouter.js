import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from './components/navbar'
import Home from './components/core/Home.js'
import About from './components/core/About.js'
import Footer from './components/core/Footer'
import Links from './components/core/Links'

const MainRouter = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/links' component={Links}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default MainRouter
