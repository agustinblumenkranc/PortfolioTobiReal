import { Navegacion } from "@/components/navegacion"

interface Habilidad {
  categoria: string
  icono: string
  items: string[]
}

const habilidades: Habilidad[] = [
  {
    categoria: "Backend-Frontend",
    icono: "</>",
    items: ["Node.js", "Express", "PostgreSQL", "React", "HTML", "CSS"],
  },
  {
    categoria: "Herramientas",
    icono: "🔧",
    items: ["Git", "Figma", "VS Code", "Postman", "PgAdmin", "Vercel"],
  },
  {
    categoria: "Conocimientos",
    icono: "🏛️",
    items: ["Testing", "UX/UI", "Accesibilidad"],
  },
]

export default function Habilidades() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navegacion />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
            <span className="text-white">Mis </span>
            <span className="text-emerald-400">Habilidades</span>
            <div className="h-1 w-32 bg-emerald-400 mx-auto mt-4"></div>
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {habilidades.map((hab, idx) => (
              <div
                key={hab.categoria}
                className="border-2 border-gray-600 rounded-xl p-8 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-xl font-bold mb-6">
                  {hab.icono}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{hab.categoria}</h3>
                <ul className="space-y-3">
                  {hab.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
