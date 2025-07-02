import Image from "next/image";

export default function Banniere() {
  return (
    <section
      id="accueil"
      className="mt-20 mb-12 scroll-mt-20 relative"
      aria-label="Bannière d'accueil de BarcelonExplore"
    >
      {/* Image de la bannière */}
      <div className="relative h-[500px] mb-16 rounded-lg overflow-hidden">
        <Image
          src="/img/barcelona.webp"
          alt="Vue panoramique de Barcelone"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Texte de bienvenue */}
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Bienvenue chez BarcelonExplore
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Votre partenaire de confiance pour découvrir Barcelone
        </p>
      </div>
    </section>
  );
}
