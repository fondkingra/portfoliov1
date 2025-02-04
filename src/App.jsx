import './App.css';
import React from 'react';
import CardSection from '../components/CardSection';
import Contact from '../Pages/Contact';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Home from '../Pages/Home';
import About from '../Pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Parallax pages={4} style={{ background: 'black' }}>
        {/* Card Section on first page (offset 0) */}
        <ParallaxLayer offset={0} speed={0.1}>
             <Home/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <About/>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <h1>Projects - Section</h1>
          <CardSection />
        </ParallaxLayer>

        {/* Contact Page on second page (offset 1) */}
        <ParallaxLayer offset={3} speed={0.5}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;