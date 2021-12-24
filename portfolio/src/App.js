import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
   <div>
     <main>
       <Header></Header>
       <About></About>
       <Projects></Projects>
       <Footer></Footer>
     </main>
   </div>
  );
}

export default App;
