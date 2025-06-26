"use client";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "About Me", link: "#aboutme" },
        { name: "Skills", link: "#skills" },
        { name: "Experience", link: "#experience" },
        { name: "Projects", link: "#projects" },
        { name: "Blog", link: "" },
        { name: "Gallery", link: "#gallery" },
        { name: "Contact", link: "mailto:aradhihakim@gmail.com" },
    ];

    return (
        <>
            {/* Desktop Navbar - Fixed */}
            <nav className="hidden md:flex justify-center items-center text-white pt-4 shadow-lg w-full top-0 z-50">
                <div className="flex space-x-6">
                    {menuItems.map(({ name, link }, index) => (
                        <a
                            key={index}
                            href={link}
                            target={link.startsWith("http") ? "_blank" : "_self"}
                            rel={link.startsWith("http") ? "noopener noreferrer" : ""}
                            className="relative cursor-pointer text-lg transition hover:text-gray-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full after:rounded-md"
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Mobile Navbar - Fixed Button */}
            <div className="md:hidden fixed top-0 left-0 w-auto rounded-xl text-white shadow-lg flex justify-between items-center p-2 z-50">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full transition-transform duration-300 hover:scale-110">
                    <Menu size={28} className="text-white" />
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-blue-900 to-black bg-opacity-70 backdrop-blur-xl text-white transform 
                ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out md:hidden p-6 shadow-2xl z-50`}
            >
                <button className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>✕</button>

                <div className="mt-16 flex flex-col space-y-6">
                    {menuItems.map(({ name, link }, index) => (
                        <a
                            key={index}
                            href={link}
                            target={link.startsWith("http") ? "_blank" : "_self"}
                            rel={link.startsWith("http") ? "noopener noreferrer" : ""}
                            className="relative cursor-pointer text-lg tracking-wide transition-all hover:text-gray-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full after:rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Background Overlay when Open */}
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}></div>}
        </>
    );
}
