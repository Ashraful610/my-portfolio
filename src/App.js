import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import ProjectDetails from './components/Home/ProjectDetails/ProjectDetails';
import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div >
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        </Routes>
        <Toaster />
    </div>
  );
}

export default App;
