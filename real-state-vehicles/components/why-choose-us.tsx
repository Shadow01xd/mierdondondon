"use client"

import { motion } from "framer-motion"
import { Check, Shield, Clock, Award } from "lucide-react"
import { DynamicIcon } from "lucide-react/dynamic";


const reasons = [
  {
    id: 1,
    title: "Experiencia Comprobada",
    description: "Más de 15 años de experiencia en el mercado de vehículos y propiedades.",
    icon: Award,
  },
  {
    id: 2,
    title: "Servicio Garantizado",
    description: "Ofrecemos garantías en todos nuestros servicios para tu tranquilidad.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Atención 24/7",
    description: "Estamos disponibles cuando nos necesites, los 365 días del año.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Proceso Transparente",
    description: "Te mantenemos informado en cada paso del proceso.",
    icon: Check,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-black/80 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre las razones por las que somos líderes en el mercado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-full">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

