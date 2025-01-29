import React from "react"
import { ChevronRight, Star } from "lucide-react"

const SurgeriesGrid = () => {
  const surgeries = [
    {
      title: "Consulta médica con especialista",
      description: "Evaluar, diagnosticar y tratar diversas condiciones médicas.",
      image: "/services/cancer.jpg",
    },
    {
      title: "Retiro de verrugas por papiloma y molusco contagioso con láser",
      description: "Eliminación segura y efectiva de verrugas causadas por el virus del papiloma humano (VPH).",
      image: "/services/difus.jpg",
    },
    {
      title: "Ultrasonido de próstata y vías urinarias con FLUJOMETRIA",
      description: "Estudio no invasivo para evaluar el estado de la próstata y vías urinarias.",
      image: "/services/piedras.webp",
    },
  ];
  

  const servicesList = [
    "Tratamiento Virus del papiloma humano con laser",
    "Infecciones de transmisión sexual",
    "Enfermedades de la próstata",
    "Incontinencia urinaria",
    "Cáncer de próstata, riñón, vejiga, testículo y pene",
    "Infeccion de vias urinarias",
  ]

  const frequentSurgeries = [
    {
      name: "Cirugía de próstata con láser HOLEP",
      price: "A partir de $90,000.00",
    },
    {
      name: "Cirugía de cálculos (piedras) urinarias con láser",
      price: "A partir de $35,000.00",
    },
    {
      name: "Cirugía de genitales (circuncisión, varicocele, hidrocele) con láser",
      price: "A partir de $25,000",
    },
    {
      name: "Cirugía de alargamiento y engrosamiento de pene (con y sin prótesis)",
      price: "A partir de $30,000",
    },
  ]

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
                <img
                  src={surgery.image || "/placeholder.svg"}
                  alt={surgery.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{surgery.title}</h3>
                <p className="text-gray-600 mb-4">{surgery.description}</p>
                <a
                  href="#"
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
                <Star className="text-yellow-400 mr-2 w-5 h-5" />
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
                <h3 className="text-xl font-semibold mb-2">{surgery.name}</h3>
                <p className="text-2xl font-bold text-yellow-100">{surgery.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurgeriesGrid

