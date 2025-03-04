"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Profile } from "./ui/profile"


export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchType, setSearchType] = useState<"properties" | "vehicles">("properties")

  const navarrete = '/NAVARRET-POSITIVO.png';

  const menuItems = [
    {
      title: "Propiedades",
      /*submenu: ["Comprar", "Alquilar", "Vender"],*/
    },
    {
      title: "Vehículos & Importaciones",
      submenu: ["Importar", "Comprar", "Alquilar"],
    },
    {
      title: "Servicios",
      submenu: ["Financiamiento", "Seguros", "Asesoría Legal"],
    },
    {
      title: "Acerca de",
      submenu: ["Empresa", "Equipo", "Contacto"],
    },
  ]

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-2 py-2 justify-between">
        <div className="flex items-center justify-between">
            <img src={navarrete} alt="" width='250px' height='250px'/>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto justify-center w-[45em]">
            <div className="bg-white rounded-lg p-2 shadow-lg w-full">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="text"
                  placeholder={`Buscar ${searchType === "properties" ? "propiedades" : "vehículos"}...`}
                  className="flex-2"
                />
                {/*
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
                */}
                <button className="bg-primary text-white px-8 py-2 rounded-md hover:bg-yellow-500 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="bg-primary text-white px-8 py-2 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-700 transition-colors">
                  <p>Filtro</p>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-white hover:text-yellow-500 transition-colors">
                  <span>{item.title}</span>
                {/*  <ChevronDown className="w-4 h-4" /> */}
                </button>
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                     {/* {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          href={`/${item.title.toLowerCase()}/${subItem.toLowerCase()}`}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          {subItem}
                        </Link>
                      ))} */}

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
              <Profile />
          </div>

          

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              {menuItems.map((item) => (
                <div key={item.title} className="py-2">
                  <div className="font-medium text-gray-800 mb-2">{item.title}</div>
                  <div className="pl-4 space-y-2">
                    {/*{item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        href={`/${item.title.toLowerCase()}/${subItem.toLowerCase()}`}
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {subItem}
                      </Link>
                    ))} */}
                  </div>
                </div>
              ))}
            </motion.div>
          )}


          
          
        </AnimatePresence>
      </nav>
    </header>
  )
}

