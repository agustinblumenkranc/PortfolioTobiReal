import Image from "next/image"
import { Navegacion } from "@/components/navegacion"

interface Proyecto {
  titulo: string
  descripcion: string
  tecnologias: string[]
  enlace: string
  icono: string
}

const proyectos: Proyecto[] = [
  {
    titulo: "APDC - Brinda Ayuda a Personas con Alzheimer",
    descripcion:
      "APDC es una web la cual mediante el uso de diferentes juegos brindamos ayuda a personas las cuales sufren de Alzheimer. Algunos de los juegos que utilizamos son, el memotест, el simon y entre otros más.",
    tecnologias: ["JS", "Access", "HTML", "CSS"],
    enlace: "#",
    icono: "🧠",
  },
  {
    titulo: "PIA - IA de Predicción de Cancer de Pancreas",
    descripcion:
      "PIA es una plataforma web la cual logra predecir el cancer de pancreas con el uso de distintos modelos, tanto de imágenes como de datos de sangre, con el fin de ayudar al médico a dar una respuesta eficaz y lograr un tratamiento temprano.",
    tecnologias: ["JS", "Next.js", "HTML", "CSS", "Python"],
    enlace: "#",
    icono: "🏥",
  },
  {
    titulo: "Tagy Games - IA que Brinda Ayuda a niños con TEA",
    descripcion:
      "Tagy Games es una web la cual utiliza inteligencia Artificial para brindar ayuda a niños con TEA mediante el uso situaciones cotidianas, con el fin de que cuando salgan a la calle sea menos el sufrimiento para las discisiones",
    tecnologias: ["Next.js", "React", "HTML", "Testing", "Python"],
    enlace: "#",
    icono: "🎮",
  },
]

export default function Proyectos() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navegacion />

      <section className="py-20 px-4" id="proyectos">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in">
            <span className="text-white">Mis </span>
            <span className="text-emerald-400">Proyectos</span>
            <div className="h-1 w-32 bg-emerald-400 mx-auto mt-4"></div>
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {proyectos.map((proyecto, idx) => (
            <div
              key={proyecto.titulo}
              className="border-2 border-gray-600 rounded-xl p-8 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-32 h-32 flex-shrink-0">
                  <Image
                    src={`/.jpg?height=128&width=128&query=${proyecto.icono}`}
                    alt={proyecto.titulo}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{proyecto.titulo}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{proyecto.descripcion}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyecto.tecnologias.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={proyecto.enlace}
                  className="text-amber-500 font-bold hover:text-amber-400 transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  Ver repositorio <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
