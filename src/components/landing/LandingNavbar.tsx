"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "หน้าแรก", href: "#hero" },
    { name: "เกี่ยวกับเรา", href: "#about" },
    { name: "สินค้าและบริการ", href: "#services" },
    { name: "ติดต่อเรา", href: "#contact" },
];

export default function LandingNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 w-100 z-3 transition-all duration-300 ${isScrolled ? "bg-white shadow py-2" : "bg-transparent py-4 text-white"
                    }`}
                style={{ zIndex: 1030 }}
            >
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Logo */}
                    <Link href="#hero" className="text-decoration-none me-auto">
                        <span
                            className={`fs-3 fw-bold ${isScrolled ? "text-primary" : "text-dark"
                                }`}
                        >
                            SLConcrete
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="d-none d-lg-flex gap-4 align-items-center me-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`btn ${isScrolled ? "btn-primary" : "btn-light"}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="d-none d-lg-block">
                        <a href="#contact" className={`btn ${isScrolled ? "btn-primary" : "btn-light"}`}>
                            สอบถามข้อมูล
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="d-lg-none btn btn-link p-0 text-decoration-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} className={isScrolled ? "text-dark" : "text-white"} />
                        ) : (
                            <Menu size={28} className={isScrolled ? "text-dark" : "text-white"} />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed-top w-100 bg-white shadow-lg overflow-hidden d-lg-none"
                        style={{ top: "60px", zIndex: 1020 }}
                    >
                        <div className="d-flex flex-column p-4 gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-dark text-decoration-none fs-5 fw-medium border-bottom pb-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn btn-primary mt-2"
                            >
                                สอบถามข้อมูล
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
