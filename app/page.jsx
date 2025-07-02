import Banniere from "@/components/home/Banniere";
import Services from "@/components/home/Services";
import Info from "@/components/home/Info";


export const metadata = {
    title: 'Accueil',
    description: 'Page accueil',
    openGraph: {
      title: 'Accueil',
      description: 'Page accueil',
      images: ['public/img/sagrada-familia.webp']
    }
}

export default function Home() {
    return (
        <div>
            <Banniere />
            <Services />
            <Info />
        </div>
    );
}
