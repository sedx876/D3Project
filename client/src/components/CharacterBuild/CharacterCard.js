import React from 'react'
import {Link} from 'react-router-dom'


//presentational component
const CharacterCard = ({ character }) => {

  return (

    character ?

    <div className="card text-white bg-dark mb-2">
      <div className="card-header"><h3><span>{character.attributes.title}</span></h3></div>
        <div className="card-body">
          <h3 className="card-title"><span>Character Class:</span> {character.attributes.character_klass}</h3>
          <p className="card-text"><span>Helm:</span> {character.attributes.helm}</p>
          <p className="card-text"><span>Shoulders:</span> {character.attributes.shoulders}</p>
          <p className="card-text"><span>Gloves:</span> {character.attributes.gloves}</p>
          <p className="card-text"><span>Chest Armor:</span> {character.attributes.chest_armor}</p>
          <p className="card-text"><span>Belt:</span> {character.attributes.belt}</p>
          <p className="card-text"><span>Pants:</span> {character.attributes.pants}</p>
          <p className="card-text"><span>Boots:</span> {character.attributes.boots}</p>
          <p className="card-text"><span>Bracers:</span> {character.attributes.bracers}</p>
          <p className="card-text"><span>Amulet:</span> {character.attributes.amulet}</p>
          <p className="card-text"><span>Ring 1:</span> {character.attributes.ring_1}</p>
          <p className="card-text"><span>Ring 2:</span> {character.attributes.ring_2}</p>
          <p className="card-text"><span>Weapon:</span> {character.attributes.weapon}</p>
          <p className="card-text"><span>Offhand:</span> {character.attributes.offhand}</p>
          <p className="card-text"><span>Gem Notes:</span> {character.attributes.gem_notes}</p>
          <p className="card-text"><span>Kanai's Cube:</span> {character.attributes.kanais_cube}</p>
          <p className="card-text"><span>Active Skills:</span> {character.attributes.active_skills}</p>
          <p className="card-text"><span>Passive Skills:</span> {character.attributes.passive_skills}</p>
          <p className="card-text"><span>General Build Notes:</span> {character.attributes.general_build_notes}</p>
          <Link className="btn btn-outline-warning" to={`/characters/${character.id}/edit`}>Edit or Delete this Character</Link>
  </div>
  </div>
  : 
  <p>Character not found</p>
  
  )
}



export default CharacterCard