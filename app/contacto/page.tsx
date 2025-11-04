import { Navegacion } from "@/components/navegacion"

interface ContactoItem {
  tipo: string
  etiqueta: string
  valor: string
  enlace?: string
  icono: string
}

const contactos: ContactoItem[] = [
  {
    tipo: "email",
    etiqueta: "Email",
    valor: "sendyktobias@gmail.com",
    enlace: "mailto:sendyktobias@gmail.com",
    icono: "✉️",
  },
  {
    tipo: "telefono",
    etiqueta: "Telefono",
    valor: "+54 11 2688 3536",
    enlace: "tel:+5411268835360",
    icono: "📞",
  },
  {
    tipo: "github",
    etiqueta: "GitHub",
    valor: "48592475",
    enlace: "https://github.com/48592475",
    icono: "🐙",
  },
  {
    tipo: "linkedin",
    etiqueta: "LinkedIn",
    valor: "Tobias Sendyk",
    enlace: "https://linkedin.com",
    icono: "💼",
  },
]

export default function Contacto() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navegacion />

      <section className="py-20 px-4 min-h-screen flex items-center justify-center" id="contacto">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Trabajemos </span>
              <span className="text-emerald-400">Juntos</span>
            </h1>
            <div className="h-1 w-32 bg-emerald-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad
            </p>
          </div>

          <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <a href="mailto:sendyktobias@gmail.com">
              <button className="px-8 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors duration-300 flex items-center gap-2">
                ✈️ Enviar un Mensaje
              </button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactos.map((contacto, idx) => (
              <a
                key={contacto.tipo}
                href={contacto.enlace || "#"}
                className="border-2 border-gray-600 rounded-xl p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 animate-fade-in group"
                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                    {contacto.icono}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contacto.etiqueta}</p>
                    <p className="text-white font-bold">{contacto.valor}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
