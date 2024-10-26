"use client"

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if we're at the top
            setIsScrolled(currentScrollY > 10);

            // Hide/show based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false); // Scrolling down
            } else {
                setIsVisible(true); // Scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'approach', label: 'Approach' },
        { id: 'process', label: 'Process' },
        { id: 'work', label: 'Work' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'contact', label: 'Contact' },
    ];

    const NavItems = ({ mobile = false }) => (
        <>
            {navItems.map((item) => (
                <li key={item.id}>
                    <button
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                            "text-sm font-medium relative py-1 px-1 transition-colors",
                            !isScrolled && !mobile ? "text-white hover:text-white/80" : "hover:text-black",
                            "before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[1px]",
                            !isScrolled && !mobile ? "before:bg-white" : "before:bg-black",
                            "before:scale-x-0 hover:before:scale-x-100 before:transition-transform",
                            activeSection === item.id
                                ? (!isScrolled && !mobile ? "text-white before:scale-x-100" : "text-black before:scale-x-100")
                                : (!isScrolled && !mobile ? "text-white/80 before:scale-x-0" : "text-gray-600 before:scale-x-0"),
                            mobile && "w-full text-left py-3"
                        )}
                    >
                        {item.label}
                    </button>
                </li>
            ))}
        </>
    );

    return (
        <div className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent",
            isVisible ? "translate-y-0" : "-translate-y-full"
        )}>
            <nav className="max-w-4xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Mobile hamburger */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button className={cn(
                                    "p-2 -ml-2 transition-colors",
                                    isScrolled ? "text-gray-600 hover:text-black" : "text-white hover:text-white/80"
                                )}>
                                    <Menu className="h-5 w-5" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[240px] p-0">
                                <div className="px-6 py-6">
                                    <ul className="flex flex-col space-y-4">
                                        <NavItems mobile />
                                    </ul>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop navigation */}
                    <ul className="hidden md:flex items-center justify-center space-x-8 flex-1">
                        <NavItems />
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;