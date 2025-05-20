import Banniere from "@/components/home/Banniere";
import Participants from "@/components/home/Participants";
import Sponsors from "@/components/home/Sponsors";

import Image from 'next/image';
export default function Home() {
    return (
         <>
            <Banniere />
            <Participants />
            <Sponsors />
        </>
        
    );
}
