import services from "@/public/json/services.json";
import DisplayService from "@/components/DisplayService";

export default function Services() {
  return (
    <section
      id="services"
      className="mb-24 scroll-mt-20"
      aria-label="Nos services à Barcelone"
    >
      {/* Introduction */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Nos Services</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Découvrez notre gamme complète de services pour rendre votre séjour à Barcelone inoubliable. 
          De la visite guidée aux circuits personnalisés, nous vous accompagnons dans toutes vos envies.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, idx) => (
          <DisplayService
            key={service.id ?? idx}  // ideally service.id exists for stable keys
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
