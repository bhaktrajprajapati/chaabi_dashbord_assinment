//import logo from './logo.svg';
import './App.css';

import Day14 from './component/Day14';
import Day7 from './component/Day7';
import Header from './component/Header';
import Scard from './component/Scard';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="box">
      <div className="box1">
        <Sidebar />
      </div>
      <div className="box2">

        <div className="subdiv21">
          <Header />
        </div>
        <div >    
        <Scard/>
         
        </div>
        <div className="div2">
          
          <Day14 />
        </div>
        <div>
          <Day7 />
        </div>
        
      </div>

    </div>
  )
}

export default App;
