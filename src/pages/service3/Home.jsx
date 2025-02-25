import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="px-[20px] font-space-grotesk max-w-[1440px] mx-auto lg:pt-[50px] lg:px-[100px]">
      <Navbar />

      {/* Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white p-10 rounded-lg gap-8 flex-grow">
        {/* Sección de Información */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#0284C7] mb-4">
            Ultrasonido de Próstata y Vías Urinarias con Flujometría
          </h2>
          <p className="text-gray-700 mb-4">
            Estudio no invasivo que permite evaluar el estado de la próstata y las vías urinarias, proporcionando un diagnóstico preciso y seguro.
          </p>
          <p className="text-gray-700 mb-4">
            <strong className="font-bold">Precisión y Confiabilidad:</strong> Utilizamos tecnología avanzada para detectar alteraciones en la próstata y el flujo urinario, permitiendo un tratamiento oportuno y eficaz.
          </p>
          
          {/* Características Adicionales */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">🌟 Características del Servicio</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Diagnóstico detallado y preciso.</li>
              <li>Procedimiento rápido y sin molestias.</li>
              <li>Atención personalizada por especialistas.</li>
              <li>Equipos de última generación.</li>
            </ul>
          </div>

          {/* Beneficios */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">✅ Beneficios del Servicio</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>No invasivo y sin riesgos.</li>
              <li>Detección temprana de problemas prostáticos.</li>
              <li>Ayuda en el diagnóstico de obstrucciones urinarias.</li>
              <li>Resultados inmediatos y confiables.</li>
            </ul>
          </div>
        </div>

        {/* Sección del Video (Vertical) */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-[300px] h-[550px] md:w-[350px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/example-video"
              className="w-full h-full rounded-lg"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Ultrasonido de Próstata y Vías Urinarias"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Llamada a la Acción */}
      <div className="mt-8 flex justify-center items-center">
        <a href="https://api.whatsapp.com/send/?phone=5212226398763&text=Hola+Dr.+me+interesa+agendar+una+consulta+para+un+ultrasonido+de+pr%C3%B3stata+y+v%C3%ADas+urinarias&type=phone_number&app_absent=0">
          <button className="bg-[#0284C7] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            ¡Agenda tu Consulta Ahora!
          </button>
        </a>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
