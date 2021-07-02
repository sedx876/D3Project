import React from 'react'
import {connect} from 'react-redux'
import {updateFarmingListForm} from '../../actions/farmingListForm'
import '../../styles/farminglist.css'
import Toggle from '../core/Toggle'




const FarmingListForm = ({ formData, updateFarmingListForm, handleSubmit, editMode }) => {

  const { notes } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateFarmingListForm(name, value)
  }

  return (
    <Toggle>
    <div className="todo-app">
      <form className="form-group col-sm-4"
      onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData)
      }}>
      <input className="todo-input" onChange={handleChange} placeholder='Add Notes for Item' name='notes' value={notes} />
      <input className="todo-button" type='submit' value={editMode ? 'Update Item' : 'Add Item'} />
      </form>
    </div>
    </Toggle>
  )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ''
  return {
    formData: state.farmingListForm,
    userId
  }
}

export default connect(mapStateToProps, {updateFarmingListForm})(FarmingListForm)