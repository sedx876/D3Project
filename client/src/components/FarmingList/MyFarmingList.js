import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Toggle from '../core/Toggle'




const MyFarmingList = props => {
  const itemCards = props.items.length > 0 ?
  props.items.map(i => (
    <p className="todo-row" 
    id="iCard" key={i.id}>
    <Link to={`/items/${i.id}`}>{i.attributes.notes}</Link>
    </p>
    ))
    : 
    null

  return ( 
    <>
    <Toggle>
    {itemCards} 
    </Toggle>
  </>
  )
}

const mapStateToProps = state => {
  return {
    items: state.myFarmingList
  }
}

export default connect(mapStateToProps)(MyFarmingList)