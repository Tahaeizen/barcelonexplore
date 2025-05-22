import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <section id="services" className="mb-24 scroll-mt-20">
            {/* Introduction */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Nos Services</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Découvrez notre gamme complète de services pour rendre votre séjour à Barcelone inoubliable. 
                    De la visite guidée aux circuits personnalisés, nous vous accompagnons dans toutes vos envies.
                </p>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-[200px] mb-6">
                        <Image
                            src="/img/visites-guidees.webp"
                            alt="Visites guidées"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Visites guidées</h3>
                    <p className="text-gray-600">
                        Découvrez Barcelone avec nos guides experts passionnés par la ville.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-[200px] mb-6">
                        <Image
                            src="/img/hotels.webp"
                            alt="Hôtels"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Hôtels</h3>
                    <p className="text-gray-600">
                        Une sélection des meilleurs hôtels de Barcelone pour votre séjour.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-[200px] mb-6">
                        <Image
                            src="/img/soirees-spectacles.webp"
                            alt="Soirées et spectacles"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Soirées et spectacles</h3>
                    <p className="text-gray-600">
                        Profitez des meilleures soirées et spectacles de Barcelone : flamenco, concerts, événements locaux et plus encore.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="relative h-[200px] mb-6">
                        <Image
                            src="/img/sejours-sur-mesure.webp"
                            alt="Circuits personnalisés"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Circuits personnalisés</h3>
                    <p className="text-gray-600">
                        Des parcours adaptés à vos centres d'intérêt pour une expérience unique à Barcelone.
                    </p>
                </div>
            </div>
        </section>
    );
} 