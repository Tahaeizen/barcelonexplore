export default function NavBar() {
    return (
        <nav className="flex justify-between items-center h-20 bg-amber-100 text-black px-4 font-sans">
            <ul className="space-x-8 hidden sm:flex">
                <li><a href="#accueil" className="hover:text-blue-600 font-semibold">Accueil</a></li>
                <li><a href="#services" className="hover:text-blue-600 font-semibold">Nos services</a></li>
                <li><a href="#info" className="hover:text-blue-600 font-semibold">À propos de nous</a></li>
            </ul>
        </nav>
    );
}
