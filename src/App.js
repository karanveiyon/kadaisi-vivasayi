import Navbar from "./navbar/navbar";
import './App.css';
import Nallandi from "./nallandi";
import Song from "./song";
import Nammaazhwar from "./nammaazhwar";
/* import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; */
/* import nirai from './asserts/nirai.png'; */




function App() {
  return (
    <div className="App">
{/*     
      <Router>  
      <Routes>
  <Route path="/" element={<Navbar/>}/> 
  <Route path="./nallandi/index.js" element={<Nallandi/>} />
      </Routes>
      </Router> */}
<Navbar/>
<div className="parallax"></div>
<Song/>
<div className="parallax"></div>
<Nallandi/>
<div className="parallax"></div>
<Nammaazhwar/>

</div>
  );
}

export default App;
