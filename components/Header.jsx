import Image from "next/image";
import logo from "@/public/img/sagrada-familia.webp";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useState } from "react";

export default function Header({ changePage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-amber-100 text-gray-900 shadow-md h-20 flex items-center">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 sm:px-8">
                {/* Logo + titre + hamburger */}
                <div className="flex items-center min-w-[250px] flex-shrink-0">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={50}
                        height={50}
                        onClick={() => changePage("Accueil")}
                        className="cursor-pointer"
                    />
                    <span className="ml-3 font-bold text-2xl sm:text-3xl tracking-tight">BarcelonExplore</span>
                    {/* Hamburger */}
                    <button 
                        className="lg:hidden p-2 ml-4"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Navbar */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <NavBar setPage={changePage} />
                </div>

                {/* Drapeau de la Catalogne */}
                <div className="hidden lg:flex flex-shrink-0">
                    <Image
                        src="/img/drapeau-catalogne.webp"
                        alt="Drapeau de la Catalogne"
                        width={50}
                        height={50}
                        className="cursor-pointer"
                    />
                </div>

                {/* Menu mobile */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-20 left-0 right-0 bg-amber-100 shadow-lg z-40 pt-10`}>
                    <NavBar isMobile={true} onClose={() => setIsMenuOpen(false)} />
                </div>
            </div>
        </header>
    );
}
