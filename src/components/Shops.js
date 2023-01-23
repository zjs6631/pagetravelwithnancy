import React from 'react';
import examplePic from '../images/exampleBlog.jpg';

const Shops = () =>{

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

    return(
    <div className='shopsPage'>
        <h1>Under Construction</h1>
    </div>
    )
}

export default Shops;