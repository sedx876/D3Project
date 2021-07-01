import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../components/core/Home'
import About from '../components/core/About'
import Login from '../components/Users/Login'
import Signup from '../components/Users/Signup'
import Links from '../components/core/Links'

class StaticContainer extends React.Component {


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/links' component={Links}/>
          <Route exact path='/signup' render={({history}) =><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    )
  }
}


export default StaticContainer