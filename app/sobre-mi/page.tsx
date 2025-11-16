import Image from "next/image"
import { Navegacion } from "@/components/navegacion"

interface Especialidad {
  titulo: string
  descripcion: string
  icono: string
}

const especialidades: Especialidad[] = [
  {
    titulo: "Desarrollo Backend",
    descripcion: "Experto en diseñar arquitecturas escalables con Node.js, Express y PostgreSQL.",
    icono: "</",
  },
  {
    titulo: "Desarrollo Frontend",
    descripcion: "Conocimientos en la construcción de webs utilizando HTML, CSS y JS y algunas tecnologías.",
    icono: "</>",
  },
  {
    titulo: "UX/UI Design",
    descripcion: "Diseño interfaces intuitivas y accesibles para todos",
    icono: "🎨",
  },
  {
    titulo: "Performance",
    descripcion: "Optimización y mejoras prácticas en cada proyecto",
    icono: "⚡",
  },
]

export default function SobreMi() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navegacion />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in">
            <span className="text-white">Sobre </span>
            <span className="text-emerald-400">mí</span>
            <div className="h-1 w-32 bg-emerald-400 mx-auto mt-4"></div>
          </h1>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <div className="w-64 h-64 mx-auto md:mx-0 mb-8 rounded-3xl overflow-hidden border-2 border-emerald-400/30">
              <Image
                src="/img/tobi.png"
                alt="Tobias Sendyk"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-gray-300 space-y-4 text-sm md:text-base">
              <p>
                Soy un desarrollador backend apasionado por crear sistemas eficientes, seguros y escalables. Me enfoco
                en construir arquitecturas sólidas que conecten de forma fluida la lógica del servidor con la
                experiencia del usuario. Busco siempre optimizar el rendimiento, mantener un código limpio y asegurar
                que cada aplicación sea estable y fácil de mantener.
              </p>
              <p>
                Trabajo con Node.js, Express y PostgreSQL, diseñando APIs y servicios backend que impulsan aplicaciones
                modernas. Me interesa la organización del código, el diseño de bases de datos y la integración con
                servicios externos. Cada proyecto es una oportunidad para mejorar mis habilidades y aprender nuevas
                tecnologías.
              </p>
              
            </div>
          </div>

          <div className="space-y-4">
            {especialidades.map((esp, idx) => (
              <div
                key={esp.titulo}
                className="border-2 border-gray-600 rounded-xl p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {esp.icono}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{esp.titulo}</h3>
                    <p className="text-gray-400 text-sm">{esp.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
