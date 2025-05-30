"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VisitesGuidees from "@/components/VisitesGuidees";
import Hotels from "@/components/Hotels";
import SoireesSpectacles from "@/components/SoireesSpectacles";
import Home from "@/app/page";

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const [currentPage, setCurrentPage] = useState("Accueil");
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header changePage={setCurrentPage} />
                <main className="flex-1 pt-20">
                    {currentPage === "Accueil" ? (
                        <Home />
                    ) : currentPage === "VisitesGuidees" ? (
                        <VisitesGuidees />
                    ) : currentPage === "Hotels" ? (
                        <Hotels />
                    ) : currentPage === "SoireesSpectacles" ? (
                        <SoireesSpectacles />
                    ) : (
                        <div>Page Not Found</div>
                    )}
                </main>
                <Footer />
            </body>
        </html>
    );
}
