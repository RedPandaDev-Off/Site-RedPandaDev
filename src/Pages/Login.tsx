
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  // Login states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // Register states
  // ...existing code...
  const [regEmail, setRegEmail] = useState('');
  const [regEmailConfirm, setRegEmailConfirm] = useState('');
  const [regPassword, setRegPassword] = useState('');
  // ...existing code...
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
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
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

