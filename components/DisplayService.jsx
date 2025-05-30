import Image from "next/image";

export default function DisplayService({ image, alt, titre, description }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-[200px] mb-6">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <h3 className="text-xl font-semibold mb-3">{titre}</h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    );
} 