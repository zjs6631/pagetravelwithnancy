import React from 'react';

const Home = () =>{ 
    return(
        <div id='Home'>
            <div id='HomeCurrentRead'>
                Currently reading: 
                <div className='dummyRead'>
                    <p>Book title:</p>
                    <p>Book img</p>
                </div>
                <div className='dummyRead'>
                    <p>Book title:</p>
                    <p>Book img</p>
                </div>
                <p>----------------></p>
            </div>
            <div id='HomeRecentPosts'>Recent blog posts:</div>
            <div id='HomeIGPosts'>IG posts:</div>
        </div>
    )
}

export default Home;