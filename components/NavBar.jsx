import { IoIosMenu } from "react-icons/io";

export default function NavBar({ setPage, isMobile, onClose }) {
    const handleNavigation = (page) => {
        setPage(page);
        if (isMobile && onClose) {
            onClose();
        }
    };

    return (
        <nav className={`${isMobile ? 'flex flex-col' : 'flex justify-between items-center h-20'} text-gray-900 px-4 bg-amber-100`}>
            {!isMobile && <IoIosMenu className="text-2xl block sm:hidden" />}
            <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-6 hidden sm:flex'}`}>
                <li>
                    <button onClick={() => handleNavigation("Accueil")} className="cursor-pointer font-bold text-lg">
                        Accueil
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavigation("VisitesGuidees")} className="cursor-pointer font-bold text-lg">
                        Visites guidées
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavigation("Hotels")} className="cursor-pointer font-bold text-lg">
                        Hôtels
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavigation("SoireesSpectacles")} className="cursor-pointer font-bold text-lg">
                        Soirées et spectacles
                    </button>
                </li>
            </ul>
        </nav>
    );
}

