import React from "react";
import Carousel from "./Carousel";
import CardList from "./CardList";

const listaHome = [];

const Home = (props) => {
  return (
    <main className="w-full space-y-10">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/12/25/15/04/casino-1107736_960_720.jpg"
          alt=""
          className="w-screen object-contain md: h-96"
        />
      </div>
      <div>
        <h1 className="text-[#4f46e5] text-center font-serif underline text-2xl md:text-4xl">
          Conoce nuestros Juegos
        </h1>
      </div>
      <div>
        <CardList
          lista={props.lista.filter((lista) => lista.category === "Clasico")}
        />
      </div>
      <div className="flex content-center justify-center">
        <div className="h-48 flex flex-col bg-[url(https://media.istockphoto.com/id/1300208115/es/vector/tri%C3%A1ngulo-cruz-cuadrado-y-c%C3%ADrculo-ilustraci%C3%B3n-rectangular-sobre-fondo-azul-oscuro.jpg?s=612x612&w=0&k=20&c=hdsUG53ADWQ7jtAmyQte6bGf_wVPvKN6IhGi-g9GIEA=)] content-center">
          <h1 className="py-5 text-white text-center font-serif text-1xl md:text-3xl">
            ¿Cómo elegir el juego de mesa adecuado?
          </h1>
          <p className="text-white text-center font-serif text-sm md:text-2xl">
            Si tenes que hacer un regalo y estas un poco perdido entre tantos
            juegos que hay para elegir, aca te dejamos unos tips para saber que
            juegos se adaptan mejor.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center ">
        <h1 className="text-[#4f46e5] text-center font-serif text-2xl md:text-3xl">
          {" "}
          Seguinos en Instagram
        </h1>
        <p className="px-4 text-[#4f46e5] text-center font-mono underline text-1xl md:text-2xl">
          @Boardgamesshop
        </p>
      </div>
      <Carousel />
    </main>
  );
};

export default Home;
