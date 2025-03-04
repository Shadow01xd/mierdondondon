"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const brands = [
  {
    id: 1,
    name: "BMW",
    logo: "https://th.bing.com/th/id/OIP.EcF6jP_c5LwEcQLbSalKUQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7?height=60&width=120",
  },
  {
    id: 2,
    name: "Mercedes-Benz",
    logo: "https://th.bing.com/th/id/OIP.2qnXgd8rAj0_axATVSdRLAHaEK?rs=1&pid=ImgDetMain?height=60&width=120",
  },
  {
    id: 3,
    name: "Audi",
    logo: "https://th.bing.com/th/id/OIP.Cta-CMAXxwKOpr8iKEYZjwHaEE?w=320&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7?height=60&width=120",
  },
  {
    id: 4,
    name: "Porsche",
    logo: "https://th.bing.com/th/id/OIP.iMW69ZC9K3fGSMdQxDO_jAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7?height=60&width=120",
  },
  {
    id: 5,
    name: "Ferrari",
    logo: "https://th.bing.com/th/id/OIP.G5K5Gaho70dmBfvNxpH0zwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7?height=60&width=120",
  },
  {
    id: 6,
    name: "Lamborghini",
    logo: "https://th.bing.com/th/id/OIP.qoFcnFqk6fzE_THKrpj4JwHaEK?rs=1&pid=ImgDetMain?height=60&width=120",
  },
]

export function Brands() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Colaboradores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Trabajamos con las mejores colaboradores de la in</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

