import React, {useEffect} from 'react';
//This component will be used to log the user out and also provide links to IG and goodreads profiles
const Footer = () =>{

    //buttons localstorage.removeItem function removed for now
    //function firing on render for some reason.
    return(
        <div className='Footer'>
            <button onClick={()=>{localStorage.setItem('token', '')}}>Log out</button>
        </div>
    )
}

export default Footer;