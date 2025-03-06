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
           ¡Queremos escuchar tu opinión!
          </h2>
          <p className="mt-2 text-lg">
          Aquí puedes dejar un comentario sobre tu experiencia con el Dr. Ivo Pineda
          en el perfil de Google Business.
          </p>
        </div>

        {/* Botón */}
        <a href="https://www.google.com.mx/maps/place/Dr+Ivo+H+Pineda+Somodevilla,+Ur%C3%B3logo+en+Puebla/@19.030538,-98.2309809,17z/data=!4m8!3m7!1s0x85cfc73644b2eb1d:0x58ad38617c18d3f0!8m2!3d19.030538!4d-98.228406!9m1!1b1!16s%2Fg%2F11b86zs__1?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
        <button
          className="bg-[#0284C7] text-white font-semibold text-lg py-3 px-8 rounded-full shadow-md hover:bg-blue-300 transition-transform transform hover:scale-105"
        >
          Deja tu opinión
        </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
