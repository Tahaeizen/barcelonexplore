'use client';
import Contact from './Contact.jsx';
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import { useMyContext } from "./provider/MyContextProvider";

export default function Footer() {
    const { theme, toggleTheme } = useMyContext();
    const { t: tFooter } = useTranslation('footer');
    return (
        <footer className={` text-black py-4 mt-6 font-sans border-t border-amber-200  ${
                theme === "light" ? "bg-blue-700" : "bg-amber-100"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Colonne 1 */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">BarcelonExplore</h3>
                        <p className="text-sm leading-relaxed">
                            {tFooter('footer.about_us')}
                        </p>
                    </div>
                    {/* Colonne 2 */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">Nos services</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/visites-guidees" className="hover:underline font-semibold">
                                    {tFooter('footer.legal_mentions')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/hotels" className="hover:underline font-semibold">
                                    {tFooter('footer.privacy_policy')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/soirees-spectacles" className="hover:underline font-semibold">
                                    {tFooter('footer.terms_of_use')}
                                </Link>
                            </li>
                            <li className="font-semibold">
                                <Link href="/mentions-legales" className="hover:underline">
                                    {tFooter('footer.all_rights_reserved')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                  
                    {/* Colonne 3 */}
                    <div>
                        <h3 className="font-bold text-lg mb-2"> Contact</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/contact" className="hover:underline font-semibold">
                                   {tFooter('footer.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-xs text-black mt-4 opacity-70">
                    &copy; 2025 BarcelonExplore. {tFooter('footer.all_rights_reserved')}
                </div>
            </div>
        </footer>
    );
}
