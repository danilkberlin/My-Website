import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/NavBar";
import Top from "./Pages/Top";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Comment from "./Pages/Comment";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import ScrollSpy from "react-ui-scrollspy";

function App() {
  return (
    <>
      <NavBar />
      <ScrollSpy>
        <Top />
        {/* ===== Portfolio wird noch gearbeiten =========*/}
        <Portfolio />
        {/* ============================================= */}
        <About />
        <Resume />
        <Comment />
        <Contact />
        <Footer />
      </ScrollSpy>
    </>
  );
}

export default App;
