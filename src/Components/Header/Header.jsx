import React from 'react'
import './Header.css';
import profile from '../../Assets/user3.png';
import Headbtn from './Headbtn';
import HeaderIcon from './HeaderIcon';
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        
        {/* description part */}
        <h5>Hello I am</h5>
        <h1>Cristopher</h1>
        <h5 className='text-light'>A Fullstack Developer</h5>
       <Headbtn/>
        <HeaderIcon/>
        
        {/* image part */}
        <div className="picture">
          <img src={profile} alt="profilepicture" />
        </div>
        <a href="#about"className='Scroll'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header