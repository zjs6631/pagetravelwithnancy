import React from 'react';
import examplePic from '../images/exampleBlog.jpg'

const Posts = () =>{
    return(
    <div className='postsPage'>
        <h1>Blog posts:</h1>
        <div className='postContainer'>
            <div className='fakePost'>
                    <img src={examplePic}></img>
                    <p className='blogDescrip'>Occaecat consectetur ex et sunt duis in fugiat velit qui culpa nulla labore. Laboris sunt labore ipsum nisi culpa excepteur sit sunt ullamco duis aliquip elit sit. Sunt aute quis veniam pariatur incididunt amet exercitation. Eiusmod aliqua voluptate pariatur aute minim duis esse esse adipisicing aliqua ullamco.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
            </div>
            <div className='fakePost'>
                    <img src={examplePic}></img>
                    <p className='blogDescrip'>Esse ea sint nostrud commodo cupidatat incididunt sit sint dolore do fugiat aliquip. Lorem ullamco sint incididunt id tempor qui. Nisi culpa ullamco sit mollit eu. Laborum incididunt cupidatat eu duis commodo Lorem anim elit incididunt minim minim duis nisi nostrud. Ad est exercitation elit do aliquip aliqua ea officia Lorem. Est nisi aute non consequat ullamco incididunt esse exercitation.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
            </div>
            <div className='fakePost'>
                    <img src={examplePic}></img>
                    <p className='blogDescrip'>Occaecat consectetur ex et sunt duis in fugiat velit qui culpa nulla labore. Laboris sunt labore ipsum nisi culpa excepteur sit sunt ullamco duis aliquip elit sit. Sunt aute quis veniam pariatur incididunt amet exercitation. Eiusmod aliqua voluptate pariatur aute minim duis esse esse adipisicing aliqua ullamco.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
            </div>
            <div className='fakePost'>
                    <img src={examplePic}></img>
                    <p className='blogDescrip'>Occaecat consectetur ex et sunt duis in fugiat velit qui culpa nulla labore. Laboris sunt labore ipsum nisi culpa excepteur sit sunt ullamco duis aliquip elit sit. Sunt aute quis veniam pariatur incididunt amet exercitation. Eiusmod aliqua voluptate pariatur aute minim duis esse esse adipisicing aliqua ullamco.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
            </div>
            <div className='fakePost'>
                    <img src={examplePic}></img>
                    <p className='blogDescrip'>Occaecat consectetur ex et sunt duis in fugiat velit qui culpa nulla labore. Laboris sunt labore ipsum nisi culpa excepteur sit sunt ullamco duis aliquip elit sit. Sunt aute quis veniam pariatur incididunt amet exercitation. Eiusmod aliqua voluptate pariatur aute minim duis esse esse adipisicing aliqua ullamco.</p>
                    <button className='dummyBlogButton'>Read More! -></button>
            </div>
        </div>
    </div>
    )
}

export default Posts;