// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Components/Main/Main';
// import About from "./Components/About/About";
// import AvtorSvidetel from './Components/AvtorSvidetel/AvtorSvidetel';

function App() {
  return (
    // <Router>
    //   <About />
    <div className="App">
      
  <Main />
     {/* <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/avtorsvid" element={<AvtorSvidetel />} />
    </Routes> */}
    
    </div>
    //  {/* </Router> */}
  );
}

export default App;
