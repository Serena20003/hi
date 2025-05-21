import * as React from 'react';
import { Background } from './Background';
import Navbar from './Navbar';
import Greeting from './Greeting';
import Experiences from './Experiences';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Games from './Projects/games/Games';
import Game from './Projects/games/Game';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <>
      <Background />
      <Navbar/>
      <main>
      <Greeting />
      <Experiences />
      <div style={{margin:"50px"}}/>
      <Projects />
      <About />
      <Contact />
      </main>
      </>} />
    <Route path="/projects/games" element={<Games/>}/>
    <Route path="/projects/games/:link" element={<Game/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
