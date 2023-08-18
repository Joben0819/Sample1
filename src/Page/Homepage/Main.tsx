import React from 'react';
import Post from '../Post';
import Sales from '../Sales';
import Create from '../Create';
import { Routes, Route } from 'react-router-dom';
import Settings from '../Settings';
import Header from './Header';
import Footer from './Footer';

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default Main;