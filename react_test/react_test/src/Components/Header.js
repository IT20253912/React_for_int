import React from 'react';
import closeMenu from '../svg/close-square-svgrepo-com.svg'

const Header = () => {
  return (
    <header className='header_container'>
        <h1>chathudu <span>developmemnt</span></h1>
        <nav>
            <ul>
               
                <div className='header_menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Projects</li>
                </div>
                
            </ul>
        </nav>
    </header>
  )
}

export default Header;