import React, {useEffect} from 'react';

const Footer = () =>{


    return(
        <div className='Footer'>
            <button onClick={localStorage.clear()}>Log out</button>
        </div>
    )
}

export default Footer;