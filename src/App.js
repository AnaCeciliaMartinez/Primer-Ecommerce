
import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HamMenu from './components/HamMenu';
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () =>{
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen">
      <NavBar  openClose={toggleOpen} />
      {isOpen && <HamMenu />}
    </div>
    
  );
}

export default App;
