import ElectricBorder from '../Components/ElectricBorder';
import React from 'react';

export default function Contact() {
  // Form state
  const [status, setStatus] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    const form = e.target as HTMLFormElement;
    // Anti-spam simple
    if ((form.elements.namedItem('honeypot') as HTMLInputElement)?.value) {
      setStatus('Erreur : spam détecté.');
      setLoading(false);
      return;
    }
    // Simule l'envoi (remplace par un vrai backend si besoin)
    setTimeout(() => {
      setStatus('Message envoyé ! Je vous réponds rapidement.');
      setLoading(false);
      form.reset();
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-10 text-center">Contact</h2>
        <div className="relative">
          <form className="bg-[#181818] rounded-2xl p-8 shadow-lg border-2 border-orange-500 flex flex-col gap-6 transition-all duration-300 hover:shadow-[0_0_32px_0_#ff6a00] focus-within:shadow-[0_0_32px_0_#ff6a00]" aria-label="Formulaire de contact" onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-white/80 font-semibold">Nom</label>
            <input id="name" name="name" type="text" placeholder="Votre nom" className="px-5 py-4 rounded-lg bg-[#232323] text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500" aria-required="true" aria-label="Nom" required />
            <label htmlFor="email" className="text-white/80 font-semibold">Email</label>
            <input id="email" name="email" type="email" placeholder="Votre email" className="px-5 py-4 rounded-lg bg-[#232323] text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500" aria-required="true" aria-label="Email" required />
            <label htmlFor="message" className="text-white/80 font-semibold">Message</label>
            <textarea id="message" name="message" placeholder="Votre message" rows={5} className="px-5 py-4 rounded-lg bg-[#232323] text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500" aria-required="true" aria-label="Message" required />
            {/* Champ anti-spam invisible */}
            <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <button type="submit" className="bg-linear-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all" aria-label="Envoyer le message" disabled={loading}>{loading ? 'Envoi...' : 'Envoyer'}</button>
            {status && <div className={`mt-4 text-center font-semibold ${status.startsWith('Erreur') ? 'text-red-500' : 'text-orange-400'}`}>{status}</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
