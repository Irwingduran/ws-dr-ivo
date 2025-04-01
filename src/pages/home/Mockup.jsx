import React from "react";

const ServiceSection = ({
  imageUrl,
  title,
  description,
  buttonText,
}) => {
  return (
    <section className="flex items-center justify-center bg-white py-12 px-6">
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="w-4/12">
          <img
            src={imageUrl}
            alt="Service"
            className="w-full"
          />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-neutralDGrey">{title}</h2>
          <p className="text-gray-700 mt-4 p-5">{description}</p>
          <a href="https://www.findoctor.com.mx/doctores/ivo-humberto-pineda-somodevilla" target="_blank">
            <button className="bg-[#0284C7] rounded-lg text-white p-4">
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

// Ejemplo de uso
const Mockup = () => {
  return (
    <ServiceSection
  imageUrl="/services/mockup.png"
  title="Encuentra más información en mi tarjeta digital en Findoctor"
  description="Accede a mi tarjeta digital en Findoctor para encontrar fácilmente información sobre mis servicios, ubicación, horarios y datos de contacto. Reserva tu cita en línea de manera rápida y segura."
  buttonText="Visita mi tarjeta digital"
/>
  );
};

export default Mockup;