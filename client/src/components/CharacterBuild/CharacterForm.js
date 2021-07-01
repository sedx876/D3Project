import React from 'react'
import { connect } from 'react-redux'
import { updateCharacterForm } from '../../actions/characterForm'


const CharacterForm = ({ formData, updateCharacterForm, handleSubmit, editMode }) => {

  const { title, characterKlass, helm, shoulders, gloves, 
          chestArmor, belt, pants, boots, bracers, amulet, 
          ring1, ring2, weapon, offhand, gemNotes, kanaisCube, 
          activeSkills, passiveSkills, generalBuildNotes } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateCharacterForm(name, value)
  }

  

  return (
  <div className="card text-white bg-dark">
    <form className="form-group col-sm-10"
      onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <input className="form-control" onChange={handleChange} placeholder='Title of Your Build' name='title' value={title} isrequired='true' />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Character Class EX: Demon Hunter..Necromancer...' name='characterKlass' value={characterKlass} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Helm' name='helm' value={helm} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Shoulders' name='shoulders' value={shoulders} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Gloves' name='gloves' value={gloves} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Chest Armor' name='chestArmor' value={chestArmor} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Belt' name='belt' value={belt} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Pants' name='pants' value={pants} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Boots' name='boots' value={boots} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Bracers' name='bracers' value={bracers} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Amulet' name='amulet' value={amulet} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Ring 1' name='ring1' value={ring1} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Ring 2' name='ring2' value={ring2} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Weapon' name='weapon' value={weapon} />
      <br />
      <input className="form-control" onChange={handleChange} placeholder='Offhand' name='offhand' value={offhand} />
      <br />
      <textarea className="form-control" onChange={handleChange} placeholder='Gems EX: Legendaries and Common Gems to Socket' name='gemNotes' value={gemNotes} />
      <br />
      <textarea className="form-control" onChange={handleChange} placeholder="Kanai's Cube What Legendary Powers to Extract" name='kanaisCube' value={kanaisCube} />
      <br />
      <textarea className="form-control" onChange={handleChange} placeholder='Active Skills' name='activeSkills' value={activeSkills} />
      <br />
      <textarea className="form-control" onChange={handleChange} placeholder='Passive Skills' name='passiveSkills' value={passiveSkills} />
      <br />
      <textarea className="form-control" onChange={handleChange} placeholder='Random Build Notes' name='generalBuildNotes' value={generalBuildNotes} />
      <br />
      <input className="btn btn-outline-warning" type='submit' value={editMode ? 'Update Character' : 'Create Character'} />
    </form>
    </div>
  )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ''
  return {
    formData: state.characterForm,
    userId
  }
}

export default connect(mapStateToProps, { updateCharacterForm }) (CharacterForm)