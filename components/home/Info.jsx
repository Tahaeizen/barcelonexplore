import Link from "next/link";

export default function Info() {
  return (
    <section
      id="info"
      className="bg-amber-50 p-8 rounded-lg mb-8 scroll-mt-20"
      aria-label="À propos de BarcelonExplore"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">À propos de nous</h2>

        <p className="text-gray-700 mb-6">
          BarcelonExplore est une agence de voyages spécialisée dans
          l'organisation d&apos;événements et de séjours à Barcelone. Nous
          proposons des services sur mesure pour les groupes de 8 à 500
          personnes.
        </p>

        <p className="text-gray-700 mb-8">
          Notre expertise et nos relations privilégiées avec les meilleurs
          hôtels et prestataires de services nous permettent de vous offrir
          des tarifs compétitifs et un service de qualité.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 font-semibold transition-colors"
          aria-label="Contactez BarcelonExplore"
        >
          Contactez-nous
        </Link>
      </div>
    </section>
  );
}
