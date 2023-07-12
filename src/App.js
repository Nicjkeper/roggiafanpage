import './App.css';
import Button from './components/Button';
import EndHome from './components/Endhome';
import Followcnt from './components/Followcnt';
import Photo from './components/Photo';
import { Link, Routes, Route } from 'react-router-dom';
import Terms from './components/Terms';
import Content from './components/Content';
import Ebody from './components/Ebody';
import Navbar from './components/Navbar';
import Bord from './components/Bord';
import Home from './components/Home';
import Rogge from './components/Rogge';

function App() {
  return (
    <div>
      <Bord />
      <Navbar />
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Terms />} />
         <Route path="/terms" element={<Terms />} />      
         <Route path="/rogge" element={<Rogge />} /> 
         <Route path="/terms" element={<Terms />} />
          </Routes>
        <EndHome />
      </div>
  );
}

export default App;






