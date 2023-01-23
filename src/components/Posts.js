import React, {useEffect, useState} from 'react';
import examplePic from '../images/exampleBlog.jpg'
import uniqid from 'uniqid';

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
        <div className='postContainer'>
        {posts.map((post)=>{
                return( 
                <div className='fakePost' key={uniqid()}> 
                        <div className='blogTxt'>
                                <h3 className='blogTitle'>{post.title}</h3>
                                <h4 className='blogDescript'>{post.category[0]}</h4>
                        </div>
                        <img src = {`images/${post.img[0]}`} />
                        <button className='dummyBlogButton'>Read More!</button>
                </div>
                )
        })}
        </div>
    </div>
    )
}

export default Posts;