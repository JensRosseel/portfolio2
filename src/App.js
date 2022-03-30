import './App.css';
import Who from './Components/Who/Who';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Who />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
