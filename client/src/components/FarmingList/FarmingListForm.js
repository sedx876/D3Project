import React from 'react'
import {connect} from 'react-redux'
import {updateFarmingListForm} from '../../actions/farmingListForm'



const FarmingListForm = ({ formData, updateFarmingListForm, handleSubmit, editMode }) => {

  const { notes } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateFarmingListForm(name, value)
  }

  return (
    <div className="card text-white bg-dark">
      <form className="form-group col-sm-4"
      onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData)
      }}>
      <input className="form-control col-sm-8" onChange={handleChange} placeholder='Add Notes for Item' name='notes' value={notes} />
      <input className="btn btn-outline-warning" type='submit' value={editMode ? 'Update Item' : 'Add Item'} />
      </form>
    </div>
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