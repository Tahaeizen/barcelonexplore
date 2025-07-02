"use client";

import Image from "next/image";

export default function DisplayVisite({ titre, image, description, prix }) {
  return (
    <article
      className="m-4 border rounded-lg shadow-md bg-white flex flex-col h-full"
      aria-label={`Visite : ${titre}`}
    >
      {/* Image de la visite */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={titre || "Image de visite guidée"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover rounded-t-lg"
          priority
        />
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col p-4">
        <header className="mb-4 min-h-[100px] flex flex-col">
          <h3 className="font-bold text-lg mb-2 text-gray-900">{titre}</h3>
          <p className="text-gray-700 text-sm">{description}</p>
        </header>

        <hr className="my-2 border-gray-200" />

        <section aria-label="Tarification">
          <div className="mb-1 text-sm text-gray-600">Prix à partir de</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{prix}</div>
          <div className="text-xs text-gray-600">
            Par personne pour une visite privée avec guide et bus
          </div>
        </section>
      </div>
    </article>
  );
}
