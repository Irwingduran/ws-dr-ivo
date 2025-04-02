import React from "react"
import { ChevronRight, Star } from "lucide-react"
import { FaHeartbeat, FaProcedures, FaUserMd, FaRulerVertical, } from 'react-icons/fa';
import { GiLaserPrecision } from "react-icons/gi";

const SurgeriesGrid = () => {
  const surgeries = [
    {
      title: "Consulta médica con especialista",
      description: "Evaluar, diagnosticar y tratar diversas condiciones médicas.",
      image: "/services/cancer.jpg",
      link: "/Service1",
    },
     {
      title: "Cirugía con láser de próstata HOLEP",
      description: "La cirugía HoLEP usa láser de holmio para eliminar el tejido prostático agrandado, mejorando el flujo urinario con mínima invasión.",
      image: "/services/biopsia.jpg",
      link: "/Service5",
    },
     {
       title: "Retiro de verrugas por papiloma y molusco contagioso con láser",
       description: "Eliminación segura y efectiva de verrugas causadas por el virus del papiloma humano (VPH).",
       image: "/services/difus.jpg",
       link: "/Service2",
     },
    {
      title: "Ultrasonido de próstata y vías urinarias con FLUJOMETRIA",
      description: "Estudio no invasivo para evaluar el estado de la próstata y vías urinarias.",
      image: "/services/piedras.webp",
      link: "/Service3",
    },
    {
      title: "Ondas de choque para disfunción eréctil",
      description: "Tratamiento especializado en manos de un profesional",
      image: "/services/ondas.webp",
      link: "/Service4",
    },
   
  ];
  

  const servicesList = [
    "Tratamiento Virus del papiloma humano con laser",
    "Infecciones de transmisión sexual",
    "Enfermedades de la próstata",
    "Incontinencia urinaria",
    "Cáncer de próstata, riñón, vejiga, testículo y pene",
    "Infeccion de vías urinarias",
    "Biopsia prostática ",
    "Retiro de verrugas por papiloma y molusco contagioso con láser"
  ]

  const frequentSurgeries = [
    {
      name: "Cirugía de próstata con láser HOLEP",
      price: "A partir de $90,000.00",
      icon: <GiLaserPrecision className="text-6xl mb-4 text-yellow-100" />, 
    },
    {
      name: "Cirugía de cálculos (piedras) urinarias con láser",
      price: "A partir de $35,000.00",
      icon: <FaProcedures  className="text-6xl mb-4 text-yellow-100" />, 
    },
    {
      name: "Cirugía de genitales (circuncisión, varicocele, hidrocele) con láser",
      price: "A partir de $25,000",
      icon: <FaUserMd className="text-6xl mb-4 text-yellow-100" />, 
    },
    {
      name: "Cirugía de alargamiento y engrosamiento de pene (con y sin prótesis)",
      price: "A partir de $30,000",
      icon: <FaRulerVertical className="text-6xl mb-4 text-yellow-100" />, 
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-16">Servicios y Procedimientos</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {surgeries.map((surgery, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="h-48 relative">
  <a href={surgery.link} className="block w-full h-full">
    <img
      src={surgery.image || "/placeholder.svg"}
      alt={surgery.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
  </a>
</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{surgery.title}</h3>
                <p className="text-gray-600 mb-4">{surgery.description}</p>
                <a
                  href={surgery.link}
                  className="inline-flex items-center text-[#0284C7] font-medium hover:text-blue-800 transition-colors duration-200"
                >
                  Ver más
                  <ChevronRight className="ml-1 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Otros Servicios</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {servicesList.map((service, index) => (
      <div key={index} className="flex items-center">
        <img 
          src="/logo.png" // Si está en `public/icons/custom-icon.png`
          alt="Icono" 
          className="mr-2 w-5 h-5"
        />
        <span className="text-gray-700">{service}</span>
      </div>
    ))}
  </div>
</div>


        <div className="bg-[#0284C7] rounded-xl shadow-lg p-8 text-white">
  <h2 className="text-3xl font-bold mb-8 text-center">Cirugías más frecuentes</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {frequentSurgeries.map((surgery, index) => (
      <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
        <div className="flex flex-col items-center">
          {surgery.icon}
          <h3 className="text-xl font-semibold mb-2 text-center">{surgery.name}</h3>
          <p className="text-2xl font-bold text-yellow-100 text-center">{surgery.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  )
}

export default SurgeriesGrid

