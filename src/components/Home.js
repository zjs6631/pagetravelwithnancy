import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import currentlyReading2 from '../images/currentlyReading2.png';
import NewestPost from '../images/NewestPost.png';
import {Link} from 'react-router-dom';


const Home = () =>{ 

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

    const [posts, setPosts] = useState([]);
    const [images, setImages] = useState([]);
    const [newestPost, setNewestPost] = useState([]);

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
        
    }, []);

    

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