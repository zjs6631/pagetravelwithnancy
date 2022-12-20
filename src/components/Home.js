import React from 'react';
import examplePic from '../images/exampleBlog.jpg';
import exampleBook from '../images/exampleBook.jpg';

const Home = () =>{ 
    return(
        <div id='Home'>
            <div id='HomeCurrentRead'>
                <p className='sectionHeader'>Currently reading:</p>
                <div className='currentReadContainer'> 
                <div className='dummyRead'>
                    <p>Accidentally Amy</p>
                    <img src={exampleBook}/>
                </div>
                <div className='dummyRead'>
                    <p>Accidentally Amy</p>
                    <img src={exampleBook}/>
                </div>
                </div>
            </div>
            <div id='HomeRecentPosts'>
                <p className='sectionHeader'>Recent blog posts:</p>
                <div className='blogContainer'>
                <div className='dummyBlog'>
                    <img src={examplePic}></img>
                    <p className='blogDescrip'>This was a good book.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
                </div>
                <div className='dummyBlog'>
                    <img src={examplePic}></img>
                    <p className='blogDescrip'>This was a bad book.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
                </div>
                <div className='dummyBlog'>
                    <img src={examplePic}></img>
                    <p className='blogDescrip'>This was a bad book.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
                </div>
                <div className='dummyBlog'>
                    <img src={examplePic}></img>
                    <p className='blogDescrip'>This was a bad book.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
                </div>
                <div className='dummyBlog'>
                    <img src={examplePic}></img>
                    <p className='blogDescrip'>This was a bad book.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
                </div>
                </div>
            </div>
            <div id='HomeIGPosts'>IG posts:</div>
        </div>
    )
}

export default Home;