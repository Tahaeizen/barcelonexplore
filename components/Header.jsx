import Image from "next/image";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-amber-100 text-gray-900 shadow-md h-20 flex items-center">
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
                {/* Logo + nom à gauche */}
                <div className="flex items-center space-x-2">
                    <Image src="/img/sagrada-familia.webp" alt="Logo" width={36} height={36} className="sm:w-[50px] sm:h-[50px]" />
                    <span className="font-bold text-lg sm:text-2xl tracking-tight">BarcelonExplore</span>
                </div>
                {/* Menu centré */}
                <div className="hidden sm:flex flex-1 justify-center">
                    <NavBar />
                </div>
                {/* Bouton Contact à droite */}
                <div className="hidden sm:block">
                    <Link href="#contact" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-full shadow transition-all">
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
}
