
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import './styles/Header.css';
import './styles/Home.css';
import './styles/Sidebar.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element = {<Home />}/>
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
