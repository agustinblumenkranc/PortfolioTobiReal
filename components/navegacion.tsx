"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navegacion() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950 to-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-center items-center">
        <div className="flex gap-8 md:gap-12 items-center flex-wrap justify-center">
          <Link
            href="/"
            className={`transition-colors duration-300 ${
              isActive("/")
                ? "bg-emerald-400 text-black px-4 py-2 rounded-full font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/sobre-mi"
            className={`transition-colors duration-300 ${
              isActive("/sobre-mi")
                ? "bg-emerald-400 text-black px-4 py-2 rounded-full font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Sobre mí
          </Link>
          <Link
            href="/habilidades"
            className={`transition-colors duration-300 ${
              isActive("/habilidades")
                ? "bg-emerald-400 text-black px-4 py-2 rounded-full font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Habilidades
          </Link>
          <Link
            href="/proyectos"
            className={`transition-colors duration-300 ${
              isActive("/proyectos")
                ? "bg-emerald-400 text-black px-4 py-2 rounded-full font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Poryectos
          </Link>
          <Link
            href="/contacto"
            className={`transition-colors duration-300 ${
              isActive("/contacto")
                ? "bg-emerald-400 text-black px-4 py-2 rounded-full font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}
