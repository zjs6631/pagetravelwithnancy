import React, {useEffect, useState} from 'react';
import examplePic from '../images/exampleBlog.jpg'
import uniqid from 'uniqid';
import {Link} from 'react-router-dom';

const Posts = () =>{

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
                        console.log(entry.target);
                    if(entry.isIntersecting){
                        entry.target.classList.add('showright');
                    } else {
                        entry.target.classList.remove('showright')
                    }
                })
            });
        
            const hiddenElements2 = document.querySelectorAll('.hiddenright');
            hiddenElements2.forEach((el)=> observer2.observe(el));

        const [posts, setPosts] = useState([])

        useEffect(()=>{
                fetch('http://localhost:3000/blog-posts', {method: 'get',
                        dataType: 'json',
                        headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                }})
                .then(response => response.json()
                )
                .then(response => {  
                        setPosts(response);
                
                })
                .catch((err) =>{
                        console.log(err.message);
                })
        },[])


    return(
    <div className='postsPage'>
        <div className='postContainer hiddenright'>
        {posts.map((post)=>{
                return( 
                <div className='fakePost' key={uniqid()}> 
                        <div className='blogTxt'>
                                <h3 className='blogTitle'>{post.title}</h3>
                                <h4 className='blogDescript'>{post.category[0]}</h4>
                        </div>
                        <img src = {`images/${post.img[0]}`} />
                        <Link to={'/post'} state={{post: post}}><button className='dummyBlogButton'>Read More!</button></Link>
                </div>
                )
        })}
        </div>
    </div>
    )
}

export default Posts;