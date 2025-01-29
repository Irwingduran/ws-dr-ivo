import React from 'react';

const Contact = () => {
  return (
    <div className="mt-10 bg-white rounded-[40px] p-[30px] shadow-lg">
      <h3 className="font-bold text-[28px] text-center text-gray-800">Contáctanos</h3>
      <p className="text-gray-600 text-center mt-2">
        ¿Tienes alguna pregunta o necesitas más información? ¡Envía un mensaje!
      </p>
      <form className="mt-8 space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            className="p-3 rounded-[20px] border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-medium mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            className="p-3 rounded-[20px] border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="tel" className="text-gray-700 font-medium mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="Ingresa tu número de teléfono"
            className="p-3 rounded-[20px] border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-700 font-medium mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Escribe tu mensaje aquí"
            className="p-3 rounded-[20px] border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#0284C7] text-white py-3 px-8 rounded-[20px] shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
