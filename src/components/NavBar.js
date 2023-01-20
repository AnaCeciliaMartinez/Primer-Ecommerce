import carrito from '../images/carrito.jpeg'
import logo from '../images/logo.jpg'
import buscar from '../images/buscar.png'
import user from '../images/user.png'


const NavBar = ({openClose}) => {
  return (
    <nav className="flex justify-between items-center h-16 pl-0 pr-5 bg-white border-2 border-bubble-gum relative shadow-sm">
        <div className="px-4 cursor-pointer md:hidden" onClick={openClose}>
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none"
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6">
            <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>       
        </div>
        
        <div className="pl-2 hidden md:block flex space-x-5">
            <a href='../App.js' className="text-bubble-gum hover:text-sky-700">Inicio</a>
            <a href=''className="text-bubble-gum hover:text-sky-700">Productos</a>
            <a href=''className="text-bubble-gum hover:text-sky-700">Contacto</a>
        </div>

        <div>
            <img className="object-contain h-14" src={logo} alt="logo"></img>
        </div>
        
        <div className="flex justify-between space-x-2">
            <img src={buscar} alt="búsqueda"></img>
            <img src={user} alt="usuario"></img>
            <a href='./Cart.js'><img src={carrito} alt ="carrito"></img></a>
        
        </div>
        
    </nav>
  )
}

export default NavBar