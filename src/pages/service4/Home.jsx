import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const videos = [
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F431000090039554%2F&show_text=false&width=267&t=0",
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F614889521224739%2F&show_text=false&width=267&t=0",
  "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F455143843685835%2F&show_text=false&width=267&t=0"
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
            Ondas de choque para disfunción eréctil
          </h2>
          <p className="text-gray-700 mb-4">
            Un tratamiento innovador y no invasivo que ayuda a mejorar la función eréctil de manera natural, estimulando la regeneración de tejidos y mejorando la circulación sanguínea en la zona genital.
          </p>
          <p className="text-gray-700 mb-4">
            <strong className="font-bold">Tratamiento profesional y seguro:</strong> Realizado por especialistas en salud sexual masculina, garantizando máxima seguridad y eficacia en cada sesión.
          </p>
          
          {/* Características Adicionales */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">🌟 Características del Tratamiento</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mejora la circulación sanguínea en la zona íntima.</li>
              <li>Estimula la regeneración de los tejidos.</li>
              <li>Tratamiento ambulatorio y sin dolor.</li>
              <li>No requiere medicamentos ni cirugía.</li>
            </ul>
          </div>

          {/* Beneficios */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">✅ Beneficios del Tratamiento</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mejora natural y progresiva de la función eréctil.</li>
              <li>Mayor firmeza y duración de las erecciones.</li>
              <li>Aumento de la confianza y calidad de vida.</li>
              <li>Compatible con otros tratamientos médicos.</li>
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
        <a href="https://api.whatsapp.com/send/?phone=5212226398763&text=Hola+Dr.+me+interesa+el+tratamiento+de+ondas+de+choque&type=phone_number&app_absent=0">
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