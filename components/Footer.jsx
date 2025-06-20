import Contact from './Contact.jsx';
import Link from 'next/link';
export default function Footer() {
    return (
        <footer className="bg-amber-100 text-black py-4 mt-6 font-sans border-t border-amber-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Colonne 1 */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">BarcelonExplore</h3>
                        <p className="text-sm leading-relaxed">
                            Agence de voyages spécialisée dans la découverte de Barcelone.
                        </p>
                    </div>
                    {/* Colonne 2 */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">Nos services</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/visites-guidees" className="hover:underline font-semibold">
                                    Visites guidées
                                </Link>
                            </li>
                            <li>
                                <Link href="/hotels" className="hover:underline font-semibold">
                                    Hôtels
                                </Link>
                            </li>
                            <li>
                                <Link href="/soirees-spectacles" className="hover:underline font-semibold">
                                    Soirées & spectacles
                                </Link>
                            </li>
                            <li className="font-semibold">
                                Circuits personnalisés
                            </li>
                        </ul>
                    </div>
                    {/* Colonne 3 */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">Langues</h3>
                        <ul className="space-y-1">
                            <li className="font-semibold">Français</li>
                            <li className="font-semibold">English</li>
                        </ul>
                    </div>
                    {/* Colonne 4 */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">Contact</h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="#info" className="hover:underline font-semibold">À propos de nous</a>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline font-semibold">
                                    Contactez-nous
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-xs text-black mt-4 opacity-70">
                    &copy; 2025 BarcelonExplore. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
