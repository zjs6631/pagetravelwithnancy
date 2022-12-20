import React from 'react';

const Home = () =>{ 
    return(
        <div id='Home'>
            <div id='HomeCurrentRead'>
                <p className='sectionHeader'>Currently reading:</p> 
                <div className='dummyRead'>
                    <p>Book title:</p>
                    <p>Book img</p>
                </div>
                <div className='dummyRead'>
                    <p>Book title:</p>
                    <p>Book img</p>
                </div>
                <p>----------------</p>
            </div>
            <div id='HomeRecentPosts'>
                <p className='sectionHeader'>Recent blog posts:</p>
                <div className='dummyBlog'>
                    <p className='blogTitle'>Blog #1</p>
                    <p className='blogDescrip'>This was a good book.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
                </div>
                <div className='dummyBlog'>
                    <p className='blogTitle'>Blog #2</p>
                    <p className='blogDescrip'>This was a bad book.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
                </div>
            </div>
            <div id='HomeIGPosts'>IG posts:</div>
        </div>
    )
}

export default Home;