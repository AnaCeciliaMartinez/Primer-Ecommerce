import React from 'react'
import Carousel from './Carousel'

const Home = () => {
    return (
        <main className="w-full space-y-10">
        <div className='flex content-center justify-center'>
            <img
            src="https://cdn.pixabay.com/photo/2015/12/25/15/04/casino-1107736_960_720.jpg"
            alt=""
                />
        </div>
        <div>
            <h1 className='text-[#4f46e5] text-center font-serif underline text-2xl md:text-4xl'>Conoce nuestros Juegos</h1>
        </div>
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
        <div className='flex contet-center justify-center'>
            <div className='w-4/5 h-48 bg-[url(https://media.istockphoto.com/id/1300208115/es/vector/tri%C3%A1ngulo-cruz-cuadrado-y-c%C3%ADrculo-ilustraci%C3%B3n-rectangular-sobre-fondo-azul-oscuro.jpg?s=612x612&w=0&k=20&c=hdsUG53ADWQ7jtAmyQte6bGf_wVPvKN6IhGi-g9GIEA=)] content-center'>
                <h1 className='py-5 text-white text-center font-serif text-1xl md:text-3xl'>¿Cómo elegir el juego de mesa adecuado?</h1>
                <p className='text-white text-center font-serif text-sm md:text-2xl'>
                    Si tenes que hacer un regalo y estas un poco perdido entre tantos juegos que hay para elegir,
                    aca te dejamos unos tips para saber que juegos se adaptan mejor.
                </p>
                <button className='h-7 border-2 border-[#4f46e5] text-[#4f46e5] rounded-lg text-1xl md:text-3xl md:h-10'>Ver Mas</button>
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-center '>
            <h1 className='text-[#4f46e5] text-center font-serif text-2xl md:text-3xl'> Seguinos en Instagram</h1>
            <p className='px-4 text-[#4f46e5] text-center font-mono underline text-1xl md:text-2xl'>@Boardgamesshop</p>
        </div>
        <Carousel />
        </main> 
    )
}

export default Home