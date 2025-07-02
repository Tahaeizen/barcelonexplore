import Contact from "@/components/Contact";


export const metadata = {
    title: 'Contact',
    description: 'Page contact',
    openGraph: {
      title: 'Contact',
      description: 'Page contact',
      images: ['public/img/sagrada-familia.webp']
    }
}

export default function ContactPage() {
    return (
        <div>
            <Contact />
        </div>
    );
}
