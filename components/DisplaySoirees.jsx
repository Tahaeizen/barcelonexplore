"use client";
import Image from "next/image";

export default function DisplaySoirees({ titre, image, description, prix, date }) {
  let descriptionWithDate = description;
  if (date) {
    const dateStr = new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    descriptionWithDate += `\nDate de l'événement : ${dateStr}`;
  }

  return (
    <div className="m-4 border rounded-lg shadow-md bg-white flex flex-col h-full">
      {/* Image en haut */}
      <div className="relative w-full h-48">
        <Image src={image} alt={titre} fill className="object-cover rounded-t-lg" />
      </div>
      {/* Contenu principal */}
      <div className="flex-1 flex flex-col p-4">
        <div className="mb-4 min-h-[100px] flex flex-col">
          <h3 className="font-bold text-lg mb-2">{titre}</h3>
          <p className="text-gray-700" style={{whiteSpace: 'pre-line'}}>{descriptionWithDate}</p>
        </div>
        <hr className="my-2" />
        <div className="mb-1 text-sm text-gray-600">prix à partir de</div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{prix}</div>
        <div className="text-xs text-gray-600">selon la place choisie</div>
      </div>
    </div>
  );
}
