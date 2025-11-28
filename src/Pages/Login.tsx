

import { gsap } from 'gsap';
import { useEffect, useState } from 'react';

// Composant HexBackground animé
const HexBackground: React.FC = () => {
  useEffect(() => {
    gsap.to('#loginPulseHex', {
      scale: 1.15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to('#loginPulseCircle', {
      scale: 1.12,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5,
    });
    gsap.to('#loginPulseRect', {
      scale: 1.09,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.2,
    });
  }, []);
  return (
    <>
      {/* Filtre SVG glow */}
      <svg width="0" height="0">
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ff6a00" floodOpacity="0.8" />
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#ffb300" floodOpacity="0.5" />
        </filter>
      </svg>
      {/* Formes proches du formulaire animées avec glow */}
      <svg id="loginPulseHex" className="absolute w-10 h-10 glow-shape z-20" style={{ left: 'calc(50% - 320px)', top: '45%' }} viewBox="0 0 60 60" filter="url(#glow)">
        <polygon points="30,5 55,20 55,40 30,55 5,40 5,20" stroke="#ff6a00" strokeWidth={2} fill="none" opacity={0.9} />
      </svg>
      <svg id="loginPulseCircle" className="absolute w-8 h-8 glow-shape z-20" style={{ left: 'calc(50% - 320px)', top: '60%' }} viewBox="0 0 60 60" filter="url(#glow)">
        <circle cx={30} cy={30} r={25} stroke="#ff6a00" strokeWidth={2} fill="none" opacity={0.8} />
      </svg>
      <svg id="loginPulseRect" className="absolute w-10 h-10 glow-shape z-20" style={{ right: 'calc(50% - 320px)', top: '52%' }} viewBox="0 0 60 60" filter="url(#glow)">
        <rect x={10} y={10} width={40} height={40} stroke="#ff6a00" strokeWidth={2} fill="none" opacity={0.85} />
      </svg>
      <svg className="absolute w-8 h-8 glow-shape z-20" style={{ right: 'calc(50% - 320px)', top: '68%' }} viewBox="0 0 60 60" filter="url(#glow)">
        <polygon points="30,5 55,20 55,40 30,55 5,40 5,20" stroke="#ff6a00" strokeWidth={2} fill="none" opacity={0.7} />
      </svg>
      {/* Décor gauche enrichi */}
      <svg className="absolute left-10 top-24 w-28 h-28 glow-shape-strong z-10" viewBox="0 0 200 200">
        <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="#ff6a00" strokeWidth={4} fill="none" opacity={0.95} />
        <polygon points="100,50 145,75 145,125 100,150 55,125 55,75" stroke="#ff6a00" strokeWidth={2.5} fill="none" opacity={0.85} />
      </svg>
      <svg className="absolute left-20 top-80 w-14 h-14 glow-shape z-10" viewBox="0 0 100 100">
        <rect x={20} y={20} width={60} height={60} stroke="#ff6a00" strokeWidth={2.5} fill="none" opacity={0.9} />
      </svg>
      <svg className="absolute left-16 bottom-10 w-20 h-20 glow-shape z-10" viewBox="0 0 100 100">
        <circle cx={50} cy={50} r={40} stroke="#ff6a00" strokeWidth={2} fill="none" opacity={0.8} />
      </svg>
      <svg className="absolute left-6 top-[60%] w-10 h-10 glow-shape z-10" viewBox="0 0 60 60">
        <polygon points="30,5 55,20 55,40 30,55 5,40 5,20" stroke="#ff6a00" strokeWidth={2} fill="none" opacity={0.7} />
      </svg>
      {/* Décor droite enrichi */}
      <svg className="absolute right-12 top-56 w-28 h-28 glow-shape-medium z-10" viewBox="0 0 200 200">
        <circle cx={100} cy={100} r={70} stroke="#ff6a00" strokeWidth={3} fill="none" opacity={0.95} />
        <circle cx={100} cy={100} r={50} stroke="#ff6a00" strokeWidth={2} fill="none" opacity={0.8} />
      </svg>
      <svg className="absolute right-20 top-32 w-16 h-16 glow-shape z-10" viewBox="0 0 100 100">
        <rect x={10} y={10} width={80} height={80} stroke="#ff6a00" strokeWidth={2} fill="none" opacity={0.85} />
      </svg>
      <svg className="absolute right-16 bottom-32 w-12 h-12 glow-shape z-10" viewBox="0 0 60 60">
        <polygon points="30,5 55,20 55,40 30,55 5,40 5,20" stroke="#ff6a00" strokeWidth={2} fill="none" opacity={0.7} />
      </svg>
      <svg className="absolute right-8 top-[70%] w-10 h-10 glow-shape z-10" viewBox="0 0 60 60">
        <circle cx={30} cy={30} r={25} stroke="#ff6a00" strokeWidth={2} fill="none" opacity={0.7} />
      </svg>
    </>
  );
}

const Login: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  // Login states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // Register states
  const [regEmail, setRegEmail] = useState('');
  const [regEmailConfirm, setRegEmailConfirm] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regCgu, setRegCgu] = useState(false);
  const [regError, setRegError] = useState('');
  const [regLoading, setRegLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (email === 'admin@redpandadev.fr' && password === 'admin') {
        window.location.href = '/admin';
      } else {
        setError('Identifiants incorrects');
      }
      setLoading(false);
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegLoading(true);
    setRegError('');
    setTimeout(() => {
      if (!regEmail.includes('@')) {
        setRegError('Email invalide');
      } else if (regEmail !== regEmailConfirm) {
        setRegError('Les emails ne correspondent pas');
      } else if (regPassword.length < 6) {
        setRegError('Mot de passe trop court');
      } else if (!regCgu) {
        setRegError('Vous devez accepter les CGU');
      } else {
        setRegError('Compte créé ! (fictif)');
        setRegEmail('');
        setRegEmailConfirm('');
        setRegPassword('');
        setRegCgu(false);
      }
      setRegLoading(false);
    }, 1200);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 relative overflow-hidden">
      <HexBackground />
      {/* Bouton retour site principal */}
      <a href="/" className="absolute top-6 left-6 flex items-center gap-2 text-orange-400 hover:text-orange-500 transition-colors group">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-200">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span className="font-semibold">Retour</span>
      </a>
      <div className="bg-[#181818] border-2 border-orange-600 rounded-2xl shadow-lg p-8 w-full max-w-sm transition-all duration-500 relative overflow-hidden">
        <div className="flex flex-col items-center mb-6">
          <svg viewBox="0 0 200 200" width="64" height="64" className="mb-2">
            <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="#ff6a00" strokeWidth={10} fill="#ff6a00" />
            <circle cx={85} cy={95} r={8} fill="#000"/>
            <circle cx={115} cy={95} r={8} fill="#000"/>
            <circle cx={100} cy={125} r={10} fill="#000"/>
          </svg>
          <span className="text-orange-400 font-bold text-lg">RedPandaDev</span>
        </div>
        {/* Morphing forms, hauteur dynamique */}
        <div className={`relative w-full flex flex-col justify-center py-8 pb-4 transition-all duration-700 ${mode === 'register' ? 'min-h-[620px]' : 'min-h-[420px]'}`}>
          <div
            className={`absolute top-0 left-0 w-full transition-all duration-700
              ${mode === 'login' ? 'opacity-100 scale-100 z-20' : mode === 'register' ? 'opacity-0 scale-100 z-0' : ''}`}
            style={{ willChange: 'opacity, transform' }}
          >
            <h2 className="text-3xl font-bold text-orange-500 mb-2 text-center">Connexion</h2>
            <p className="text-white/70 text-center mb-6">Accédez à votre espace client.</p>
            <form className="flex flex-col gap-6" onSubmit={handleLogin}>
              <label htmlFor="email" className="text-white/80 font-semibold">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="px-5 py-4 rounded-lg bg-[#232323] text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Votre email"
                required
                autoFocus
              />
              <label htmlFor="password" className="text-white/80 font-semibold">Mot de passe</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="px-5 py-4 rounded-lg bg-[#232323] text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Votre mot de passe"
                required
              />
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-orange-500/50"
                  disabled={loading}
                >
                  {loading ? 'Connexion...' : 'Se connecter'}
                </button>
                <a href="#" className="text-orange-400 hover:underline text-sm ml-4">Mot de passe oublié ?</a>
              </div>
              {error && <div className="text-red-500 text-center font-semibold mt-2">{error}</div>}
            </form>
            <div className="mt-4 text-center">
              <button
                type="button"
                className="text-orange-500 font-semibold hover:underline text-base"
                onClick={() => setMode('register')}
              >
                Créer un compte
              </button>
            </div>
          </div>
          <div
            className={`absolute top-0 left-0 w-full transition-all duration-700
              ${mode === 'register' ? 'opacity-100 scale-100 z-20' : mode === 'login' ? 'opacity-0 scale-95 z-0' : ''}`}
            style={{ willChange: 'opacity, transform' }}
          >
            <h2 className="text-3xl font-bold text-orange-500 mb-2 text-center">Créer un compte</h2>
            <p className="text-white/70 text-center mb-6">Inscrivez-vous pour accéder à votre espace personnalisé.</p>
            <form className="flex flex-col gap-5" onSubmit={handleRegister}>
              <label htmlFor="regEmail" className="text-white/80 font-semibold">Email</label>
              <input
                id="regEmail"
                type="email"
                value={regEmail}
                onChange={e => setRegEmail(e.target.value)}
                className="px-5 py-4 rounded-lg bg-[#232323] text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Votre email"
                required
                autoFocus
              />
              <label htmlFor="regEmailConfirm" className="text-white/80 font-semibold">Confirmer l'email</label>
              <input
                id="regEmailConfirm"
                type="email"
                value={regEmailConfirm}
                onChange={e => setRegEmailConfirm(e.target.value)}
                className="px-5 py-4 rounded-lg bg-[#232323] text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirmez votre email"
                required
              />
              <label htmlFor="regPassword" className="text-white/80 font-semibold">Mot de passe</label>
              <input
                id="regPassword"
                type="password"
                value={regPassword}
                onChange={e => setRegPassword(e.target.value)}
                className="px-5 py-4 rounded-lg bg-[#232323] text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Mot de passe (min. 6 caractères)"
                required
              />
              <label className="flex items-center gap-2 text-white/80 font-semibold mt-2">
                <input
                  type="checkbox"
                  checked={regCgu}
                  onChange={e => setRegCgu(e.target.checked)}
                  className="accent-orange-500 w-5 h-5"
                  required
                />
                J'accepte les <a href="#" className="text-orange-400 underline">conditions d'utilisation</a>
              </label>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-orange-500/50"
                  disabled={regLoading}
                >
                  {regLoading ? 'Création...' : 'Créer le compte'}
                </button>
                <button
                  type="button"
                  className="text-orange-400 hover:underline text-sm ml-4"
                  onClick={() => setMode('login')}
                >
                  Retour connexion
                </button>
              </div>
              {regError && <div className={`text-center font-semibold mt-2 ${regError.startsWith('Compte créé') ? 'text-orange-400' : 'text-red-500'}`}>{regError}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

