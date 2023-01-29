import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ptwnlogo from '../images/ptwnlogo.png'

//header component that provides nav links to the different pages of the website
const Header = () =>{
    //the observer objects are implemented in a useEffect here so that animations carry over when a new page is loaded. 
    //without the observer objects the page seems to freeze up.
    useEffect(()=>{
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
    },[])
    //JSX contains several links to different portions of the website using the react router "Link" element
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