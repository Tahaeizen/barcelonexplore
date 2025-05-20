import { IoIosMenu } from "react-icons/io";
export default function NavBar() {
    return (
        <nav className="flex justify-between items-center h-20 text-white px-4">
            <IoIosMenu className="text-2xl block sm:hidden" />
            <ul className="flex space-x-4 hidden sm:flex">
                <li>Home</li>
                <li>Personel</li>
                <li>Document</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
