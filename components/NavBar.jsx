export default function NavBar() {
    return (
        <nav className="flex justify-between items-center h-20 bg-amber-100 text-black px-4">
            <ul className="space-x-4 hidden sm:flex">
                <li>Accueil</li>
                <li>Destinations</li>
                <li>Circuits</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
