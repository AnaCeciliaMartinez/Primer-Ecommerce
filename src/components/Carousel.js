import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import arkham from '../images/arkham.png'
import dnd from '../images/dnd.png'
import monopoly from '../images/monopoly.jpg'


const Carousel = () => {
    return (
    <div className="h-screen bg-[#1CB9DC] flex items-center justify-center">
        <div className="max-w-5x1">
        <Swiper 
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide><img src={arkham} alt ="arkham"></img></SwiperSlide>
        <SwiperSlide><img src={dnd} alt ="dnd"></img></SwiperSlide>
        <SwiperSlide><img src={arkham} alt ="arkham"></img></SwiperSlide>
        <SwiperSlide><img src={monopoly} alt ="monopoly"></img></SwiperSlide>
    </Swiper>
        </div>
    </div>
    );
};
export default Carousel