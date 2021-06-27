import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from './components/navbar'
import Home from './components/core/Home.js'

const MainRouter = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  )
}

export default MainRouter
