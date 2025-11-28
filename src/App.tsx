

import './styles/App.css';
import Navbar from './Components/Navbar';
import Heros from './Components/Heros';
import Tarif from './Pages/Tarif';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import HexBackground from './Components/HexBackground';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-[#0a0a0a]">
              <Navbar />
              <Heros />
              <Tarif />
              <About />
              <Portfolio />
              <Contact />
              <Footer />
              <HexBackground />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
