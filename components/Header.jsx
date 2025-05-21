import Image from "next/image";;
import NavBar from "@/components/NavBar";

export default function Header() {
    return (
        <header className="flex justify-center h-20 items-center bg-amber-100 text-black">
            <Image src="/img/sagrada-familia.webp" alt="Logo" width={50} height={50} />
            <NavBar />
        </header>
    );
}
