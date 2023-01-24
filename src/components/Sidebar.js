import React, {useEffect} from 'react';
import nancyImg from '../images/sidebarNancy.jpg';
import goodreads from '../images/goodreads.png';
import ig from '../images/instagram.png';
import gift from '../images/gift.png';
const Sidebar = () =>{

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

    

    return(
        <div id='Sidebar' className='hidden'>
            <div id='SidebarImage'><img src={nancyImg}></img></div>
            
            <div id='SidebarSummary'>
                <p>Welcome fellow book lovers! Stick around to see the ramblings of this Slytherin-housed, Night-Court-belonging, True-crime-fanatic, Iced-Coffee-obsessed reader. You’ll find mostly romance, fantasy, and young adult reads with the occasional outlier. Through this blog, I’ll cover reviews, lists, and all things bookish faves. Happy Reading! </p>
                <br></br>
                <p>Side Note: The logo for PageTravelWithNancy may be changed in the near future. </p>
            </div>
            <div id='SidebarLinks'>
                <div className='sLink'><img src={goodreads}></img></div>
                <div className='sLink'><img src={ig}></img></div>
                <div className='sLink'><img src={gift}></img></div>
            </div>

        </div>
    )
}

export default Sidebar;