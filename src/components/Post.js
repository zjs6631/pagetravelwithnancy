import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import uniqid from 'uniqid';
import currentlyReading2 from '../images/currentlyReading2.png';
import NewestPost from '../images/NewestPost.png';
import {Link} from 'react-router-dom';

const Post = (props) =>{

    const location = useLocation();
    const {post} = location.state;

    console.log(post);
    
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
        </div>
    )
}

export default Post;