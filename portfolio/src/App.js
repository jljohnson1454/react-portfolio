import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Footer from './components/Footer';
import Navigation from './components/Navigation';


function App() {
  return (
   <div>
     <Header></Header>
     <Navigation></Navigation>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
     
   </div>
  );
}

export default App;
