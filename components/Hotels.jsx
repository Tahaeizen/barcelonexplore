"use client";

import DisplayHotel from "./DisplayHotel";
import listeHotels from "@/public/json/hotels.json";

export default function Hotels() {
  return (
    <section
      className="max-w-6xl flex w-full flex-col items-center mx-auto px-4 py-10 mb-24 scroll-mt-20"
      aria-label="Liste des hôtels à Barcelone"
    >
      {/* Titre principal */}
      <h1 className="text-3xl font-bold text-center mb-2 font-sans mt-10 text-gray-900">
        Nos meilleurs hôtels à Barcelone
      </h1>

      {/* Soulignement visuel */}
      <div className="flex justify-center mb-4">
        <div className="h-1 w-16 bg-amber-400 rounded" aria-hidden="true"></div>
      </div>

      {/* Sous-titre */}
      <h2 className="text-2xl md:text-4xl font-serif text-center font-semibold mb-8 text-gray-800">
        Confort, emplacement et services pour tous les budgets
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-center mb-8 text-base text-gray-700">
        Découvrez notre sélection d&apos;hôtels à Barcelone, du boutique-hôtel de
        charme à l&apos;auberge conviviale, pour un séjour inoubliable dans la
        capitale catalane.
      </p>

      {/* Liste d'hôtels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listeHotels.map((hotel) => (
          <DisplayHotel
            key={hotel.id}
            titre={hotel.titre}
            image={hotel.image}
            description={hotel.description}
            prix={hotel.prix}
          />
        ))}
      </div>
    </section>
  );
}
