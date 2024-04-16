import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from "./components/NavBar";
import Top from './Pages/Top';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Resume from './Pages/Resume';

function App() {
  return (
    <>
      <NavBar />
      <Top />
      {/* ===== Portfolio wird noch gearbeiten =========*/}
                          <Portfolio /> 
      {/* ============================================= */}
      <About />
      <Resume />
      
    </>
  );
}

export default App;
