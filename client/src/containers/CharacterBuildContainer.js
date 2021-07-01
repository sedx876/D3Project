import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom'
import MyCharacters from '../components/CharacterBuild/MyCharacters'
import CharacterCard from '../components/CharacterBuild/CharacterCard'
import NewCharacterFormWrapper from '../components/CharacterBuild/NewCharacterFormWrapper.js'
import EditCharacterFormWrapper from '../components/CharacterBuild/EditCharacterFormWrapper.js'

class CharacterBuildContainer extends React.Component {


  render() {
    const { characters } = this.props
    return (
      <div className="CharacterBuild">
        <Switch>
        
          <Route exact path='/characters' component={MyCharacters}/>
          
          <Route exact path='/characters/new' component={NewCharacterFormWrapper}/>

          <Route exact path='/characters/:id' render={props => {
              const character = characters.find(character => character.id === props.match.params.id)
              return <CharacterCard character={character} {...props}/>
          }}/>

          <Route exact path='/characters/:id/edit' render={props => {
              const character = characters.find(character => character.id === props.match.params.id)
              return <EditCharacterFormWrapper character={character} {...props}/>
          }}/>
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