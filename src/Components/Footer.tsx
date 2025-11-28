export default function Footer() {
  return (
    <footer className="bg-[#181818] border-t-2 border-orange-600 py-8 mt-24" role="contentinfo" aria-label="Pied de page RedPandaDev">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <span className="text-orange-400 font-bold text-lg">RedPandaDev © 2025</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#about" className="text-white/80 hover:text-orange-400 transition">À propos</a>
          <a href="#portfolio" className="text-white/80 hover:text-orange-400 transition">Portfolio</a>
          <a href="#contact" className="text-white/80 hover:text-orange-400 transition">Contact</a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 mt-8 border-t border-orange-900 pt-6">
        <div className="flex gap-4 items-center">
          <a href="mailto:contact@redpandadev.fr" className="text-orange-400 hover:underline">contact@redpandadev.fr</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-orange-400 transition">
            <svg width="24" height="24" fill="currentColor" className="inline"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.2 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.56 0-1.1-.03-1.64-.1A12.13 12.13 0 0 0 7.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-orange-400 transition">
            <svg width="24" height="24" fill="currentColor" className="inline"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.63 1.2-1.22 2.08-1.22 1.66 0 3 1.34 3 3v6.99z"/></svg>
          </a>
        </div>
        <div className="text-white/60 text-sm mt-4 md:mt-0">
          <a href="#" className="hover:underline">Mentions légales</a> | <a href="#" className="hover:underline">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}
