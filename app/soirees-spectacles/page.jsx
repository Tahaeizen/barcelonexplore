import SoireesSpectacles from '@/components/SoireesSpectacles';


export const metadata = {
    title: 'Soirees Spectacles',
    description: 'Page soirees spectacles',
    openGraph: {
      title: 'Soirees Spectacles',
      description: 'Page soirees spectacles',
      images: ['public/img/sagrada-familia.webp']
    }
}

 
export default function SoireesSpectaclesPage() {
    return <SoireesSpectacles />;
}