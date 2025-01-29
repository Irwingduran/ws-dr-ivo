import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-[#E0F2FE] text-black py-12 px-6 rounded-lg shadow-xl mt-10 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Texto */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            ¡Agenda una cita!
          </h2>
          <p className="mt-2 text-lg">
          Hospital Puebla - Consultorio 1115 
          </p>
          <p>Privada de las Ramblas No. 4, Desarrollo Atlixcáyotl. Puebla, Pue.</p>
        </div>

        {/* Botón */}
        <a href="https://bit.ly/3mb1wjq" target="_blank">
        <button
          className="bg-[#0284C7] text-white font-semibold text-lg py-3 px-8 rounded-full shadow-md hover:bg-blue-300 transition-transform transform hover:scale-105"
        >
          Agendar cita
        </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
