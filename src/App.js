import Header from './Components/Header';
import Accueil from './Components/Accueil';
import Biographie from './Components/Biographie';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';




function App() {
  return (
    <div className="bgBlack">
      <Header />
      <Routes>
        <Route path="Portfolio/" element={<Accueil/>}/>
        <Route path="Portfolio/Biographie" element={<Biographie />} />
        <Route path="Portfolio/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
