import CardList from "./CardList";

const Products = (props) => {
  return (
    <div className="space-y-10">
      <h1 className="text-[#4f46e5] text-center font-serif text-2xl md:text-3xl">
        Catalogo de Juegos
      </h1>
      <CardList lista={props.lista} />
    </div>
  );
};

export default Products;
