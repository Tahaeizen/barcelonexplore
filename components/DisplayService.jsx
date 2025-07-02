import Image from "next/image";

export default function DisplayService({ image, alt, titre, description }) {
  return (
    <article
      className="bg-white p-6 rounded-lg shadow-md"
      aria-label={`Service: ${titre}`}
    >
      {/* Image du service */}
      <div className="relative h-[200px] mb-6">
        <Image
          src={image}
          alt={alt || "Image de service"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <header className="mb-3">
        <h3 className="text-xl font-semibold text-gray-900">{titre}</h3>
      </header>

      <p className="text-gray-700 text-sm">{description}</p>
    </article>
  );
}
