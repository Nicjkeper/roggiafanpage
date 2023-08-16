import './App.css';
import EndHome from './components/Endhome';
import Followcnt from './components/Followcnt';
import Photo from './components/Photo';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Terms from './components/Terms';
import Content from './components/Content';
import Ebody from './components/Ebody';
import Navbar from './components/Navbar';
import Bord from './components/Bord';
import Home from './components/Home';
import Rogge from './components/Rogge';
import Map from './components/Map';
import News from './components/News';
import Formroggia from './components/compages/Formroggia';
import ThanksPage from './components/ThanksPage';
import Download from './components/Download';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColorSchemesExample from './components/Navbar';

function App() {
  return (
    <div>
      <Bord />
      <ColorSchemesExample />
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Terms />} />
        <Route path="/terms" element={<Terms />} />    
        <Route path="/map" element={<Map />} />
        <Route path="/partecipazione" element={<Formroggia />} />   
        <Route path="/rogge" element={<Rogge />} /> 
        <Route path="/terms" element={<Terms />} />
        <Route path="/news" element={<News />} />
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="/download" element={<Download />} />
          </Routes>
        <EndHome />
      </div>
  );
}

export default App;






