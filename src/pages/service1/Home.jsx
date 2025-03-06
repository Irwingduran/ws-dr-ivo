import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const videos = [
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F750585507235085%2F&show_text=false&width=267&t=0",
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F415749817311127%2F&show_text=false&width=267&t=0",
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F417544323707990%2F&show_text=false&width=267&t=0"
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
            Consulta médica con especialista
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
        <a href="https://api.whatsapp.com/send/?phone=5212226398763&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0">
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