import * as React from 'react';
import { Background } from './Background';
import Navbar from './Navbar';
import Greeting from './Greeting';
import Experiences from './Experiences';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <>
    <Background />
    <Navbar/>
    <main>
    <Greeting />
    <Experiences />
    {/* <Projects /> */}
    {/* <About /> */}
    {/* <Contact /> */}
    </main>
    </>
  );
}

export default App;
