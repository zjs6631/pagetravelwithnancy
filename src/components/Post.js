import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import currentlyReading2 from '../images/currentlyReading2.png';
import NewestPost from '../images/NewestPost.png';
import {Link} from 'react-router-dom';

const Post = (props) =>{



    return(

        <div>
            <h1>Test</h1>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Post;