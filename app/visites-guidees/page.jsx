import VisitesGuidees from '@/components/VisitesGuidees';


export const metadata = {
    title: 'Visites Guidees',
    description: 'Page visites guidees',
    openGraph: {
      title: 'Visites Guidees',
      description: 'Page visites guidees',
      images: ['public/img/sagrada-familia.webp']
    }
}
 
export default function VisitesGuideesPage() {
    return <VisitesGuidees />;
}