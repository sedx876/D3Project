import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom'
import MyCharacters from '../components/CharacterBuild/MyCharacters'
import CharacterCard from '../components/CharacterBuild/CharacterCard'


class CharacterBuildContainer extends Component{


  render(){
    const { characters } = this.props
  return(
    <div>
      <Switch>
        <Route exact path='/characters' component={MyCharacters}/>
      </Switch>
    </div>
  )
  }
}

const mapStateToProps = state => {
  return ({
    characters: state.myCharacters
  })
}

export default withRouter(connect(mapStateToProps)(CharacterBuildContainer))