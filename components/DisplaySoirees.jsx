"use client";

import Image from "next/image";

export default function DisplaySoirees({ titre, image, description, prix, date }) {
  let descriptionWithDate = description;

  if (date) {
    const dateStr = new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    descriptionWithDate += `\nDate de l'événement : ${dateStr}`;
  }

  return (
    <article
      className="m-4 border rounded-lg shadow-md bg-white flex flex-col h-full"
      aria-label={`Soirée : ${titre}`}
    >
      {/* Image de l'événement */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={titre || "Image de soirée"}
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
          <p
            className="text-gray-700 text-sm whitespace-pre-line"
          >
            {descriptionWithDate}
          </p>
        </header>

        <hr className="my-2 border-gray-200" />

        <section aria-label="Tarification">
          <div className="mb-1 text-sm text-gray-600">Prix à partir de</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{prix}</div>
          <div className="text-xs text-gray-600">Selon la place choisie</div>
        </section>
      </div>
    </article>
  );
}
