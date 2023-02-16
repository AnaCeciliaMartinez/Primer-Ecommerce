import { BsCart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";

const NavBar = ({ openClose }) => {
  return (
    <nav className="flex justify-between items-center h-16 pl-0 pr-5 bg-[#141414] relative shadow-sm">
      <div
        className="px-4 cursor-pointer text-white text-2xl md:hidden"
        onClick={openClose}
      >
        <VscMenu />
      </div>

      <div className="pl-2 hidden md:block space-x-5">
        <a href="/" className="text-[#4f46e5] hover:text-sky-700">
          Inicio
        </a>
        <a href="/products" className="text-[#4f46e5] hover:text-sky-700">
          Productos
        </a>
        <a href="./Contact.js" className="text-[#4f46e5] hover:text-sky-700">
          Contacto
        </a>
      </div>

      <div>
        <img
          className="object-contain h-14"
          src="https://i.pinimg.com/564x/d6/8b/58/d68b589beca1c1721b9a0f10f36fc34d.jpg"
          alt="logo"
        ></img>
      </div>

      <div className="flex justify-between space-x-2 text-white text-2xl">
        <GoSearch />
        <BiUserCircle />
        <Link to="/shoppingCart">
          <BsCart />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
