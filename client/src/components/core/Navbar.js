import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from '../Users/Logout'
import '../../styles/navbar.css'
import D3 from '../../images/D3.png'



const Navbar = ({ currentUser, loggedIn }) => {

  return(

  <nav className="navbarContainer">
    <NavLink 
      className="logoWrapper" 
      exact
      to='/home'>
        <img src={D3} className='logoImg'/>
      D3PlayrPad</NavLink>

    

  <div className="navLinksContainer">
    <ul className="linksWrapper">

      <li className="linkItem">
        <NavLink 
          className="linkItem" 
          exact 
          to='/about'>
          About</NavLink>
      </li>

      <li className="linkItem">
        <NavLink 
          className="linkItem" 
          exact activeClassName="active" 
          to='/characters'>
          Characters</NavLink>
      </li>

      <li className="linkItem">
        <NavLink 
        className="linkItem" 
        exact activeClassName="active" 
        to='/characters/new'>
        Add New Character</NavLink>
      </li>



      <li className="linkItem">
        <NavLink 
          className="linkItem" 
          exact activeClassName="active" 
          to='/links'>
          Diablo Links</NavLink>
      </li>
    </ul>
    { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.username}</p><Logout /></> : null}
  </div>
</nav>) 
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(Navbar)