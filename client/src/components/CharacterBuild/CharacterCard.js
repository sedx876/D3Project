import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/characterCard.css'
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

//presentational component
const CharacterCard = ({ character }) => {

  return (

    character ?
    <div id='characterCardDiv'>
      <div className="characterCard">

        <div className='cCardheader'>
          <div className="cCardheader"><h3><span>{character.attributes.title}</span></h3></div>
        </div>
       
        <div className="card-body">

          <div id='cCText'>
            <GiNinjaHeroicStance id='cCIcon'/>
            <h3 className="card-title"><span id='cCSpan'>Character Class:</span> {character.attributes.character_klass}</h3>
          </div>

          <div id='cCText'>
            <GiElfHelmet id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Helm:</span> {character.attributes.helm}</p>
          </div>

          <div id='cCText'>
            <GiSpikedShoulderArmor id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Shoulders:</span> {character.attributes.shoulders}</p>
          </div>

          <div id='cCText'>
            <GiGauntlet id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Gloves:</span> {character.attributes.gloves}</p>
          </div>

          <div id='cCText'>
            <GiLeatherArmor id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Chest Armor:</span> {character.attributes.chest_armor}</p>
          </div>

          <div id='cCText'>
            <GiBeltBuckles id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Belt:</span> {character.attributes.belt}</p>
          </div>

          <div id='cCText'>
            <GiArmoredPants id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Pants:</span> {character.attributes.pants}</p>
          </div>

          <div id='cCText'>
            <GiSteeltoeBoots id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Boots:</span> {character.attributes.boots}</p>
          </div>

          <div id='cCText'>
            <GiBracer id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Bracers:</span> {character.attributes.bracers}</p>
          </div>

          <div id='cCText'>
            <GiNecklace id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Amulet:</span> {character.attributes.amulet}</p>
          </div>

          <div id='cCText'>
            <GiDoorRingHandle id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Ring 1:</span> {character.attributes.ring_1}</p>
          </div>

          <div id='cCText'>
            <GiGlobeRing id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Ring 2:</span> {character.attributes.ring_2}</p>
          </div>

          <div id='cCText'>
            <GiSwitchWeapon id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Weapon:</span> {character.attributes.weapon}</p>
          </div>

          <div id='cCText'>
            <GiBorderedShield id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Offhand:</span> {character.attributes.offhand}</p>
          </div>

          <div id='cCText'>
            <GiFireGem id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Gem Notes:</span> {character.attributes.gem_notes}</p>
          </div>

          <div id='cCText'>
            <GiCompanionCube id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Kanai's Cube:</span> {character.attributes.kanais_cube}</p>
          </div>

          <div id='cCText'>
            <GiSkills id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Active Skills:</span> {character.attributes.active_skills}</p>
          </div>

          <div id='cCText'>
            <GiSkills id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>Passive Skills:</span> {character.attributes.passive_skills}</p>
          </div>

          <div id='cCText'>
            <GiStabbedNote id='cCIcon'/>
            <p className="card-text"><span id='cCSpan'>General Build Notes:</span> {character.attributes.general_build_notes}</p>
          </div>

          
          <Link className='logoutBtn' id='createBtn' to={`/characters/${character.id}/edit`}>Edit or Delete this Character</Link>
        </div>
      </div>
    </div>
   
  : 
  <p>Character not found</p>
  
  )
}



export default CharacterCard