import React, { useState } from 'react';
import ScrollToHash from "../utils/ScrollToHash";
import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <div className='flex justify-between items-center py-6 lg:py-0 sticky top-0 bg-white z-50'>
         <ScrollToHash/>
         <a href="/">
            <div className='flex gap-2 items-center'>
               <img src={logo} width={40} alt="Logo" />
               <h1 className='font-semibold text-2xl text-[#0284C7]'>Dr. Ivo Pineda</h1>
            </div>
         </a>
         <div className='hidden lg:flex items-center'>
            <ul className='flex items-center gap-[40px] mr-8'>
               <li>
                  <a href="/" className='text-[20px]'>Inicio</a>
               </li>
               <li>
                  <a href="/#about" className='text-[20px]'>Conóceme</a>
               </li>
               <li>
                  <a href="/#service" className='text-[20px]'>Servicios</a>
               </li>
               <li>
                  <a href="/#contact" className='text-[20px]'>Contacto</a>
               </li>
            </ul>
            <a href="https://bit.ly/3mb1wjq" target='_blank'>
               <button className='text-center text-white border rounded-lg bg-[#0284C7] py-3 px-4'>Agendar Cita</button>
            </a>
         </div>
         <div className='lg:hidden block cursor-pointer' onClick={toggleMobileMenu}>
            <img src={isMobileMenuOpen ? close : menu} alt="menu" />
         </div>
         {isMobileMenuOpen && (
            <div className='lg:hidden fixed z-50 top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center'>
               <a href="/">
                  <img src={close} alt="close" className='absolute top-6 right-4' onClick={toggleMobileMenu} />
               </a>
               <ul className='flex flex-col items-center gap-[20px]'>
                  <li>
                     <a href="/" className='text-[20px]'>Inicio</a>
                  </li>
                  <li>
                     <a href="/#about" className='text-[20px]'>Conóceme</a>
                  </li>
                  <li>
                     <a href="/#service" className='text-[20px]'>Servicios</a>
                  </li>
                  <li>
                     <a href="/#contact" className='text-[20px]'>Contacto</a>
                  </li>
               </ul>
               <a href="https://bit.ly/3mb1wjq" target='_blank'>
                  <button className='mt-4 text-center border rounded-lg border-black py-3 px-4'>Agendar Cita</button>
               </a>
            </div>
         )}
      </div>
   );
}

export default Navbar;
