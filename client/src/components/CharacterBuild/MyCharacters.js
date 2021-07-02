import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../styles/myCharacters.css'


const MyCharacters = props => {
  const characterCards = props.characters.length > 0 ?
  props.characters.map(c => (
    <div id='myCharacterDiv'>
    <p className="card text-white bg-dark mb-2" 
    id="cCard" 
    key={c.id}>
    <Link to={`/characters/${c.id}`}>{c.attributes.title}</Link>
    <br/>
    <button id='cDetails'><Link to={`/characters/${c.id}`}>Details</Link></button>
    </p>
    </div>
    )) 
    : 
    <h1>No Characters</h1>

  return (<div id='myCharacterDiv'> 
  
  {characterCards}
  </div>)
}


const mapStateToProps = state => {
  return {
    characters: state.myCharacters
  }
}

export default connect(mapStateToProps, null)(MyCharacters)