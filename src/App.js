import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import About from "./components/pages/About.js"
import Contact from "./components/pages/Contact.js";
import Portfolio from "./components/pages/Portfolio.js";
import Resume from "./components/pages/Resume.js";
import'./components/style/app.css'
function App() {
  return (
    <BrowserRouter >
      
        <Header />
        <body>
        <Routes>
          <Route path="/react-portfolio" element={<Portfolio />}></Route>
          <Route path="/aboutMe" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contactMe" element={<Contact />}></Route>
        </Routes>
        </body>
       <Footer />
      
    </BrowserRouter>
  );
}

export default App;