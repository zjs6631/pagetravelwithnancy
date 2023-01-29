import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import uniqid from 'uniqid';
import {format} from "date-fns";
import Footer from './Footer';

const Post = (props) =>{

    const location = useLocation();
    const {post} = location.state;

    if(post === null){
        post = location.state.post;
    }
    const [token, setToken] = useState('');
    
    const [comments, setComments] = useState([]);

    const [currComment, setCurrComment] = useState('');

    const navigate = useNavigate();

    function handleChange(event) {
        setCurrComment(event.target.value);
        console.log(event.target.value);
    }

    function handleSubmit(event){

        event.preventDefault();

        setToken(localStorage.getItem('token'));

        
        /*
        if(token == ''){
            navigate('/login', {
                state: {post: post}
            })
        }
        */
        
        
        fetch(`http://localhost:3000/blog-posts/${post._id}`, {method: 'post',
        dataType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        },
        body: JSON.stringify({
            comment: currComment,
            postID: post._id,
            authorID: "me",
        })})
        .then(()=>{
            //setComments(comments.push(currComment));
        })
        .catch((error) =>{
            if (error.response.status === 403){
                console.log("here!")
                navigate('/login', {
                    state: {post: post,}
                });
                
            } else {
                navigate('/blog-posts')
            }
        });
        console.log(token);
        console.log(comments)
        
            
    }

    
    

    useEffect(()=>{

        fetch(`http://localhost:3000/blog-posts/${post._id}`, {method: 'get',
        dataType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }})
            .then(response => response.json()
            )
            .then(response => {
                
                setComments(response.comments);
                
    
            })
            .catch((err) =>{
                console.log(err.message);
            })

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
        console.log(comments);
    },[])

    
    

    
    
    
    
    return(

        <div id='mainContainer'>
            <div className='postHeader'>
                <h1>{post.title}</h1>
                <h2>{post.category[0]}</h2>
            </div>
            <div className='postImages'></div>
            <div className='postBody'>
                <p>{post.body}</p>
            </div>
            <div className='postComments'>
                <h4 id='commentHeader'>Comments</h4>
                {
                    comments.map((comment)=>{
                        return( 
                            <div className='comment' key={uniqid()}>
                            <p>{comment.authorID.username}</p>
                            <p>{format(new Date(comment.createdAt), 'PPpp')}</p>
                            <p>{comment.comment}</p>
                            </div>
                        )
                    })}
            </div>
            <div className='commentForm'>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='comment' value={currComment} onChange={handleChange} />
                    <input type='submit' value='Submit'/>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Post;