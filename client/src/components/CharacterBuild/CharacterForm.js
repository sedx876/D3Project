import React from 'react'
import { connect } from 'react-redux'
import { updateCharacterForm } from '../../actions/characterForm'
import Toggle from '../core/Toggle'
import '../../styles/characterForm.css'
import { MdTitle } from "react-icons/md"
import { GiNinjaHeroicStance, 
         GiElfHelmet,
         GiSpikedShoulderArmor,
         GiGauntlet,
         GiLeatherArmor,
         GiBeltBuckles,
         GiArmoredPants,
         GiSteeltoeBoots,
         GiBracer,
         GiNecklace,
         GiDoorRingHandle,
         GiGlobeRing,
         GiSwitchWeapon,
         GiBorderedShield,
         GiFireGem,
         GiCompanionCube,
         GiSkills,
         GiStabbedNote } from "react-icons/gi"


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
    <>
    <h1 id='formTitle'>Add New Character</h1>
    
  <div id='newFormDiv'>
  <Toggle id='formToggle' placeholder='New Character'>
   New Character
    <form
      onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <div id='stringInput'>

        <div id='inputDiv'>
          <MdTitle id='icon'/>
          <input id='newFormInput'  onChange={handleChange} placeholder='Title of Your Build' name='title' value={title} type='text' isrequired='true' />
        </div>

        <div id='inputDiv'>
          <GiNinjaHeroicStance id='icon'/>
          <input id='newFormInput' onChange={handleChange} placeholder='Character Class EX: Demon Hunter..Necromancer...' name='characterKlass' value={characterKlass} type='text' />
        </div>
      
        <div id='inputDiv'>
          <GiElfHelmet id='icon'/>
          <input id='newFormInput' onChange={handleChange} placeholder='Helm' name='helm' value={helm} type='text' />
        </div>
      <br />

      <div id='inputDiv'>
        <GiSpikedShoulderArmor id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Shoulders' name='shoulders' value={shoulders} type='text' />
      </div>

      <div id='iputDiv'>
        <GiGauntlet id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Gloves' name='gloves' value={gloves} type='text' />
      </div>
      
      <div id='inputDiv'>
        <GiLeatherArmor id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Chest Armor' name='chestArmor' value={chestArmor} type='text' />
      </div>
      
      <br />

      <div id='inputDiv'>
        <GiBeltBuckles id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Belt' name='belt' value={belt} type='text' />
      </div>

      <div id='inputDiv'>
        <GiArmoredPants id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Pants' name='pants' value={pants} type='text' />
      </div>
      
      <div id='inputDiv'>
        <GiSteeltoeBoots id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Boots' name='boots' value={boots} type='text' />
      </div>
      
      
      <br />

      <div id='inputDiv'>
        <GiBracer id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Bracers' name='bracers' value={bracers} type='text' />
      </div>
      
      <div id='inputDiv'>
        <GiNecklace id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Amulet' name='amulet' value={amulet} type='text' />
      </div>

      <div id='inputDiv'>
        <GiDoorRingHandle id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Ring 1' name='ring1' value={ring1} type='text' />
      </div>
      
      
      <br />

      <div id='inputDiv'>
        <GiGlobeRing id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Ring 2' name='ring2' value={ring2} type='text' />
      </div>

      <div id='inputDiv'>
        <GiSwitchWeapon id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Weapon' name='weapon' value={weapon} type='text' />
      </div>
      
      <div id='inputDiv'>
        <GiBorderedShield id='icon'/>
        <input id='newFormInput' onChange={handleChange} placeholder='Offhand' name='offhand' value={offhand} type='text' />
      </div>
      
      
      <br />
      </div>

      <div id='stringInput'>
        <textarea id='newFormInput'  onChange={handleChange} placeholder='Gems EX: Legendaries and Common Gems to Socket' name='gemNotes' value={gemNotes} type='text' />
        <textarea id='newFormInput'  onChange={handleChange} placeholder="Kanai's Cube What Legendary Powers to Extract" name='kanaisCube' value={kanaisCube} type='text' />
        <textarea id='newFormInput' onChange={handleChange} placeholder='Active Skills' name='activeSkills' value={activeSkills} type='text' />
        <textarea id='newFormInput' onChange={handleChange} placeholder='Passive Skills' name='passiveSkills' value={passiveSkills} type='text' />
      <br />

      
      
      <textarea id='newFormInput' onChange={handleChange} placeholder='Random Build Notes' name='generalBuildNotes' value={generalBuildNotes} type='text' />
      <br />
      </div>

      <div id='createBtn'>
      <input className="logoutBtn" id='createBtn' type='submit' value={editMode ? 'Update Character' : 'Create Character'} />
      </div>
      
    </form>
    </Toggle>
    </div>
    
    </>
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