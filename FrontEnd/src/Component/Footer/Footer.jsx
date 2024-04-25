import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='title'>Arche Wood</div>
      <div className='icons'>
        <div><FontAwesomeIcon icon={faFacebook}  /></div>
        <div><FontAwesomeIcon icon={faInstagram} /> </div>
        <div><FontAwesomeIcon icon={faWhatsapp} /></div>
      </div>
    </div>
  )
}

export default Footer
