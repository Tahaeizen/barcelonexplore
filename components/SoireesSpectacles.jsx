"use client";
import { useState } from "react";
import listeSoirees from "@/public/json/soirees.json";
import DisplaySoirees from "./DisplaySoirees.jsx";
import Timer from "@/components/Timer";

export default function SoireesSpectacles() {
  const [offerActive, setOfferActive] = useState(true);

  return (
    <section className="max-w-6xl flex w-full flex-col items-center mx-auto px-4 py-10 mb-24 scroll-mt-20">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 font-sans mt-10 text-gray-800">
        Profitez des meilleures soirées et spectacles de Barcelone
      </h1>
      <div className="flex justify-center mb-4">
        <div className="h-1 w-16 bg-amber-300 rounded"></div>
      </div>

      {/* Timer only if offer active */}
      {offerActive && (
        <div className="flex flex-col items-center my-4">
          <span className="text-base md:text-lg font-semibold text-amber-700 uppercase tracking-wide mb-1">
            Offre spéciale
          </span>
          <span className="text-sm text-gray-500 mb-1">Expire dans</span>
          <span className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm text-3xl md:text-4xl font-bold text-gray-900">
            <Timer compte={3600} onExpire={() => setOfferActive(false)} />
          </span>
        </div>
      )}

      {!offerActive && (
        <div className="text-red-600 font-bold my-4">
          L'offre est expirée.
        </div>
      )}

      {/* Show soirees only if offer active */}
      {offerActive && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listeSoirees.map((soiree) => (
            <DisplaySoirees
              key={soiree.id}
              titre={soiree.titre}
              image={soiree.image}
              description={soiree.description}
              prix={soiree.prix}
            />
          ))}
        </div>
      )}
    </section>
  );
}
