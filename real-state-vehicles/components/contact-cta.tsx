"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Contáctanos hoy mismo y descubre cómo podemos ayudarte</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Phone,
              title: "Llámanos",
              content: "+1 234 567 890",
              action: "Llamar ahora",
            },
            {
              icon: Mail,
              title: "Escríbenos",
              content: "info@premiumimports.com",
              action: "Enviar email",
            },
            {
              icon: MapPin,
              title: "Visítanos",
              content: "123 Premium Street, City",
              action: "Ver ubicación",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/80 mb-4">{item.content}</p>
              <button className="bg-white text-primary px-6 py-2 rounded-lg hover:bg-white/90 transition-colors">
                {item.action}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

