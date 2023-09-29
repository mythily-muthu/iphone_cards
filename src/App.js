
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from "./Pages/About"

function App() {
  return (
    <div className="">
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
