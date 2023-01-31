import React, {useEffect} from 'react';
import goodreads from '../images/goodreads.png';
import ig from '../images/instagram.png';
import gift from '../images/gift.png';
//This component will be used to log the user out and also provide links to IG and goodreads profiles
const Footer = () =>{

    //buttons localstorage.removeItem function removed for now
    //function firing on render for some reason.
    return(
        <div className='Footer'>
            <div id='FooterLinks'>
                <div className='sLink'><img src={goodreads}></img></div>
                <div className='sLink'><img src={ig}></img></div>
                <div className='sLink'><img src={gift}></img></div>
            </div>
            <button onClick={()=>{
                localStorage.setItem('token', JSON.stringify(''));
                window.location.reload(false); //reload the page when we send the post request.
                }}>Log out
            </button>
        </div>
    )
}

export default Footer;