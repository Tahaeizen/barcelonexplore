"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import MyContextProvider from "@/components/provider/MyContextProvider";



export default function RootLayout({ children }) {
    return (
        <html lang="fr">

            <MyContextProvider>
                <body className={`${inter.className} flex flex-col min-h-screen`}>
                    <Header />
                    <main className="flex-1 pt-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-8">
                            {children}
                        </div>
                    </main>
                    <Footer />
                </body>
            </MyContextProvider>
           
        </html>
    );
}
