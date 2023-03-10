import React, { useEffect, useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Shops from './components/Shops';
import Post from './components/Post';
import BooksRead from './components/BooksRead';
import RatingScale from './components/RatingScale';
import Login from './components/Login';
import './styles/Header.css';
import './styles/Home.css';
import './styles/Sidebar.css';
import './styles/Posts.css';
import './styles/Shops.css';
import './styles/Post.css';
import './styles/About.css';
import './styles/RatingScale.css';
import './styles/Footer.css';
import CreateUserForm from './components/CreateUserForm';

function App() {

  
  
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route index element = {<Home />}/>
        <Route path='posts' element ={<Posts />}>
        </Route>
        <Route path='post' element = {<Post />}/>
        
        <Route path='shops' element ={<Shops />}/>
        <Route path='about' element ={<About />}/>
        <Route path="booksread" element ={<BooksRead/>}/>
        <Route path='scale' element={<RatingScale/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='createAccount' element={<CreateUserForm/>} />
      </Routes>

      <Sidebar />
    </div>
  );
}

export default App;
