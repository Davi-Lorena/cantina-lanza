"use client"

import Image from "next/image";
import { useState } from "react"
import { Menu, X } from "lucide-react"

 

export function Nav() {   

const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

    return ( 
<nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/cantina-lanza-logo.jpg"
                alt="Cantina Lanza Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection("hero")} className="nav-item text-gray-700 font-medium">
                  Início
                </button>
                <button onClick={() => scrollToSection("about")} className="nav-item text-gray-700 font-medium">
                  Sobre Nós
                </button>
                <button onClick={() => scrollToSection("menu")} className="nav-item text-gray-700 font-medium">
                  Cardápio
                </button>
                <button onClick={() => scrollToSection("contact")} className="nav-item text-gray-700 font-medium">
                  Contato
                </button>
                <button onClick={() => scrollToSection("gallery")} className="nav-item text-gray-700 font-medium">
                  Galeria
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-italian-green">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-gray-700 hover:text-italian-green w-full text-left transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-gray-700 hover:text-italian-green w-full text-left transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="block px-3 py-2 text-gray-700 hover:text-italian-green w-full text-left transition-colors"
              >
                Cardápio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-700 hover:text-italian-green w-full text-left transition-colors"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block px-3 py-2 text-gray-700 hover:text-italian-green w-full text-left transition-colors"
              >
                Galeria
              </button>
            </div>
          </div>
        )}
      </nav>
    )
}