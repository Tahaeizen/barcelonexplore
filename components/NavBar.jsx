export default function NavBar() {
    return (
        <nav className="flex justify-between items-center h-20 bg-amber-100">
            <ul className="space-x-4 hidden sm:flex">
                <li> <a href="/">Accueil</a></li>
                <li> <a href="/destinations">Destinations</a></li>
                <li> <a href="/circuits">Circuits</a></li>
                <li> <a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}
