import Image from "next/image";
import Link from "next/link";
import services from "@/public/json/services.json";
import DisplayService from "@/components/DisplayService";

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
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {services.map((service, idx) => (
                    <DisplayService
                        key={idx}
                        image={service.image}
                        alt={service.alt}
                        titre={service.titre}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
} 