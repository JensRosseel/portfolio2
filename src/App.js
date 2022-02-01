import './App.css';
import Who from './Components/Who/Who';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Who />
      </div> 
    </div>
  );
}

export default App;
