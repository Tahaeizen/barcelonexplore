import Image from "next/image";

export default function Banniere() {
    return (
        <div className="-mt-20">
            <section id="accueil" className="mt-20 mb-12 scroll-mt-20">
                <div className="relative h-[500px] mb-16">
                    <Image
                        src="/img/barcelona.webp"
                        alt="Vue de Barcelone"
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-6">Bienvenue chez BarcelonExplore</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Votre partenaire de confiance pour découvrir Barcelone
                    </p>
                </div>
            </section>
        </div>
    );
}
