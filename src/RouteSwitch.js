import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import Shops from "./components/Shops";
import BooksRead from "./components/BooksRead";
import RatingScale from "./components/RatingScale";

//RouteSwitch handles all of our routes
//"/*" is needed to be able to transition between the pages from the home page

const RouteSwitch = () =>{

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<App />}>
                    <Route index element = {<Home />}/>
                    <Route path='posts' element ={<Posts />}/>
                    <Route path='shops' element ={<Shops />}/>
                    <Route path='about' element ={<About />}/>
                    <Route path="booksread" element ={<BooksRead/>}/>
                    <Route path='scale' element={<RatingScale/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default RouteSwitch;