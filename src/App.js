import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import FContent from './contentfirst';
import SContent from './contentsecond';
import Foter from './footer';


  
function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br><br></br>
      <FContent />
      
      <SContent/>
      
      <Foter />
      
       
  

    </div>
  );
}

export default App;
