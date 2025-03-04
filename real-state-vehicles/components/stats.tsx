/*
"use client"

import { motion } from "framer-motion"
import { Users, Home, Car, Trophy } from "lucide-react"

const stats = [
  {
    id: 1,
    title: "Clientes Satisfechos",
    value: "2,500+",
    icon: Users,
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Propiedades Vendidas",
    value: "1,200+",
    icon: Home,
    color: "text-green-500",
  },
  {
    id: 3,
    title: "Vehículos Importados",
    value: "800+",
    icon: Car,
    color: "text-purple-500",
  },
  {
    id: 4,
    title: "Años de Experiencia",
    value: "15+",
    icon: Trophy,
    color: "text-yellow-500",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className={`w-12 h-12 ${stat.color}`} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/80">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
  */

