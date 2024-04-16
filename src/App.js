import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from "./components/NavBar";
import Top from './Pages/Top';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <>
      <NavBar />
      <Top />
      <Portfolio />
    </>
  );
}

export default App;
