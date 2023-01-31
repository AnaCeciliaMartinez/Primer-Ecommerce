import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HamMenu from './components/HamMenu';
import { useState } from 'react';
import Carousel2 from './components/Carousel2';
import Carousel from './components/Carousel';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () =>{
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#141414] min-h-screen">
      <NavBar  openClose={toggleOpen} />
      {isOpen && <HamMenu />}
      
      <main className="lg:pl-[220px] p-8 pt-38">
        <div className=" grid grid-cols-1 md:grid-cols-6 gap-3">
          <div className=" md:col-span-5 relative ">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/25/15/04/casino-1107736_960_720.jpg"
              alt=""

              />
          </div>
        </div>
      </main> 

      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="p-4">
          <img 
            src="https://cdn.pixabay.com/photo/2017/09/14/02/11/domino-2747758_960_720.jpg"
            alt=""
            className="w-full h-60 object-cover rounded-xl mb-2"
          />
          <h3 className="text-gray-300 text-lg">Domino</h3>
          <p className="text-gray-500 mb-3">juegos de mesa</p>
          <div>
          <span className="bg-gray-50 p-1 text-green-800 rounded-lg"> -60% </span>
          <span className="text-gray-500 p-2">$1000</span>
          <span className="text-white">$400 </span>
          <button className="bg-[#4f46e5] text-white-2 rounded-lg w-full mt-2 bg-gray-50">
            Agregar al carrito
          </button>
        </div>
        </div>
        <div className="p-4">
          <img
            src="https://cdn.pixabay.com/photo/2015/03/04/10/58/cube-658643_960_720.jpg"
            alt=""
            className="w-full h-60 object-cover rounded-xl mb-2"
          />
          <h3 className="text-gray-300 text-lg">Dados</h3>
          <p className="text-gray-500 mb-3 ">juegos de mesa</p>
          <div className="flex items-center gap-1 "></div>
          <div>
          <span className="bg-gray-50 p-1 text-green-800 rounded-lg"> -50% </span>
          <span className="text-gray-500 p-2">$1000</span>
          <span className="text-white">$500 </span>
          <button className="bg-[#4f46e5] text-white-2 rounded-lg w-full mt-2 bg-gray-50">
            Agregar al carrito
          </button>
        </div>
        </div>
        <div className="p-4">
          <img
            src="https://cdn.pixabay.com/photo/2016/04/27/10/16/monopoly-1356307_960_720.jpg"
            alt=""
            className="w-full h-60 object-cover rounded-xl mb-2"
          />
          <h3 className="text-gray-300 text-lg">Monopoli</h3>
          <p className="text-gray-500 mb-3">juegos de mesa</p>
          <div>
          <span className="bg-gray-50 p-1 text-green-800 rounded-lg"> -80% </span>
          <span className="text-gray-500 p-2">$1000</span>
          <span className="text-white">$200 </span>
          <button className="bg-[#4f46e5] text-white-2 rounded-lg w-full mt-2 bg-gray-50">
            Agregar al carrito
          </button>
        </div>
        </div>
        <div id="hola" className="p-4">
          <img
            src="https://cdn.pixabay.com/photo/2021/01/29/11/33/chess-5960730_960_720.jpg"
            alt=""
            className="w-full h-60 object-cover rounded-xl mb-2 text-center"
          />
          <h3 className="text-gray-300 text-lg">Ajedrez</h3>
          <p className="text-gray-500 mb-3">juegos de mesa</p>
          <div className="flex items-center gap-2"></div>
        <div>
          <span className="bg-gray-50 p-1 text-green-800 rounded-lg"> -80% </span>
          <span className="text-gray-500 p-2">$1000</span>
          <span className="text-white">$200 </span>
          <button className="bg-[#4f46e5] text-white-2 rounded-lg w-full mt-2 bg-gray-50">
            Agregar al carrito
          </button>
        </div>
        </div>
        <div className="p-4">
          <img
            src="https://cdn.pixabay.com/photo/2015/05/15/18/21/cards-769040_960_720.jpg"
            alt=""
            className="w-full h-60 object-cover rounded-xl mb-2 text-center"
          />
          <h3 className="text-gray-300 text-lg ">Cartas</h3>
          <p className="text-gray-500 mb-3">juegos de mesa </p>
          <div>
          <span className="bg-gray-50 p-1 text-green-800 rounded-lg"> -40% </span>
          <span className="text-gray-500 p-2">$1000</span>
          <span className="text-white">$400 </span>
          <button className="bg-[#4f46e5] text-white-2 rounded-lg w-full mt-2 bg-gray-50">
            Agregar al carrito
          </button>
        </div>
        </div>
      </div>

      <Carousel />

      <Footer/>
    </div>
    
  );
}

export default App;
