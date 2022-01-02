import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import './NavbarPlatform.css'

const NavbarPlatform = () => {
  return (
    <div className='navbarPlatform'>
      <div className="navbarPlatformTopRow">
        <div>
          <img src={Logo} alt="" />
          <p>PRADA</p>
        </div>
        <div className='navbarLinks'>
          <Link to='/'>
            <p>Overview</p>
          </Link>
          <p>Company</p>
          <p>Contacts</p>
        </div>
        <div>
          <p>EN <i class="fas fa-chevron-down"></i></p>
          <button>Login</button>
        </div>
      </div>
      <div className="navbarPlatformBottomRow">
        <div>
          <p>RESEARCH (COMPANY / RESEARCH NAME)</p>
          <button><i class="fas fa-search"></i>SEARCH</button>
        </div>
      </div>
    </div>
  )
}

export default NavbarPlatform
