import Hotels from '@/components/Hotels';


export const metadata = {
    title: 'Hotels',
    description: 'Page hotels',
    openGraph: {
      title: 'Hotels',
      description: 'Page hotels',
      images: ['public/img/sagrada-familia.webp']
    }
}

 
export default function HotelsPage() {
    return <Hotels />;
}