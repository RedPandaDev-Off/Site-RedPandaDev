import TarifCard from '../Components/TarifCard';


export default function Tarif() {
  return (
    <div id="tarif" className="flex flex-col items-center bg-[#0a0a0a] -mt-16 mb-12 pb-8">
      <h1 className="text-4xl font-bold text-white mb-8">Nos Tarifs</h1>
      <div className="flex gap-x-8 justify-center">
        <TarifCard
          title="Pack Starter"
          price="299 €"
          options={["Site vitrine 1 page", "Formulaire de contact", "SEO de base", "Livraison rapide"]}
          color="#FF6A00"
        />
        <TarifCard
          title="Pack Pro"
          price="599 €"
          options={["Jusqu'à 5 pages", "Formulaire avancé", "SEO optimisé", "Support 1 mois"]}
          color="#FF6A00"
        />
        <TarifCard
          title="Pack Premium"
          price="999 €"
          options={["Site sur mesure", "Fonctionnalités avancées", "SEO expert", "Support 3 mois"]}
          color="#FF6A00"
        />
      </div>
    </div>
  );
}
