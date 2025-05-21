import Banniere from "@/components/home/Banniere";
import Participants from "@/components/home/Participants";
import Sponsors from "@/components/home/Sponsors";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Banniere />

            {/* Section d’introduction */}
            <section className="p-6 bg-amber-100 text-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <Image
                        src="/img/barcelona.webp" // mets une image dans public/images/
                        alt="Vue de Barcelone"
                        width={800}
                        height={400}
                        className="mx-auto mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl font-bold mb-4">Bienvenue chez BarcelonExplore</h1>
                    <p className="mb-4">
                        BarcelonExplore est une agence de voyages spécialisée dans la découverte de Barcelone. 
                        Nous offrons aux touristes une sélection d’activités inoubliables : spectacles de flamenco, visites guidées à vélo, et bien plus encore.
                    </p>
                    <p className="mb-4">
                        Notre objectif est de rendre la planification de votre séjour aussi agréable que vos vacances. 
                        Avec un design moderne, responsive et intuitif, notre site vous aide à explorer les meilleurs événements de la ville.
                    </p>
                    <p className="mb-4">
                        Créé par trois voyageurs passionnés, ce projet combine technologie, design et amour du voyage pour offrir une expérience immersive.
                    </p>
                </div>
            </section>

        </>
    );
}
