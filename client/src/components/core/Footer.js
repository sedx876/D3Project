import React from 'react'
import mature from '../../images/mature.png'
import '../../styles/footer.css'


const Footer = () => {

  return(
    <footer>
      <p>&copy;2021   
        <span role="img" aria-label="devil">👹</span>D3PlayrPad<span role="img" aria-label="devil">👹</span> 
      </p>
      <p>This app has no affiliation with Diablo 3 or Blizzard Entertainment, INC.</p>
      <p><span><img className='mature' alt="mature rating" src={mature}/></span>Rated Mature 17+ by the ESRB for Blood, Gore and Violence</p>
      
    </footer>
  )
}

export default Footer