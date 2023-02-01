import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HamMenu from './components/HamMenu';
import { useState } from 'react';
import Home from './components/Home'
import {Routes, Route} from  'react-router-dom'
import Products from './components/Products';

const lista = [
    {
      id: 1,
      image: <img src="https://m.media-amazon.com/images/I/61rODsR2DKL._AC_.jpg" 
      alt ="pathfinder"
      className="w-40 h-40 object-contain rounded-xl mb-2"></img>,
      name: "Pathfinder",
      price: "$10000"
    },
    {
      id: 2,
      image: <img src="https://m.media-amazon.com/images/I/61rODsR2DKL._AC_.jpg" 
      alt ="pathfinder"
      className="w-40 h-40 object-contain rounded-xl mb-2"></img>,
      name: "Pathfinder",
      price: "$10000"
    },
    {
      id: 3,
      image: <img src="https://m.media-amazon.com/images/I/61rODsR2DKL._AC_.jpg" 
      alt ="pathfinder"
      className="w-40 h-40 object-contain rounded-xl mb-2"></img>,
      name: "Pathfinder",
      price: "$10000"
    },
    {
      id: 4,
      image: <img src="https://m.media-amazon.com/images/I/61rODsR2DKL._AC_.jpg" 
      alt ="pathfinder"
      className="w-40 h-40 object-contain rounded-xl mb-2"></img>,
      name: "Pathfinder",
      price: "$10000"
    },
    {
      id: 5,
      image: <img src="https://m.media-amazon.com/images/I/61rODsR2DKL._AC_.jpg" 
      alt ="pathfinder"
      className="w-40 h-40 object-contain rounded-xl mb-2"></img>,
      name: "Pathfinder",
      price: "$10000"
    },
]

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () =>{
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#141414] min-h-screen">
      <NavBar  openClose={toggleOpen} />
      {isOpen && <HamMenu />}
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/products' element={<Products lista={lista}/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
