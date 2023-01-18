import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Distro from './pages/distro';
import Home from './pages/home';
import Product from './pages/product';

import TopBar from './components/topbar/AppBar';


function App() {
  return (
    <div className='App'>
      <Router>
        <TopBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutarenga" element={<About/>}/>
          <Route path='/distribution' element={<Distro/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
