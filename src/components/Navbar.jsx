import React, { useState } from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['Home', 'About Us', 'Ecosystem', 'FAQs', 'Updates'];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div
            className="fixed top-0 right-0 w-full bg-black text-slate-50 z-50 border-b "
            style={{
                borderImage: 'linear-gradient(to right, black, white, black) 1',
                borderImageSlice: 1,
            }}
        >
            <div className="mx-auto max-w-[1400px] flex justify-between items-center px-6 py-4">
                {/* Logo and Nav */}
                <div className="flex items-center">
                    <p className="text-3xl font-bold tracking-wide mr-6">AxkT</p>
                    <ul className="hidden md:flex items-center space-x-6">
                        {navLinks.map((item) => (
                            <li key={item} className="text-xl hover:cursor-pointer list-none">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Icons and Contact for Desktop */}
                <div className="hidden md:flex items-center gap-x-4">
                    <a href="#"><Github /></a>
                    <a href="#"><Twitter /></a>
                    <a href="#"><Linkedin /></a>
                    <button className="border border-gray-100 rounded-full px-6 py-2">Contact us</button>
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden flex flex-col gap-1 cursor-pointer z-50" onClick={toggleMenu}>
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                        className="w-6 h-[2px] bg-white origin-center"
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        animate={{
                            rotate: isOpen ? -45 : 0,
                            y: isOpen ? -6 : 0,
                            opacity: isOpen ? 1 : 1,
                        }}
                        className="w-6 h-[2px] bg-white origin-center"
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Mobile Menu Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-black px-6 pt-4 pb-6 border-t border-t-gray-200"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((item) => (
                                <li key={item} className="text-lg hover:cursor-pointer list-none">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4 mt-4">
                            <a href="#"><Github /></a>
                            <a href="#"><Twitter /></a>
                            <a href="#"><Linkedin /></a>
                        </div>
                        <button className="mt-6 w-full border border-gray-100 rounded-full px-6 py-2">
                            Contact us
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
