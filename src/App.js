import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header.js";

import About from "./components/pages/About.js"
import Contact from "./components/pages/Contact.js";
import Portfolio from "./components/pages/Portfolio.js";
import Resume from "./components/pages/Resume.js";

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Portfolio />}></Route>
          <Route path="/aboutME" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contactMe" element={<Contact />}></Route>
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;