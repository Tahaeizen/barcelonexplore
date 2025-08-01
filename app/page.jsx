import Banniere from "@/components/home/Banniere";
import Services from "@/components/home/Services";
import Info from "@/components/home/Info";


export const metadata = {
    title: 'Accueil',
    description: 'Page accueil',
    openGraph: {
      title: 'Accueil',
      description: 'Page accueil',
      images: ['/img/sagrada-familia.webp']
    },
    manifest: '/manifest.json',
};

export default function Home() {
    return (
        <div>
            <Banniere />
            <Services />
            <Info />
        </div>
    );
}
