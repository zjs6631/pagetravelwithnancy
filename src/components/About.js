import React from 'react';

const About = () =>{
    return(
    <div className='aboutContainer'>
        <h1>Lets be friends!</h1>
        <div className='exampleLi'>
            <ul>
                <li>one link</li>
                <li>two link</li>
                <li>three link</li>
            </ul>
        </div>
        <div className='examplePic'></div>
        <div className='examplePara'>Aliqua officia labore consequat enim labore do pariatur pariatur id deserunt adipisicing cupidatat. Ipsum labore consectetur nostrud est. Laborum est officia ex qui sit qui sunt et labore. Ex in nulla eu veniam commodo. Reprehenderit sint id commodo excepteur laboris occaecat esse minim dolore cillum ullamco ad.</div>
        <div id='morePic'>
            <div></div>
            <div></div>
            <div>

            </div>
        </div>
        <div className='favAuthors'>
            <h3>Some of my fav Authors</h3>
            <ol>
                <li>author 4</li>
                <li>author 2</li>
                <li>author 3</li>
            </ol>
        </div>
        <div className='favBooks'>
            <h3>Some of my fav Books</h3>
            <ol>
                <li>Book 1</li>
                <li>Book 2</li>
                <li>Book 3</li>
            </ol>
        </div>
    </div>
    )
}

export default About;