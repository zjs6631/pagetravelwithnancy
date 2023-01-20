import React from 'react';
import examplePic from '../images/exampleBlog.jpg';
import exampleBook from '../images/exampleBook.jpg';
import blogCover from '../images/BlogCover.png';
import currentlyReading2 from '../images/currentlyReading2.png';
import RatingScale from '../images/Rating_System.png';
import WrapUp2022 from '../images/2022WrapUp.png';
import AboutMe from '../images/ABOUT_ME_COVER.png';
import ptwnLogo from '../images/ptwnlogo.png';

const Home = () =>{ 
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
                <div class='threelinks'>
                    <div id='ratingScale'></div>
                    <h3>See My Rating Scale Here</h3>
                </div>
                <div class='threelinks'>
                    <div id='wrapup'></div>
                    <h3>Want to know what I read in 2022?</h3>
                </div>
                <div class='threelinks'>
                    <div id='aboutmeicon'></div>
                    <h3>Learn more about me!</h3>
                </div>
            </div>
            
            
            
            <div id='HomeIGPosts'>
                <p>IG posts:</p>
                <div className='igPostContainer'>
                    <div>
                        <img src={examplePic}></img>
                    </div>
                    <div>
                        <img src={examplePic}></img>
                    </div>
                    <div>
                        <img src={examplePic}></img>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Home;