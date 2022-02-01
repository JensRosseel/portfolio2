import './App.css';
import Who from './Components/Who/Who';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Scroll from './Components/Scroll/Scroll';

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Scroll />
        <Who />
        <Projects />
        <Contact />
        
      </div> 
    </div>
  );
}

export default App;
