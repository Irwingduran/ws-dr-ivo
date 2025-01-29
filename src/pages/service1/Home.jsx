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
            Descubre Nuestro Servicio Especializado
          </h2>
          <p className="text-gray-700 mb-4">
            Ofrecemos un servicio de alta calidad enfocado en satisfacer las necesidades específicas de nuestros clientes, utilizando tecnología avanzada y técnicas innovadoras para garantizar resultados excepcionales.
          </p>
          <p className="text-gray-700 mb-4">
            <strong className="font-bold">Compromiso con la Excelencia:</strong> Nos dedicamos a brindar una experiencia única, asegurando un trato personalizado y un seguimiento continuo antes, durante y después del procedimiento.
          </p>
          
          {/* Características Adicionales */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">🌟 Características del Servicio</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Equipos de última generación.</li>
              <li>Atención personalizada por profesionales certificados.</li>
              <li>Ambiente cómodo y seguro.</li>
              <li>Protocolos estrictos de higiene y seguridad.</li>
            </ul>
          </div>

          {/* Beneficios */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">✅ Beneficios del Servicio</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Resultados visibles desde la primera sesión.</li>
              <li>Reducción del tiempo de recuperación.</li>
              <li>Mejora en la confianza y autoestima.</li>
            </ul>
          </div>

          {/* Duración */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">🕒 Duración Aproximada</h3>
            <p className="text-gray-700">Entre 45 minutos y 1 hora, dependiendo del alcance del servicio.</p>
          </div>
        </div>

        {/* Sección del Video (Vertical) */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-[300px] h-[550px] md:w-[350px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fivopinedasomodevilla%2Fvideos%2F1795153924634537%2F&show_text=false&width=267&t=0"
              className="w-full h-full rounded-lg"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Liposucción HD Video"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Llamada a la Acción */}
      <div className="mt-8 flex justify-center items-center">
        <a href="/#contact">
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
