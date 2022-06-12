import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import ProjectDetails from './components/Home/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div >
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        </Routes>
        <Toaster />
    </div>
  );
}

export default App;
