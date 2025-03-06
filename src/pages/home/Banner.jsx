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
        <a href="https://www.google.com/search?sca_esv=9632110e93a89f4a&sxsrf=AHTn8zp5PQab2iiumwKbl6jZ--FHLtetrg:1740083024549&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzeLgm9RobP8BibSHqjs-OohgW9YHnnmnwkAwvu8NstjhGvzO4NUocbp6BoBvSU2PnJFHWbE3HXJnfdOsKXu_I9U7V-vxuwe0H_g4n3vLswKBPI4jQyp8wZuFTYL4Zj83F6BVXtZjFRwvI2l2vdPoDvT-KPnc&q=Dr+Ivo+H+Pineda+Somodevilla,+Ur%C3%B3logo+en+Puebla+Opiniones&sa=X&ved=2ahUKEwj8jLu0itOLAxUILEQIHVg5JNsQ0bkNegQIIxAE&biw=1470&bih=832&dpr=2" target="_blank">
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
