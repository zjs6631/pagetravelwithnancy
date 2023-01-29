import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import currentlyReading2 from '../images/currentlyReading2.png';
import NewestPost from '../images/NewestPost.png';
import {Link} from 'react-router-dom';

//home page component 
const Home = () =>{ 

    
    //we get the book data from the database using a fetch api call 
    //we process the data by turning it into json then setting that state of the posts to that response

    useEffect(()=>{

        fetch('http://localhost:3000/', {method: 'get',
        dataType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }})
            .then(response => response.json()
            )
            .then(response => {
                
                setPosts(response);
                
                setNewestPost(response[response.length - 1]);
            })
            .catch((err) =>{
                console.log(err.message);
            })


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
        
            
        
    }, []);

    //the states we keep for the home page
    const [posts, setPosts] = useState([]);
    const [images, setImages] = useState([]); //may be used in the future when image storage is readdressed
    const [newestPost, setNewestPost] = useState([]);
    
    //the JSX contains some Link elements that pass state to the element is is linked to.
    return(
        <div id='Home'>
            <div id='HomeName' className='hidden'>
                <h1 id='pageName'>Page Travel With Nancy</h1>
                <h3>For all your bookish content</h3>
            </div>
            <div id='HomeCurrentRead' className='hidden'>
                <img src={currentlyReading2} />
            </div>
            <div id='HomeThreeLinks' className='hidden'>
                
                <div className='threelinks'>
                    <div id='ratingScale'></div>
                    <h3>See My Rating Scale Here</h3>
                </div>
                
                
                <div className='threelinks'>
                    <div id='wrapup'></div>
                    <h3>Want to know what I read in 2022?</h3>
                </div>
                
                
                <div className='threelinks'>
                    <div id='aboutmeicon'></div>
                    <h3>Learn more about me!</h3>
                </div>
                
            </div>
            <Link to={`/post`} state={{post:posts[0]}}>
                <div id='newestPost' className='hidden'>
                    <img src={NewestPost} />
                    <button className='viewNewPost'>View Post</button>
                </div>
            </Link>
            
            <h3 className='sectionHeader'>Recent Posts:</h3>
            <div id='lastSix' className='hidden'>
                {posts.map((post)=>{
                    return(
                    
                    <div className='recentPost' key={uniqid()}>
                        <Link to={'/post'} state={{post: post}}>
                        <img src= {`/images/${post.img[0]}`}/>
                        </Link>
                    </div>
                    
                    )
                })}
            </div>
            
            
            
            
        </div>
    )
}

export default Home;