import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import currentlyReading2 from '../images/currentlyReading2.png';
import NewestPost from '../images/NewestPost.png';
import {Link} from 'react-router-dom';


const Home = () =>{ 

    
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
            <div id='HomeName'>
                <h1 id='pageName'>Page Travel With Nancy</h1>
                <h3>For all your bookish content</h3>
            </div>
            <div id='HomeCurrentRead'>
                <img src={currentlyReading2} />
            </div>
            <div id='HomeThreeLinks'>
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
            <Link to={`/posts/post`}>
                <div id='newestPost'>
                    <img src={NewestPost} />
                    <button className='viewNewPost'>View Post</button>
                </div>
            </Link>
            
            <h3 className='sectionHeader'>Recent Posts:</h3>
            <div id='lastSix'>
                {posts.map((post)=>{
                    return(
                    <div className='recentPost' key={uniqid()}>
                        <img src= {`/images/${post.img[0]}`}/>
                    </div>
                    )
                })}
            </div>
            
            
            
            
        </div>
    )
}

export default Home;