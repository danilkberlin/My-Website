import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from "./components/NavBar";
import Top from './Pages/Top';

function App() {
  return (
    <>
      <NavBar />
      <Top />
    </>
  );
}

export default App;
