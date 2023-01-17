import carrito from '../images/carrito.jpeg'



const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white border-bubble-gum text-bubble-gum">
        barra
        <img src={carrito} alt ="carrito"></img>
    </nav>
  )
}

export default NavBar