

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Projet 1 */}
          <div className="bg-[#181818] rounded-2xl border-2 border-orange-600 shadow-lg transition-all duration-300 hover:shadow-[0_0_32px_0_#ff6a00] hover:-translate-y-2 hover:border-orange-400 group">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Aperçu du site vitrine moderne fictif" className="rounded-t-2xl w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition">Site Vitrine Moderne</h3>
              <p className="text-white/80 mb-4">React, Tailwind, Animations, SEO</p>
              <a href="#" className="text-orange-500 font-semibold hover:underline">Voir le projet</a>
            </div>
          </div>
          {/* Projet 2 */}
          <div className="bg-[#181818] rounded-2xl border-2 border-orange-600 shadow-lg transition-all duration-300 hover:shadow-[0_0_32px_0_#ff6a00] hover:-translate-y-2 hover:border-orange-400 group">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Aperçu du site e-commerce responsive fictif" className="rounded-t-2xl w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-2">E-commerce Responsive</h3>
              <p className="text-white/80 mb-4">Next.js, Stripe, Responsive, UI moderne</p>
              <a href="#" className="text-orange-500 font-semibold hover:underline">Voir le projet</a>
            </div>
          </div>
          {/* Projet 3 */}
          <div className="bg-[#181818] rounded-2xl border-2 border-orange-600 shadow-lg transition-all duration-300 hover:shadow-[0_0_32px_0_#ff6a00] hover:-translate-y-2 hover:border-orange-400 group">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Aperçu du blog tech fictif" className="rounded-t-2xl w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-2">Blog Tech</h3>
              <p className="text-white/80 mb-4">TypeScript, SEO, CMS Headless, Dark mode</p>
              <a href="#" className="text-orange-500 font-semibold hover:underline">Voir le projet</a>
            </div>
          </div>
          {/* Projet 4 */}
          <div className="bg-[#181818] rounded-2xl border-2 border-orange-600 shadow-lg transition-all duration-300 hover:shadow-[0_0_32px_0_#ff6a00] hover:-translate-y-2 hover:border-orange-400 group">
            <img src="https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f5?auto=format&fit=crop&w=400&q=80" alt="Aperçu du dashboard analytics fictif" className="rounded-t-2xl w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-2">Dashboard Analytics</h3>
              <p className="text-white/80 mb-4">React, Chart.js, Auth, API REST</p>
              <a href="#" className="text-orange-500 font-semibold hover:underline">Voir le projet</a>
            </div>
          </div>
          {/* Projet 5 */}
          <div className="bg-[#181818] rounded-2xl border-2 border-orange-600 shadow-lg transition-all duration-300 hover:shadow-[0_0_32px_0_#ff6a00] hover:-translate-y-2 hover:border-orange-400 group">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Aperçu de la landing page startup fictive" className="rounded-t-2xl w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-2">Landing Page Startup</h3>
              <p className="text-white/80 mb-4">Animations, Formulaire, Conversion, UI premium</p>
              <a href="#" className="text-orange-500 font-semibold hover:underline">Voir le projet</a>
            </div>
          </div>
          {/* Projet 6 */}
          <div className="bg-[#181818] rounded-2xl border-2 border-orange-600 shadow-lg transition-all duration-300 hover:shadow-[0_0_32px_0_#ff6a00] hover:-translate-y-2 hover:border-orange-400 group">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Aperçu du portfolio créatif fictif" className="rounded-t-2xl w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-2">Portfolio Créatif</h3>
              <p className="text-white/80 mb-4">React, Animations, Responsive, Effets visuels</p>
              <a href="#" className="text-orange-500 font-semibold hover:underline">Voir le projet</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
