import React from 'react'
import CharacterForm from './CharacterForm'
import { updateCharacter, deleteCharacter } from '../../actions/myCharacters'
import { setFormDataForEdit, resetCharacterForm } from '../../actions/characterForm'
import { connect } from 'react-redux'


class EditCharacterFormWrapper extends React.Component {


  //invoked right after initial render
  //tells react to update state of component
  componentDidMount(){
    this.props.character && this.props.setFormDataForEdit(this.props.character)
  }


  //takes in prevprops as argument
  //can check if a condition was met and then perform an action upon it
  componentDidUpdate(prevProps){
    this.props.character && !prevProps.character && this.props.setFormDataForEdit(this.props.character)
  }



  //invoked before a component is unmounted from dom
  //we used the character form now we want to reset and unmount from DOM
  componentWillUnmount(){
    this.props.resetCharacterForm()
  }

  handleSubmit = (formData) => {
    const { updateCharacter, character, history } = this.props
    updateCharacter({
      ...formData,
      characterId: character.id
    }, history)
  }

  render() {
    const { deleteCharacter, character, history } = this.props 
    const characterId = character ? character.id : null
    return <>
            <CharacterForm editMode handleSubmit={this.handleSubmit} />
            
            <button className="btn btn-outline-danger" onClick={() => deleteCharacter(characterId, history)}>Delete this Character</button>
          </>
  }
}

export default connect(null, { updateCharacter, setFormDataForEdit, resetCharacterForm, deleteCharacter })(EditCharacterFormWrapper)