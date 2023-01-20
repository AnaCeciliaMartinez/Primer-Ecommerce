
import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HamMenu from './components/HamMenu';
import { useState } from 'react';
import Carousel2 from './components/Carousel2';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () =>{
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen">
      <NavBar  openClose={toggleOpen} />
      {isOpen && <HamMenu />}

      <Carousel2 />
    </div>
    
  );
}

export default App;
