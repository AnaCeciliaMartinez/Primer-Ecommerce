import React, {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import arkham from '../images/arkham.png'
import dnd from '../images/dnd.png'
import monopoly from '../images/monopoly.jpg'
import Ajedrez from '../images/Ajedrez.jpg'

function Carousel2() {
    const images = [Ajedrez, arkham, dnd, monopoly];
    const [activeSlide, setActiveSlide] = useState(0);
    const prevSliderHandler = (index) => {
        if (index === 0) {
        setActiveSlide(images.length - 1);
        } else if (index > 1) {
        setActiveSlide(activeSlide - 1);
        } else {
        setActiveSlide(0);
        }
    };
    const nextSliderHandler = (index) => {
        if (index === images.length - 1) {
        setActiveSlide(0);
        } else if (index < images.length - 1) {
        setActiveSlide(activeSlide + 1);
        } else {
        setActiveSlide(images.length - 1);
        }
    };
    return (
        <div className='m-6'>
        {images.map((item, index) => {
            return (
            <div
                key={index}
                className={
                activeSlide === index
                    ? 'flex items-center justify-center m-auto'
                    : 'hidden'
                }
            >
                <button
                className='text-2xl border-2 border-black'
                onClick={() => prevSliderHandler(index)}
                >
                <BsChevronCompactLeft />
                </button>
                <div className=' w-[150px] h-[150px]'>
                <img
                    src={item}
                    alt='landscape'
                    className=' object-cover w-full h-[150px] px-6'
                />
                </div>
                <button
                className='text-2xl border-2 border-black'
                onClick={() => nextSliderHandler(index)}
                >
                <BsChevronCompactRight />
                </button>
            </div>
            );
        })}
        </div>
    );
    }

export default Carousel2;