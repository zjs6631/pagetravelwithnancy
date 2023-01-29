import React, {useEffect} from 'react';
import DisneyTrip from '../images/DisneyTrip.jpg';
import Dahlia from '../images/Dahlia.jpg';
import aboutMe from '../images/ABOUT_ME_COVER.png';
/*
This will render the component used to display the about page for the blog
*/
const About = () =>{

    //useEffect hook used to implement observer objects that are used to animate items on the page
    //observer1 brings items in from the left
    //observer 2 brings items in from the right
    useEffect(()=>{
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
                    //entry.target.classList.remove('showright')
                }
            })
        });
    
        const hiddenElements2 = document.querySelectorAll('.hiddenright');
        hiddenElements2.forEach((el)=> observer2.observe(el));
    },[]) //need to pass the empty array or GET requests will flood the API


    

    

    //return the JSX to show all About info. Nothing needs to be obtained from the database for this page.
    return(
    <div className='aboutContainer'>
        <div id='aboutMeTitle' className='hiddenright'><h1>About Me</h1></div>
        <div id='aboutMeBanner' className='hidden'><img src={aboutMe} alt='Cover Image'/></div>
        <div className='aboutTextBlock1 hiddenright'>
            <div className='picBlock hidden'>
                <img src={DisneyTrip} alt='DisneyPic'/>
                <p className='picDescript'>Picture of my most recent Disney trip - fall of 2022. Peep the Hogwarts tattoo on my right shoulder. :)  </p>
            </div>
            <p className='aboutText'>
            Welcome! My name is Nancy and I am a 20 something year old, US living, lover of all things bookish. Like many, my love for reading has been with me since I could start sounding out words. I vividly remember the weekly visits to our small town library and going straight to A Series of Unfortunate Events books in the children’s section and hoping the next book in the series wasn’t checked out. I’m pretty sure I lived at the library, not only for borrowing books but for spending time there doing projects, reading, attending kid’s events and working towards completing my summer challenges for free swag.

I can still picture the exact memory of going into the mall’s Books-A-Million and going to the middle grade chapter books section and telling my parents I was ready to get a picture-less chapter book. A pivotal moment in the life of Nancy. I may not remember the title of that book, but I remember the feelings that coursed through me as we walked to pay for that book. The excitement, the thrill, even the nervousness of not knowing what reading it will be like because it’s something NEW. And yet, I find myself still feeling that way every time I pick up a new read. That’s why I read.
            </p>
            
        </div>
        <div className='aboutTextBlock2 hidden'>
            <div>
            <p className='aboutText'>
            The beautiful coastal town we live in is still growing and I always find myself walking into a new local bookstore to support. We have 5 fur babies, 3 cats and 2 dogs. Apart from a book, I can always be found with an iced coffee, a baked good, or smuggling chocolate around our toddler. My go-to genres are romance, fantasy, and young adult. I will read e-books and physical books and will even partake in the occasional Wattpad book. I will read anything from Hallmark inspired, small-town, feel-good romance books to gut-wrenching, world-building, enemy slaying fantasy books that will take me from world to world.

Thanks for following me on this journey, and happy reading!
            </p>
            <ul>
                <li> Auto-Buy Authors:
                    <ul>
                        <li>Sarah Dessen</li>
                        <li>Sue Lynn Tan</li>
                        <li>Kiera Cass</li>
                        <li>Sarah J Mass</li>
                    </ul>
                </li>
            </ul>
            </div>
            <div className='picBlock hiddenright'>
                <img src={Dahlia} alt='DahliaPic'/>
                <p className='picDescript'>Picture of one of my cats, Dahlia, where she likes to lounge while we sit in my office space.</p>
            </div>
        </div>
        <div id='letsBeFriends' className='hidden'><h1>Let's be friends!</h1></div>
        <div id='Socials'>
            <div id='GoodReads'>
            
            </div>
            <div id='Insta'>

            </div>
        </div>
        <div id='footerHere' > This will be the footer</div>
    </div>
    )
}

export default About;