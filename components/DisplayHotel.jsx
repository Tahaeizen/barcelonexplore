"use client";
import Image from "next/image";

export default function DisplayHotel({ titre, image, description, prix }) {
  return (
    <div className="m-4 border rounded-lg shadow-md bg-white flex flex-col h-full">
      {/* Image en haut */}
      <div className="relative w-full h-48">
        <Image src={image} alt={titre} fill className="object-cover rounded-t-lg" />
      </div>
      {/* Contenu principal */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="font-bold text-lg mb-2">{titre}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <hr className="my-2" />
        <div className="mb-1 text-sm text-gray-600">prix à partir de</div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{prix}</div>
        <div className="text-xs text-gray-600">par nuit et par personne, petit-déjeuner inclus</div>
      </div>
    </div>
  );
} 