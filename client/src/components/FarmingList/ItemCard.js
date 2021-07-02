import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/farminglist.css'


const ItemCard = ({ item }) => {
  return (

  item ?

    <div className="">
      
      <p className="todo-row"> {item.attributes.notes}</p>
      <br/>
      <Link className="todo-button" to={`/items/${item.id}/edit`}>Edit or Delete this Item</Link>
      </div>
    
    : 
    <p>Farming Item not found</p>
  )
}

export default ItemCard