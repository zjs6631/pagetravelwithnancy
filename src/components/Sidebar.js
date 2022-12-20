import React from 'react';
import nancyImg from '../images/sidebarNancy.jpg';
import goodreads from '../images/goodreads.png';
import ig from '../images/instagram.png';
import gift from '../images/gift.png';
const Sidebar = () =>{
    return(
        <div id='Sidebar'>
            <div id='SidebarImage'><img src={nancyImg}></img></div>
            <div id='SidebarSummary'><p>Excepteur ut culpa minim incididunt pariatur amet ut eu amet. Anim elit est anim culpa ea id et laboris aliquip nulla dolore ad. Tempor est nisi voluptate nostrud excepteur anim magna in. Tempor minim occaecat elit esse tempor.</p></div>
            <div id='SidebarLinks'>
                <div className='sLink'><img src={goodreads}></img></div>
                <div className='sLink'><img src={ig}></img></div>
                <div className='sLink'><img src={gift}></img></div>
            </div>

        </div>
    )
}

export default Sidebar;