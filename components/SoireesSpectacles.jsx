"use client";

import { useState } from "react";
import listeSoirees from "@/public/json/soirees.json";
import DisplaySoirees from "./DisplaySoirees.jsx";
import Timer from "@/components/Timer";

export default function SoireesSpectacles() {
  const [offerActive, setOfferActive] = useState(true);
  const endDate = new Date(2025, 7, 25, 20, 0); // 25 août 2025 à 20h00
  const now = new Date();
  const timeLeft = Math.floor((endDate - now) / 1000);

  return (
    <section
      className="max-w-6xl flex w-full flex-col items-center mx-auto px-4 py-10 mb-24 scroll-mt-20"
      aria-label="Liste des soirées et spectacles à Barcelone"
    >
      {/* Titre principal */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 font-sans mt-10 text-gray-900">
        Profitez des meilleures soirées et spectacles de Barcelone
      </h1>

      {/* Ligne décorative */}
      <div className="flex justify-center mb-4" aria-hidden="true">
        <div className="h-1 w-16 bg-amber-300 rounded"></div>
      </div>

      {/* Offre spéciale */}
      {offerActive ? (
        <section
          className="flex flex-col items-center my-4 text-center"
          aria-label="Offre spéciale en cours"
        >
          <span className="text-base md:text-lg font-semibold text-amber-700 uppercase tracking-wide mb-1">
            Offre spéciale
          </span>

          <p className="text-base text-gray-800 font-bold mb-1">
            Pour un ticket acheté, le deuxième est offert
          </p>

          <p className="text-sm text-gray-600 mb-2">
            Valable jusqu'au{" "}
            {endDate.toLocaleDateString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

          <span className="text-sm text-gray-500 mb-1">Temps restant</span>

          <span
            className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm text-3xl md:text-4xl font-bold text-gray-900"
            aria-live="polite"
          >
            <Timer compte={timeLeft} onExpire={() => setOfferActive(false)} />
          </span>
        </section>
      ) : (
        <p
          className="text-red-600 font-bold my-4"
          role="alert"
          aria-label="Offre expirée"
        >
          L&apos;offre est expirée.
        </p>
      )}

      {/* Affichage des soirées */}
      {offerActive && (
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6"
          aria-label="Soirées disponibles"
        >
          {listeSoirees.map((soiree) => (
            <DisplaySoirees
              key={soiree.id}
              titre={soiree.titre}
              image={soiree.image}
              description={soiree.description}
              prix={soiree.prix}
              date={soiree.date}
            />
          ))}
        </section>
      )}
    </section>
  );
}
