import React from 'react'
import CharacterForm from './CharacterForm'
import { createCharacter } from '../../actions/myCharacters'
import { connect } from 'react-redux'


const NewCharacterFormWrapper = ({ createCharacter, history }) => {

  const handleSubmit = (formData, userId) => {
    createCharacter({
      ...formData,
      userId
    }, history )
  }
  return <CharacterForm handleSubmit={handleSubmit} />
}

export default connect(null, { createCharacter })(NewCharacterFormWrapper)