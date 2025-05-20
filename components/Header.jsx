import Image from "next/image";
import logo from "@/public/img/react.webp";
import NavBar from "@/components/NavBar";

export default function Header() {
    return (
        <header className="flex justify-center h-20 items-center bg-blue-700 text-white">
            <Image src={logo} alt="Logo" width={50} height={50} />
            <NavBar />
        </header>
    );
}
