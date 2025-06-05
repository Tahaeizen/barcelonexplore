"use client";
import { useState } from "react";
import listeSoirees from "@/public/json/soirees.json";
import DisplaySoirees from "./DisplaySoirees.jsx";
import Timer from "@/components/Timer";

export default function SoireesSpectacles() {
  const [offerActive, setOfferActive] = useState(true);

  return (
    <section className="max-w-6xl flex w-full flex-col items-center mx-auto px-4 py-10 mb-24 scroll-mt-20">
      <h1 className="text-3xl font-bold text-center mb-2 font-sans mt-10">
        Profitez des meilleures soirées et spectacles de Barcelone
      </h1>

      {/* Timer only if offer active */}
      {offerActive && (
        <Timer
          compte={3600} // 1 hour countdown, adjust as needed
          onExpire={() => setOfferActive(false)}
        />
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
