import React, { useState } from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'María López',
      role: 'Paciente',
      testimonial:
        'El Dr. Pineda es un profesional excepcional. Su atención al detalle y su trato humano me hicieron sentir segura durante todo el proceso.',
    },
    {
      name: 'Carlos Ramírez',
      role: 'Paciente',
      testimonial:
        'Un médico increíble. Su experiencia y conocimiento son evidentes en cada consulta. Lo recomiendo ampliamente.',
    },
    {
      name: 'Ana Torres',
      role: 'Paciente',
      testimonial:
        'Gracias al Dr. Pineda mi salud ha mejorado significativamente. Es un especialista que realmente se preocupa por sus pacientes.',
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
