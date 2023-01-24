import React, {useEffect} from 'react';
import examplePic from '../images/exampleBlog.jpg';
import construction from '../images/UnderConstrSign.png';

const Shops = () =>{


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
                        entry.target.classList.add('show-right');
                    } else {
                        //entry.target.classList.remove('show-right')
                    }
                })
            });
        
            const hiddenElements2 = document.querySelectorAll('.hidden-right');
            hiddenElements2.forEach((el)=> observer2.observe(el));
        },[])

        

    return(
    <div className='shopsPage'>
        <img src={construction} alt='UNDER CONSTRUCTION'/>
    </div>
    )
}

export default Shops;