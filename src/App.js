import './app.scss';
import Navbar from './jsx/Navbar';
import About from './jsx/About';
import Project from './jsx/Project';
import Contact from './jsx/Contact';
import Home from './jsx/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import { useState } from 'react';

function App() {  

  return (
    <div className="app">
      <Navbar />
        <Container fluid className="p-0 sections">
          <Home/>
          <About/>
          <Project/>
          <Contact/>
        </Container>
          
    </div>   
  );
}

export default App;
