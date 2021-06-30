import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar } from './components/navbar'
import Home from './components/core/Home.js'
import About from './components/core/About.js'
import Footer from './components/core/Footer'
import Links from './components/core/Links'
import CharacterBuildContainer from './containers/CharacterBuildContainer'

class MainRouter extends Component {

  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/links' component={Links}/>
        </Switch>
        <CharacterBuildContainer />
        {/* <Footer/> */}
      </div>
    )
  }
  
}

export default MainRouter
