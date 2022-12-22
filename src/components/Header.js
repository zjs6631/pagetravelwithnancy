import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <div id='Header'>
            <div className='HeaderLink'><Link to='/'><button className='headerBtn'>Home</button></Link></div>
            <div className='HeaderLink'><Link to='/posts'><button className='headerBtn'>Posts</button></Link></div>
            <div id='HeaderLogo'><h1>Page Travel With Nancy</h1></div>
            <div className='HeaderLink'><Link to='/shops'><button className='headerBtn'>Shops</button></Link></div>
            <div className='HeaderLink' id='aboutTab'>
                <Link to='/about'><button className='headerBtn' id='aboutBtn'>About Me</button></Link>
            </div>
            <div className='HeaderLink' id='headerDropdown'>
                <Link to='/scale'><button className='headerBtn'>Rating Scale</button></Link>
                <Link to='/booksread'><button className='headerBtn'>Books Read 2023</button></Link>
            </div>
        </div>
    )
}

export default Header;