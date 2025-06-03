import { IoIosMenu } from "react-icons/io";

export default function NavBar({ setPage }) {
    return (

        <nav className="flex justify-between items-center h-20 bg-amber-100">
            <ul className="space-x-4 hidden sm:flex">
                <li> <a href="/">Accueil</a></li>
                <li> <a href="/destinations">Destinations</a></li>
                <li> <a href="/circuits">Circuits</a></li>
                <li> <a href="/contact">Contact</a></li>
        <nav className="flex justify-between items-center h-20 text-gray-900 px-4">
            <IoIosMenu className="text-2xl block sm:hidden" />
            <ul className="flex space-x-6 hidden sm:flex">
                <li>
                    <button
                        onClick={() => setPage("Accueil")}
                        className="cursor-pointer font-bold text-lg"
                    >
                        Accueil
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setPage("VisitesGuidees")}
                        className="cursor-pointer font-bold text-lg"
                    >
                        Visites guidées
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setPage("Hotels")}
                        className="cursor-pointer font-bold text-lg"
                    >
                        Hôtels
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setPage("SoireesSpectacles")}
                        className="cursor-pointer font-bold text-lg"
                    >
                        Soirées et spectacles
                    </button>
                </li>
            </ul>
        </nav>
    );
}

