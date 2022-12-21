import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <div id='Header'>
            <div className='HeaderLink'><Link to='/'><button className='headerBtn'>Home</button></Link></div>
            <div className='HeaderLink'><Link to='/posts'><button className='headerBtn'>Posts</button></Link></div>
            <div id='HeaderLogo'><h1>Page Travel With Nancy</h1></div>
            <div className='HeaderLink'><Link to='/shops'><button className='headerBtn'>Shops</button></Link></div>
            <div className='HeaderLink'><Link to='/about'><button className='headerBtn'>About Me</button></Link></div>
        </div>
    )
}

export default Header;