
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Shops from './components/Shops';
import './styles/Header.css';
import './styles/Home.css';
import './styles/Sidebar.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route index element = {<Home />}/>
        <Route path='posts' element ={<Posts />}/>
        <Route path='shops' element ={<Shops />}/>
        <Route path='about' element ={<About />}/>
      </Routes>

      <Sidebar />
    </div>
  );
}

export default App;
