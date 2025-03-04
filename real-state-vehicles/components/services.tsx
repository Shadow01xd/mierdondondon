"use client"

import { motion } from "framer-motion"
import { Car, Home, Key, Calculator, Shield, Clock } from "lucide-react"

const services = [
  {
    id: 5,
    title: "Importaciones",
    description: "Importaciones de vehiculos.",
    icon: Car,
  },
  {
    id: 1,
    title: "Venta de Vehiculos",
    description: "Gestión de venta y renta de vehículos de lujo y clásicos.",
    icon: Car,
  },
  {
    id: 2,
    title: "Venta de Propiedades",
    description: "Comercialización estratégica de propiedades residenciales y comerciales.",
    icon: Home,
  },
  {
    id: 3,
    title: "Alquiler de Propiedades",
    description: "Gestión profesional de alquileres y servicios de administración.",
    icon: Key,
  },
  {
    id: 4,
    title: "Financiamiento",
    description: "Asesoramiento y gestión de financiamiento para vehículos y propiedades.",
    icon: Calculator,
  },
  {
    id: 6,
    title: "Servicio 24/7",
    description: "Atención al cliente disponible las 24 horas, los 7 días de la semana.",
    icon: Clock,
  },
]

export function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para tus necesidades de vehículos y propiedades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

