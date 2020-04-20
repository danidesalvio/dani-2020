import React from 'react';
import logo from '../../images/ddlogo_white.png';

const Nav = () => (
    <div class="nav">
      <div class="nav-logo">
        <a href="/"><img src={logo}/></a>
      </div>
        <div class="nav-items">
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/work'>Work</a>
            {/* <a href='/blog'>Blog</a> */}
        </div>
        
        {/* Slide in Menu */}
        {/* <div className="menu" onclick={MenuIn}>
            <div className='nav-text'>MENU</div>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div> */}
    </div>
)

export default Nav;