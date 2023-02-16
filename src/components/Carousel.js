import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";

const imgFormat = "w-40 h-40 object-contain rounded-xl mb-2";

const Carousel = () => {
  return (
    <div className="mx-20 h-40 bg-[#141414]">
      <div className="md:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          centeredSlides={true}
          speed={800}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/61rODsR2DKL._AC_.jpg"
              alt="pathfinder"
              className={imgFormat}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://www.fancueva.com/wp-content/uploads/2014/12/V20productos.jpg"
              alt="vampiro"
              className={imgFormat}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/522030/header.jpg?t=1474042151"
              alt="eclipse"
              className={imgFormat}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdnx.jumpseller.com/vudu-gaming/image/16654906/resize/960/960?1622521146"
              alt="granlibro"
              className={imgFormat}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://groupgames101.com/wp-content/uploads/2021/12/Dice-Forge-rules.jpg"
              alt="diceforge"
              className={imgFormat}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2017/09/14/02/11/domino-2747758_960_720.jpg"
              alt="domino"
              className={imgFormat}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/vector-gratis/representacion-3d-ilustracion-dados_52683-75997.jpg?w=900&t=st=1675199457~exp=1675200057~hmac=1330ae8a2bd5e5ab0cdc3da9bfb4ee7d50d498eb680c25dd2641ffdb43a4a50a"
              alt="dados"
              className={imgFormat}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2021/01/29/11/33/chess-5960730_960_720.jpg"
              alt="ajedrez"
              className={imgFormat}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2016/04/27/10/16/monopoly-1356307_960_720.jpg"
              alt="monopoly"
              className={imgFormat}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/foto-gratis/persona-jugando-cartas-cuatro-clase-mano_181624-31384.jpg?w=996&t=st=1675192344~exp=1675192944~hmac=7a7bb8d646569d72b253da3b39cd5299ef9bbad536de5620099275aca492c5f9"
              alt="cartas"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:block">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          centeredSlides={true}
          speed={800}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/61rODsR2DKL._AC_.jpg"
              alt="pathfinder"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://www.fancueva.com/wp-content/uploads/2014/12/V20productos.jpg"
              alt="vampiro"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/522030/header.jpg?t=1474042151"
              alt="eclipse"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdnx.jumpseller.com/vudu-gaming/image/16654906/resize/960/960?1622521146"
              alt="granlibro"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://groupgames101.com/wp-content/uploads/2021/12/Dice-Forge-rules.jpg"
              alt="diceforge"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2017/09/14/02/11/domino-2747758_960_720.jpg"
              alt="domino"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/vector-gratis/representacion-3d-ilustracion-dados_52683-75997.jpg?w=900&t=st=1675199457~exp=1675200057~hmac=1330ae8a2bd5e5ab0cdc3da9bfb4ee7d50d498eb680c25dd2641ffdb43a4a50a"
              alt="dados"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2021/01/29/11/33/chess-5960730_960_720.jpg"
              alt="ajedrez"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2016/04/27/10/16/monopoly-1356307_960_720.jpg"
              alt="monopoly"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/foto-gratis/persona-jugando-cartas-cuatro-clase-mano_181624-31384.jpg?w=996&t=st=1675192344~exp=1675192944~hmac=7a7bb8d646569d72b253da3b39cd5299ef9bbad536de5620099275aca492c5f9"
              alt="cartas"
              className="w-40 h-40 object-contain rounded-xl mb-2"
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Carousel;
