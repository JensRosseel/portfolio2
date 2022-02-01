import './App.css';
import Who from './Components/Who/Who';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
;


function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Who />
        <Projects />
      </div> 
    </div>
  );
}

export default App;
