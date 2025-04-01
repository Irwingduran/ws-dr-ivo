import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const videos = [
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1951952565223163%2F&show_text=false&width=267&t=0",
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F618978214149220%2F&show_text=false&width=267&t=0",
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F413890081564756%2F&show_text=false&width=267&t=0",
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F591962669327401%2F&show_text=false&width=267&t=0",
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F516454463578661%2F&show_text=false&width=267&t=0",
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F527421742387676%2F&show_text=false&width=267&t=0"
];

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

        {/* Sección del Carrusel de Videos */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-[300px] h-[550px] md:w-[350px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="w-full h-full"
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <iframe
                    src={video}
                    className="w-full h-full rounded-lg"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    title={`Video ${index + 1}`}
                  ></iframe>
                </SwiperSlide>
              ))}
            </Swiper>
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