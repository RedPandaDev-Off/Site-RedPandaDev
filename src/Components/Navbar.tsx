
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Accueil', href: '#heros' },
  { label: 'Services', href: '#tarif' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  // Simule l'état de connexion admin (à remplacer par vrai auth)
  const [isAdmin, setIsAdmin] = useState(false);

  // Smooth scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full h-16 bg-[#0d0d0d] flex items-center justify-between px-6 md:px-12 border-b border-white/5 sticky top-0 z-50" role="navigation" aria-label="Menu principal">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <polygon 
              points="100,20 170,60 170,140 100,180 30,140 30,60" 
              stroke="#ff6a00" 
              strokeWidth={10} 
              fill="#ff6a00"
            />
            <circle cx={85} cy={95} r={8} fill="#000"/>
            <circle cx={115} cy={95} r={8} fill="#000"/>
            <circle cx={100} cy={125} r={10} fill="#000"/>
          </svg>
        </div>
        <div className="text-xl font-semibold">
          <span className="text-[#ff4c1f]">Red</span>
          <span className="text-white">Panda</span>
          <span className="text-[#ff6a00]">Dev</span>
        </div>
      </div>
      <ul className="hidden md:flex items-center gap-8 text-sm">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              className={
                link.label === 'Accueil'
                  ? 'text-[#ff6a00] font-medium'
                  : 'text-white/80 hover:text-white transition'
              }
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="md:hidden ml-4 text-orange-400" aria-label="Ouvrir le menu" onClick={() => setOpen(!open)}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect y="6" width="24" height="2" rx="1" fill="#ff6a00" />
          <rect y="12" width="24" height="2" rx="1" fill="#ff6a00" />
          <rect y="18" width="24" height="2" rx="1" fill="#ff6a00" />
        </svg>
      </button>
      {/* Espace admin visible si connecté */}
      {isAdmin && (
        <a
          href="/admin"
          className="border-2 border-orange-600 text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all hidden md:block ml-2"
        >
          Espace admin
        </a>
      )}
      {!isAdmin ? (
        <Link
          to="/login"
          className="border-2 border-orange-600 text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all hidden md:block ml-2"
        >
          Connexion
        </Link>
      ) : (
        <button
          onClick={() => setIsAdmin(false)}
          className="border-2 border-orange-600 text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all hidden md:block ml-2"
        >
          Déconnexion
        </button>
      )}
      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-[#0a0a0a]/95 z-50 flex flex-col items-center justify-center gap-8 text-xl">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-orange-400 font-semibold"
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          {/* Espace admin visible si connecté (mobile) */}
          {isAdmin && (
            <a
              href="/admin"
              className="border-2 border-orange-600 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all mt-4"
              onClick={() => setOpen(false)}
            >
              Espace admin
            </a>
          )}
          {!isAdmin ? (
            <Link
              to="/login"
              className="border-2 border-orange-600 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all mt-4"
              onClick={() => setOpen(false)}
            >
              Connexion
            </Link>
          ) : (
            <button
              onClick={() => { setIsAdmin(false); setOpen(false); }}
              className="border-2 border-orange-600 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all mt-4"
            >
              Déconnexion
            </button>
          )}
          <button className="absolute top-8 right-8 text-white text-3xl" aria-label="Fermer le menu" onClick={() => setOpen(false)}>
            &times;
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
