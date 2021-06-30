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
import { getCurrentUser } from "./actions/currentUser"
import Signup from './components/Users/Signup'

class MainRouter extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
      <div>
        {/* { loggedIn ? <Navbar /> : <Home />} */}
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/links' component={Links}/>
          <Route exact path='/signup' render={({history}) =><Signup history={history}/>}/>
        </Switch>
        <CharacterBuildContainer />
        {/* <Footer/> */}
      </div>
    )
  }
  
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(MainRouter))
