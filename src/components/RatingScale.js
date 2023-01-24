import React, {useEffect} from "react";
import ratingScale from "../images/Rating_System.png"

const RatingScale = () =>{

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
    },[])

    

    return(
        <div id="scalePageContainer">
            <div id="scaleTitle"><h1>My Rating Scale</h1></div>
            <div id="scaleImg"><img src={ratingScale} alt='my rating scale'/></div>
            <div id="scaleDescript">
                <p>I recently changed the way that I provided my ratings for books. I wrote on a recent Instagram post that authors put a lot of time and hard work into their writing and getting their books published and bad reviews don’t always help when it’s something that simply may not be a reader’s cup of tea. What motivated me to move from the typical 1-5 stars to the below way of rating, was a specific book review I saw on Goodreads. The review listed the reasons why they were rating the book a 1 star and how even that was generous but the description to me was .. interesting. It talked about how they did not even finish the book and how they disliked how it was too detailed in how it was related to sports and their strict workout regime. Isn’t that just the authors way of setting the tone for the rest of the book? I wouldn’t except a trigger warning for this particular book when on the cover it clearly shows that it will be a sports book.

I’m a firm believer that not all books will be for everyone but that doesn’t mean you should trash talk that book because you don’t like sports. That being said, ever since being part of the bookstagram community, I have gotten a first hand look at how indie authors put so much love and dedication to their work and I am here to support that. And just another reason why I also don’t rate any Wattpad books I read. Those authors post books for public enjoyment for more often than not: free. I will most likely never post about books that I DNF (do not finish) but can be found on my Goodreads profile, with no rating, but with an explanation as to why it was DNF.</p>
            </div>
            <div id="scaleListDiv">
                <ul id="scaleList">
                    <li>
                        <h1 id="listHeader1">Loved It</h1>
                        <ul>
                            <li><p>
                            This rating is reserved for those books that reeled me in from the very first page. The kind of book you think about while at work, running errands, cooking, etc. The kind of book that you can’t wait to get back home to read and left you wanting more of the world, the characters, or even the plot line.
                            </p></li>
                        </ul>
                    </li>
                

                
                    <li>
                        <h1 id="listHeader2">Enjoyed It</h1>
                        <ul>
                            <li><p>
                            This rating serves the population of books that had aspects to it that I enjoyed, but didn’t necessarily feel attached to. Maybe it had a certain character that kept me coming back to this or a particular plot hole that I wanted to know what happened in it all to finish the book.
                            </p></li>
                        </ul>
                    </li>
                

                
                    <li>
                        <h1 id="listHeader3">Not my cup of tea, but could be yours</h1>
                        <ul>
                            <li><p>
                            A book rating for those that I might have struggled to finish or a book that didn’t necessarily captivate me. Not specifically for it being a bad book, but could be for simply being something out of my realm and understanding but could be thoroughly enjoyed by others.
                            </p></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id='theFooter'>
                Foot will be here
            </div>
        </div>
    )
}

export default RatingScale;