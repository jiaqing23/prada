import React from 'react'
import Logo from '../assets/logo.png'
import SocialMedias from '../assets/social-medias.png'

const FooterPlatform = () => {
  return (
    <div className='navbarPlatform'>
      <div className="navbarPlatformTopRow footerPlatformTopRow">
        <div>
          <img src={Logo} alt="" />
          <p>PRADA</p>
        </div>
        <div className='navbarLinks'>
          <p>Overview</p>
          <p>Company</p>
          <p>Contacts</p>
        </div>
        <div className='socialMedias'>
          <i class="fab fa-github"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fas fa-paper-plane"></i>
        </div>
      </div>
      <div className="navbarPlatformBottomRow">
        <p style={{ color: 'white', fontWeight: '600' }}>Copyright &copy; Design Inc.</p>
      </div>
    </div>
  )
}

export default FooterPlatform
