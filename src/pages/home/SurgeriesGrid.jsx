import React from "react"
import { ChevronRight, Check } from "lucide-react"

const SurgeriesGrid = () => {
  const surgeries = [
    {
      title: "Consulta médica con especialista",
      description: "Te ayudamos en problemas de erección y eyaculación precoz...",
      image: "/services/difus.jpg",
    },
    {
      title: "Retiro de verrugas por papiloma y molusco contagioso con láser",
      description: "Recibe un diagnóstico oportuno y profesional...",
      image: "/services/cancer.jpg",
    },
    {
      title: "Ultrasonido de próstata y vías urinarias con FLUJOMETRIA",
      description: "Eliminar las piedras rara vez requiere cirugía...",
      image: "/services/piedras.jpg",
    },
  ]

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
      name: "Cirugía de cálculos(piedras) urinarias con láser",
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
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Servicios y Procedimientos</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {surgeries.map((surgery, index) => (
            <ServiceCard key={index} {...surgery} />
          ))}
        </div>

        <SectionTitle>Otros Servicios</SectionTitle>
        <p className="text-center text-gray-600 mb-8">
          Atendemos una amplia variedad de enfermedades y realizamos procedimientos especializados.
        </p>
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicesList.map((service, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <Check className="mr-2 text-blue-500 flex-shrink-0" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <SectionTitle>Cirugías más frecuentes</SectionTitle>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {frequentSurgeries.map((surgery, index) => (
              <li key={index} className="flex flex-col">
                <span className="text-lg font-semibold text-blue-600 mb-2">{surgery.name}</span>
                <span className="text-2xl font-bold text-gray-800">{surgery.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const SectionTitle = ({ children }) => <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">{children}</h2>

const ServiceCard = ({ title, description, image }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="h-48 relative">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
        Ver más
        <ChevronRight className="ml-1 w-5 h-5" />
      </button>
    </div>
  </div>
)

export default SurgeriesGrid

