import './App.css';
import React from 'react';
import GlobalNavbar from "./components/GlobalNavbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <GlobalNavbar />
      <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/menu" element={<Menu />} />
            <Route path = "/about" element={<About/>} />
            <Route path = "/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

