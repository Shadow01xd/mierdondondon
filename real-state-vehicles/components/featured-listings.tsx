"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Share2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Listing {
  id: string
  type: "property" | "vehicle" | "lots"
  title: string
  price: number
  location: string
  image: string
  features: string[]
}

const initialListings: Listing[] = [
  {
    id: "1",
    type: "property",
    title: "Villa Moderna Frente al Mar",
    price: 850000,
    location: "Miami Beach, FL",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    features: ["4 Habitaciones", "3 Baños", "2500 m²"],
  },
  {
    id: "2",
    type: "vehicle",
    title: "BMW X5 2023",
    price: 75000,
    location: "Disponible para comprar",
    image: "https://www.motortrend.com/uploads/sites/10/2022/09/2023-bmw-x5-xdrive40i-xline-design-4wd-suv-angular-front.png",
    features: ["AWD", "Híbrido", "Paquete de Lujo"],
  },
  {
    id: "3",
    type: "property",
    title: "Apartamento de Lujo en el Centro",
    price: 500000,
    location: "Nueva York, NY",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    features: ["2 Habitaciones", "2 Baños", "Vista a la Ciudad"],
  },
  {
    id: "4",
    type: "vehicle",
    title: "Mercedes-Benz S-Class 2023",
    price: 110000,
    location: "Disponible para comprar",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    features: ["Sedán de Lujo", "Motor V8", "Interiores de Cuero"],
  },
  {
    id: "5",
    type: "property",
    title: "Casa de Campo con Piscina",
    price: 650000,
    location: "Aspen, CO",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    features: ["5 Habitaciones", "4 Baños", "Piscina Privada"],
  },
  {
    id: "6",
    type: "vehicle",
    title: "Porsche 911 GT3 2023",
    price: 180000,
    location: "Disponible para comprar",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    features: ["Deportivo", "Ubicacion"],
  },
  {
    id: "8",
    type: "lots",
    title: "Lote",
    price: 480000,
    location: "Disponible para comprar",
    image: "https://swisspark.com.br/wp-content/uploads/2023/07/beautiful-landscape-with-small-village-3-1024x575.jpg",
    features: ["Medidas", "Motor Boxer"],
  },
  {
    id: "9",
    type: "lots",
    title: "Lote",
    price: 580000,
    location: "Disponible para comprar",
    image: "https://images.ctfassets.net/cfexf643femz/7IGVnR4m7NIsPOzUJiBSOH/c74219475afdf6f7e2edd26723e4e37f/lotes-una-guia-definitiva-para-invertir.jpg",
    features: ["Medidas", "Ubicacion"],
  },
  {
    id: "10",
    type: "lots",
    title: "Lote",
    price: 1800000,
    location: "Disponible para comprar",
    image: "https://th.bing.com/th/id/OIP.-yRAT53eYKbm5b6jxhtPigHaGZ?rs=1&pid=ImgDetMain",
    features: ["Medidas", "Ubicacion", "Tracción Trasera"],
  },
]

export function FeaturedListings() {
  const [listings, setListings] = useState(initialListings)
  const [filter, setFilter] = useState<"all" | "property" | "vehicle">("all")

  const handleFilterChange = (value: string) => {
    setFilter(value as "all" | "property" | "vehicle")
    if (value === "all") {
      setListings(initialListings)
    } else {
      setListings(initialListings.filter((listing) => listing.type === value))
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recien agregados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vehiculos y viviendas mas recientes agregados 
          </p>
        </motion.div>

        <div className="flex justify-end mb-8">
          <Select onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="property">Propiedades</SelectItem>
              <SelectItem value="vehicle">Vehículos</SelectItem>
              <SelectItem value="lots">Lotes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <Image
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {/*
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  */}
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {listing.type === "property" ? "En Venta" : "Disponible"}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
                <p className="text-primary text-2xl font-bold mb-4">${listing.price.toLocaleString()}</p>
                <p className="text-gray-600 mb-4">{listing.location}</p>
                <div className="flex flex-wrap gap-2">
                  {listing.features.map((feature) => (
                    <span key={feature} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Ver Todos los Listados
          </button>
        </div>
      </div>
    </section>
  )
}

