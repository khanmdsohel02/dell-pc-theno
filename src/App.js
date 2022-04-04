import './App.css';
import { Routes, Route } from "react-router-dom";
import  Home from "./components/home/Home" 
import Reviews from "./components/reviews/Reviews"
import Dashboard from "./components/dashboard/Dashboard"
import Blogs from "./components/blogs/Blogs"
import About from "./components/about/About"
import NotFound from "./components/notfound/NotFound"
import Menu from './components/navbar/Menu';


function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route  path='/'  element={<Home />} />
        <Route  path='/home'  element={<Home />} />
        < Route  path = '/reviews' element = {< Reviews /> } />
        < Route  path = '/dashboard' element = {< Dashboard />}/>
        < Route  path = '/blogs' element = {< Blogs /> } />
        < Route  path = '/about'  element = { < About /> }/>
        <Route  path='*'  element={<NotFound />} />
      </Routes>
      </>
  );
}

export default App