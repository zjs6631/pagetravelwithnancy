import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import uniqid from 'uniqid';
import {format} from "date-fns";
import Footer from './Footer';
//Component that shows a specific post and a comment section at the bottom of the page
const Post = (props) =>{

    //location and navigation used to handle moving between login page and the post page when login is requested/provided
    const location = useLocation();
    
    const {post} = location.state;

    if(post === null){
        post = location.state.post;
    }
    //we keep a state to hold the token value, comments array, and the comment currently being typed
    const [token, setToken] = useState('');
    
    const [comments, setComments] = useState([]);

    const [currComment, setCurrComment] = useState('');

    const navigate = useNavigate();

    //handleChange maintains value of currently typed comment
    function handleChange(event) {
        setCurrComment(event.target.value);
        console.log(event.target.value);
    }


    function handleSubmit(event){

        event.preventDefault();

        setToken(localStorage.getItem('token')); //set our token state variable to be the value of the token stored in local storage

        
        console.log(localStorage.getItem('token') === 'undefined');
        
        if(localStorage.getItem('token') === 'undefined' || JSON.parse(localStorage.getItem('token')) == ''){
            navigate('/login', {
                state: {post: post}
            })
        }
        
        
        //POST api call to send a new comment
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
            window.location.reload(false); //reload the page when we send the post request.
        })
        .catch((error) =>{
            console.log(error);
            if (error.response.status === 403){
                console.log("here!")
                navigate('/login', {
                    state: {post: post,}
                });
                
            } else {
                navigate('/blog-posts')
            }
        });
        

        
            
    }

    
    
    //useEffect hook that involves an api call to get the post information we want to d
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
                <div className='commentContainer'>
                {
                    comments.map((comment)=>{
                        return( 
                            <div className='comment' key={uniqid()}>
                            <p className='commentAuthor'>{comment.authorID.username}</p>
                            <p className='commentDate'>{format(new Date(comment.createdAt), 'PPpp')}</p>
                            <p className='commentBody'>{comment.comment}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='commentForm'>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='comment' value={currComment} onChange={handleChange} />
                    <input type='submit' value='Submit'/>
                </form>
            </div>
            <div className='Footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Post;