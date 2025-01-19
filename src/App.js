import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './Components/Main/Main';
import AvtorSvidetel from './Components/AvtorSvidetel/AvtorSvidetel';

function App() {
  return (
    // <Router>

    <div className="App">
      {/* <BrowserRouter> */}
  <Main />
     {/* <Routes>
      <Route path="/" element={<Main />} />
      <Route path="avtorsvid" element={<AvtorSvidetel />} />
    </Routes> */}
    {/* </BrowserRouter> */}
    </div>
    // {/* </Router> */}
  );
}

export default App;
