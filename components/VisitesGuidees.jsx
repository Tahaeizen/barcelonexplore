import listeVisites from "@/public/json/visites.json";
import DisplayVisite from "./DisplayVisite";

export default function VisitesGuidees() {
  return (
    <section className="max-w-6xl flex w-full flex-col items-center mx-auto px-4 py-10 mb-24 scroll-mt-20">
      {/* Bloc d'introduction */}
      <h1 className="text-3xl font-bold text-center mb-2 font-sans mt-10">Explorez Barcelone autrement avec nos visites exclusives</h1>
      <div className="flex justify-center mb-4">
        <div className="h-1 w-16 bg-amber-400 rounded"></div>
      </div>
      <h2 className="text-2xl md:text-4xl font-serif text-center font-semibold mb-8">
        Découvrez la ville, sa culture et ses secrets à travers des expériences uniques pour petits groupes et familles
      </h2>
      <p className="max-w-2xl mx-auto text-center mb-8 text-base text-gray-700">
        Nos guides passionnés vous accompagnent dans des parcours originaux, gourmands ou insolites, pour vivre Barcelone comme un local. Réservez votre place et laissez-vous surprendre par la richesse de la capitale catalane !
      </p>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listeVisites.map((visite) => (
          <DisplayVisite
            key={visite.id}
            titre={visite.titre}
            image={visite.image}
            description={visite.description}
            prix={visite.prix}
          />
        ))}
      </div>
    </section>
  );
} 