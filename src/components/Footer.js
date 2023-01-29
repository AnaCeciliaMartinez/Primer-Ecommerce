

import logo from '../images/logo.jpg';
import {GrInstagram} from 'react-icons/gr';
import {GrFacebook} from 'react-icons/gr';
import {HiOutlineMail} from'react-icons/hi';
import {IoLogoWhatsapp} from'react-icons/io5';

const Footer = () => {
    return (
        <section className="flex flex-col justify-between items-center md:flex-row bg-[#141414] border-2 border-[#4f46e5] relative shadow-sm">
            <div className="py-2 px-5">
                <img className="object-contain h-14" src={logo} alt="logo"></img>
            </div>

            <div className="flex flex-col space-y-1 md:flex-row md:justify-between md:space-y-0 md:space-x-2">
                
                <ul className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-y-0 md:space-x-2">
                    <li className="text-[#4f46e5]">Juegos de Mesa</li>
                    <li className="text-[#4f46e5]">Juegos de Rol</li>
                    <li className="text-[#4f46e5]">Últimos Lanzamientos</li>
                </ul>
            </div>

            <div className="flex flex-row justify-between items-center space-x-2 px-5 py-4 text-white text-2xl">
                <GrInstagram />
                <GrFacebook />
                <HiOutlineMail />
                <IoLogoWhatsapp />
            </div>
        </section>
    )
}

export default Footer

