import React, { useState } from 'react'
import '../styles/navbar.css'
import {navbar} from '../config'
const Nav = () => {

  const [activeLink , setActiveLink] = useState(navbar[0])

  const handleNavLinkClick = (item) => {
    console.log(item)
     setActiveLink(item)
     window.scrollTo(0,0)
  }

  return (
    <nav className='navbar'>
         <ul className='navbar-list'>
              {
                 navbar.map((item)=>(
                    <li className='navbar-item'>
                          <button 
                            className={`navbar-link ${activeLink === item ? 'active' : ''}`}
                            onClick={() => handleNavLinkClick(item)}
                            data-nav-link
                          >
                            {item}
                            </button>
                    </li>
                 ))
              }
         </ul>
    </nav>
  )
}

export default Nav