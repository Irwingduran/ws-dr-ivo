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
            Retiro de Verrugas por Papiloma y Molusco Contagioso con Láser
          </h2>
          <p className="text-gray-700 mb-4">
            Eliminamos de forma segura y efectiva verrugas causadas por el virus del papiloma humano (VPH) y molusco contagioso, utilizando tecnología láser de última generación.
          </p>
          <p className="text-gray-700 mb-4">
            <strong className="font-bold">Tratamiento especializado:</strong> Contamos con un procedimiento indoloro, mínimamente invasivo y con una rápida recuperación para que puedas sentirte seguro y confiado en tu piel.
          </p>
          
          {/* Características Adicionales */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">🌟 Características del Servicio</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Eliminación rápida y efectiva con tecnología láser.</li>
              <li>Sin cicatrices ni daño en la piel.</li>
              <li>Procedimiento ambulatorio sin hospitalización.</li>
              <li>Atención por especialistas en dermatología.</li>
            </ul>
          </div>

          {/* Beneficios */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">✅ Beneficios del Tratamiento</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Resultados visibles desde la primera sesión.</li>
              <li>Reducción del riesgo de contagio.</li>
              <li>Mejora estética y aumento de confianza.</li>
              <li>Recuperación rápida sin efectos secundarios graves.</li>
            </ul>
          </div>

          {/* Duración */}
          <div className="mt-6">
            <h3 className="font-bold text-[#0284C7] mb-2">🕒 Duración del Procedimiento</h3>
            <p className="text-gray-700">Aproximadamente 30 a 45 minutos, dependiendo de la cantidad y ubicación de las lesiones.</p>
          </div>
        </div>

        {/* Sección del Video (Vertical) */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-[300px] h-[550px] md:w-[350px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F571332394652511%2F&show_text=false&width=267&t=0"
              className="w-full h-full rounded-lg"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Retiro de Verrugas con Láser"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Llamada a la Acción */}
      <div className="mt-8 flex justify-center items-center">
        <a href="https://api.whatsapp.com/send/?phone=5212226398763&text=Hola+Dr.+me+interesa+el+retiro+de+verrugas+con+láser&type=phone_number&app_absent=0">
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