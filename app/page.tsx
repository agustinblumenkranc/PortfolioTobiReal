import Link from "next/link"
import { Navegacion } from "@/components/navegacion"

export default function Inicio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute top-32 -left-20 w-80 h-80 bg-emerald-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-32 -right-20 w-96 h-96 bg-emerald-500 rounded-full opacity-15 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <Navegacion />

      <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="max-w-4xl text-center animate-fade-in">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Hola, soy </span>
              <span className="text-emerald-400">Tobias Sendyk</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Desarrollador Web Backend</h2>
          </div>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Apasionado por construir sistemas completos y eficientes con Node.js, Express y PostgreSQL. Diseño y
            optimizo arquitecturas escalables que conectan la lógica del servidor con experiencias de usuario fluidas y
            seguras.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#proyectos">
              <button className="px-8 py-3 bg-emerald-400 text-black font-bold rounded-full hover:bg-emerald-300 transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                Ver mis proyectos <span>↓</span>
              </button>
            </Link>
            <Link href="#contacto">
              <button className="px-8 py-3 border-2 border-gray-400 text-white font-bold rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-300 w-full sm:w-auto">
                Contactar
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
