import React from 'react';
import { Link } from 'react-router-dom';
import ptwnlogo from '../images/ptwnlogo.png'

const Header = () =>{

    const observer = new IntersectionObserver((entires)=>{
        entires.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                //entry.target.classList.remove('show')
            }
        })
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> observer.observe(el));

    const observer2 = new IntersectionObserver((entires)=>{
        entires.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('showright');
            } else {
                //entry.target.classList.remove('show-right')
            }
        })
    });

    const hiddenElements2 = document.querySelectorAll('.hiddenright');
    hiddenElements2.forEach((el)=> observer2.observe(el));

    return(
        <div id='Header' className='hidden'>
            
            <div id='HeaderLogo'>
                <img src={ptwnlogo} id='headerLogo'/>
                <h1>Page Travel With Nancy</h1>
                
            </div>
            <div className='HeaderLink'><Link to='/'><button className='headerBtn'>Home</button></Link></div>
            <div className='HeaderLink'><Link to='/posts'><button className='headerBtn'>Posts</button></Link></div>
            <div className='HeaderLink'><Link to='/shops'><button className='headerBtn'>Shops</button></Link></div>
            <div className='HeaderLink' id='aboutTab'>
                <Link to='/about'><button className='headerBtn' id='aboutBtn'>About Me</button></Link>
            </div>
            <div className='HeaderLink' id='headerDropdown'>
                <Link to='/scale'><button className='headerBtn'>-Rating Scale</button></Link>
                <Link to='/booksread'><button className='headerBtn'>-Books Read 2023</button></Link>
            </div>
        </div>
    )
}

export default Header;