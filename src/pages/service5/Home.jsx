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
            Biopsia Prostática
          </h2>
          <p className="text-gray-700 mb-4">
            Procedimiento seguro y preciso para el diagnóstico de afecciones prostáticas. Contamos con tecnología de vanguardia para garantizar resultados confiables y una experiencia cómoda para el paciente.
          </p>
          <p className="text-gray-700 mb-4">
            <strong className="font-bold">Compromiso con la Precisión:</strong> Nuestro equipo de especialistas realiza la biopsia con técnicas avanzadas y mínima molestia, asegurando un análisis detallado para un diagnóstico oportuno.
          </p>
          
          {/* Características Adicionales */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">🌟 Características del Servicio</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Procedimiento guiado por ultrasonido.</li>
              <li>Realizado por urólogos altamente capacitados.</li>
              <li>Ambiente seguro y con los más altos estándares de higiene.</li>
              <li>Resultados precisos para un diagnóstico confiable.</li>
            </ul>
          </div>

          {/* Beneficios */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">✅ Beneficios del Procedimiento</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Detección temprana de enfermedades prostáticas.</li>
              <li>Procedimiento mínimamente invasivo.</li>
              <li>Tiempo de recuperación rápido.</li>
            </ul>
          </div>

        </div>

        {/* Sección del Video (Vertical) */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-[300px] h-[550px] md:w-[350px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F432829412986745%2F&show_text=false&width=267&t=0"
              className="w-full h-full rounded-lg"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Biopsia Prostática Video"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Llamada a la Acción */}
      <div className="mt-8 flex justify-center items-center">
        <a href="https://www.doctoralia.com.mx/ivo-humberto-pineda-somodevilla/urologo/puebla">
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
