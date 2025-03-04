"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function HeroSection() {
  const [searchType, setSearchType] = useState<"properties" | "vehicles">("properties")

  return (
    <div className="relative h-[60vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${
            searchType === "properties"
              ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              : "https://images.unsplash.com/photo-1583121274602-3e2820c69888"
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Encuentra Tu {searchType === "properties" ? "Hogar" : "Vehículo"} Perfecto
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Descubre {searchType === "properties" ? "propiedades" : "vehículos"} premium para compra y alquiler
          </p>

          {/* Search Tabs */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setSearchType("properties")}
              className={`px-6 py-2 rounded-full transition-colors ${
                searchType === "properties" ? "bg-white text-primary" : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Propiedades
            </button>
            <button
              onClick={() => setSearchType("vehicles")}
              className={`px-6 py-2 rounded-full transition-colors ${
                searchType === "vehicles" ? "bg-white text-primary" : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Vehículos
            </button>
          </div>
          
          {/* Search Bar */}
          {/*
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="text"
                  placeholder={`Buscar ${searchType === "properties" ? "propiedades" : "vehículos"}...`}
                  className="flex-1"
                />
                <Select>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder={searchType === "properties" ? "Tipo" : "Marca"} />
                  </SelectTrigger>
                  <SelectContent>
                    {searchType === "properties" ? (
                      <>
                        <SelectItem value="house">Casa</SelectItem>
                        <SelectItem value="apartment">Apartamento</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="bmw">BMW</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Rango de Precio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50000">$0 - $50,000</SelectItem>
                    <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100000+">$100,000+</SelectItem>
                  </SelectContent>
                </Select>
                <button className="bg-primary text-white px-8 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          */}
        </motion.div>
      </div>
    </div>
  )
}

