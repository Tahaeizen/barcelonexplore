"use client";
import { useEffect, useState } from "react";
import DisplayHotel from "./DisplayHotel";
import listeHotels from "@/public/json/hotels.json";

export default function Hotels() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-center mb-2 font-sans mt-10">Nos meilleurs hôtels à Barcelone</h1>
      <div className="flex justify-center mb-4">
        <div className="h-1 w-16 bg-amber-400 rounded"></div>
      </div>
      <h2 className="text-2xl md:text-4xl font-serif text-center font-semibold mb-8">
        Confort, emplacement et services pour tous les budgets
      </h2>
      <p className="max-w-2xl mx-auto text-center mb-8 text-base text-gray-700">
        Découvrez notre sélection d'hôtels à Barcelone, du boutique-hôtel de charme à l'auberge conviviale, pour un séjour inoubliable dans la capitale catalane.
      </p>
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