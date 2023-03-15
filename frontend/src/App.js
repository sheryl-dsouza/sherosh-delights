import './App.css';
import React from 'react';
import GlobalNavbar from "./components/GlobalNavbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home"

function App() {
  return (
    <div>
      <GlobalNavbar />
      <Routes>
            <Route path = "/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

