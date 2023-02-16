const HamMenu = () => {
  return (
    <div className="grid grid-rows-3 text-left item-center px-3 md:hidden">
      <a href="/" className="text-[#4f46e5] hover:text-sky-700">
        Inicio
      </a>
      <a href="/products" className="text-[#4f46e5] hover:text-sky-700">
        Productos
      </a>
      <a href="" className="text-[#4f46e5] hover:text-sky-700">
        Contacto
      </a>
    </div>
  );
};

export default HamMenu;
