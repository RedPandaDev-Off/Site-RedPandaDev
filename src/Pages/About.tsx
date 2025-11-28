import ElectricBorder from '../Components/ElectricBorder'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-shrink-0 flex flex-col items-center">
          <ElectricBorder color="#ff6a00" style={{ borderRadius: '50%', width: 260, height: 260, padding: 0 }}>
            <img
              src="/vite.svg"
              alt="Photo de profil Adrien, développeur web"
              className="rounded-full w-60 h-60 object-cover border-4 border-orange-600 shadow-lg"
              style={{ background: '#181818' }}
            />
          </ElectricBorder>
          <span className="mt-6 text-orange-400 font-bold text-lg">Adrien</span>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8 text-center md:text-left">
            À propos
          </h2>
          <div className="text-lg space-y-5 text-white/90">
            <p>
              <span className="text-orange-400 font-semibold">Salut !</span> Moi c’est Adrien, développeur web freelance passionné basé en France.
            </p>
            <p>
              Je crée des sites modernes, rapides et esthétiques avec <span className="text-orange-400">React</span>, <span className="text-orange-400">Javascript</span>, <span className="text-orange-400">Tailwind</span> et les dernières technos.
            </p>
            <p>
              <span className="text-orange-400 font-semibold">Mon but ?</span> Transformer vos idées en réalité numérique qui cartonne.
            </p>
            <p className="text-orange-400 font-bold text-xl">
              Disponible immédiatement pour votre projet !
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-orange-500/50"
            >
              Discutons de votre projet
            </a>
            <a
              href="#"
              className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-full font-semibold hover:bg-orange-500/10 transition-all"
            >
              Voir mon portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}