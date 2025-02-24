import React, { useState } from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'Ricardo Campero',
      role: 'Paciente',
      testimonial:
        'Excelente atención por parte del Dr. Ivo. Siempre fue muy claro para resolver mis dudas y siempre estuvo dispuesto y facilitó mucho los detalles de mi operación. Lo recomiendo totalmente.',
    },
    {
      name: 'Leticia Lisker',
      role: 'Paciente',
      testimonial:
        'Muy recomendable el doctor Pineda. Ha atendido a tres de mis familiares directos. El diagnóstico fue certero, la atención personalizada y amable. En la operación con láser todo salió excelentemente. Cuando surgen dudas, siempre responde. 10 de 10.',
    },
    {
      name: 'Deva GZB',
      role: 'Paciente',
      testimonial:
        'Excelente doctor, muy amable y atento en todo.',
    },
    {
      name: 'Arturo Quan Kiu',
      role: 'Paciente',
      testimonial:
        'Excelente atención integral. El doctor tiene conocimientos y herramientas (equipo médico) para brindar un servicio que resuelve al 100%.',
    },
    {
      name: 'Gerardo Santos',
      role: 'Paciente',
      testimonial:
        'El Dr. Ivo es una persona sumamente confiable y profesional en su especialidad. Operó a mi papá de la próstata usando la tecnología de láser holmio. Y todo salió excelente. Lo recomiendo ampliamente y si alguien requiere conocer el testimonio de mi papá él puede constatar su caso por teléfono o personalmente.  No dudes en buscar ayuda con el Dr. Ivo todo un profesional. Gracias...',
    },
    {
      name: 'José Alberto Carrasco',
      role: 'Paciente',
      testimonial:
        'Excelente atención médica, muy profesional, con explicación clara y completa del padecimiento y su tratamiento. ¡Gracias Doctor Ivo por su atención!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-[#FFF] text-black py-12 px-6 rounded-lg shadow-xl mt-10 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"></div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-center mb-6">Testimonios</h3>
        <div className="text-center">
          <p className="text-lg italic text-gray-700 leading-relaxed">
            “{testimonials[currentIndex].testimonial}”
          </p>
          <p className="mt-4 font-medium text-gray-800">
            - {testimonials[currentIndex].name}, <span className="italic">{testimonials[currentIndex].role}</span>
          </p>
        </div>

        {/* Navegación */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSlide}
            className="bg-[#0284C7] hover:bg-gray-300 text-white rounded-full w-10 h-10 flex justify-center items-center"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#0284C7] hover:bg-gray-300 text-white rounded-full w-10 h-10 flex justify-center items-center"
          >
            ›
          </button>
        </div>

        {/* Puntos de navegación */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-[#0284C7]' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
