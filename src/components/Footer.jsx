import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import AnimatedItem from '../animation/AnimatedItem';
import SlideInFromLeft from '../animation/SlideInFromLeft';

const Footer = () => {
    return (
        <AnimatedItem intial='50'>
            <div className='flex flex-col rounded-t-[40px] mt-[100px] p-[40px] md:p-[60px] bg-[#0284C7] text-white'>
                <div className='flex flex-col items-center gap-8 md:flex-row  md:justify-between'>
                    <div className='flex gap-2 items-center'>
                        <FaEnvelope className='text-3xl' />
                        <a href="/">
                            <h2 className='font-semibold text-2xl'>Dr. Ivo Pineda Somodevilla</h2>
                        </a>
                    </div>
                    <div className='flex flex-wrap text-center items-center gap-[40px]'>
                        <a href="/#about" className='text-[15px] underline'>Sobre Mí</a>
                        <a href="/#service" className='text-[15px] underline'>Servicios</a>
                        <a href="/#location" className='text-[15px] underline'>Ubicación</a>
                    </div>
                    <div className='flex gap-4'>
                        <a href="https://www.facebook.com/ivopinedasomodevilla" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF className='h-6 w-6 hover:text-gray-200 transition duration-300' />
                        </a>
                        <a href="https://wa.me/5212226398763?text=Hola%20doctor,%20encontré%20su%20contacto%20en%20su%20sitio%20web%20y%20me%20gustaría%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaWhatsapp className='h-6 w-6 hover:text-gray-200 transition duration-300' />
                        </a>
                        <a href="https://www.instagram.com/dr.ivo.urologo/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className='h-6 w-6 hover:text-gray-200 transition duration-300' />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row  justify-between items-center rounded-[30px] mt-8'>
                    <SlideInFromLeft>
                        <div className='text-white'>
                            <p className='bg-white inline-block py-1 px-3 text-black rounded-md font-bold'>Contacto</p>
                            <ul className='mt-4 space-y-2'>
                                <li>
                                    <a href="mailto:drivopineda@urologoenpuebla.com" className='flex items-center gap-2'>
                                        <FaEnvelope /> Email: drivopineda@urologoenpuebla.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:2226398763" className='flex items-center gap-2'>
                                        <FaPhone /> Consultas y Citas: 2226398763
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:2226398763" className='flex items-center gap-2'>
                                        <FaPhone /> Urgencias: 2226398763
                                    </a>
                                </li>
                                <li>Dirección:</li>
                                <li>Priv. de las Ramblas 4, Reserva Territorial Atlixcáyotl, <br /> Corredor Comercial Desarrollo Atlixcayotl, <br /> 72197 Heroica Puebla de Zaragoza, Pue.</li>
                            </ul>
                        </div>
                    </SlideInFromLeft>
                </div>
                <div className='bg-white w-full h-[1px] my-6 bg-opacity-50'></div>
                <div className='flex md:flex-row flex-col gap-4'>
                    <p>© 2025 Delta by <a className='hover:text-yellow-300' href="https://marketingmedicos.com.mx/">Imagen Médica</a></p>
                </div>
            </div>
        </AnimatedItem>
    );
};

export default Footer;
