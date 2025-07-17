'use client';
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';
import { useTranslation } from "react-i18next";


export default function NavBar({ isMobile }) {
    const { t: tHeader } = useTranslation('header');
    return (
        <nav className={`${isMobile ? 'flex flex-col' : 'flex justify-between items-center h-20'} text-gray-900 px-4 bg-amber-100`}>
            {!isMobile && <IoIosMenu className="text-2xl block sm:hidden" />}
            <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-6 hidden sm:flex'}`}>
                <li>
                    <Link href="/" className="cursor-pointer font-bold text-lg">
                        {tHeader('header.home')}
                    </Link>
                </li>
                <li>
                    <Link href="/visites-guidees" className="cursor-pointer font-bold text-lg">
                        {tHeader('header.guided_tours')}
                    </Link>
                </li>
                <li>
                    <Link href="/hotels" className="cursor-pointer font-bold text-lg">
                        {tHeader('header.hotels')}
                    </Link>
                </li>
                <li>
                    <Link href="/soirees-spectacles" className="cursor-pointer font-bold text-lg">
                        {tHeader('header.evenings_and_shows')}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}


