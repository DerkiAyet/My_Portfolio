
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

const navItems = [
    {
        name: "Home",
        href: "#hero"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Contact",
        href: "#contact"
    }
]

export const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <nav className={cn("fixed w-full transition-all duration-300 z-50",
            isScrolled ? "py-3 bg-background/80 background-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between relative">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10 mr-2" style={{ fontFamily: "Belleza, sans-serif", fontSize: "1.5rem", }}>
                        <span className="text-glow text-foreground italic mr-1">Derki Ayet</span> {"   "} Portfolio {"  "}
                    </span>
                    <Sparkles className="w-5 h-5 text-primary" />
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8 "> {/* hidden= display: none; md:flex= mean in @media (min-width: 768px)=  display: flex;  */}
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold">
                            {item.name}
                        </a>
                    ))}

                </div>

                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-[9001] cursor-pointer"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile nav */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-[9000] flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 "> {/* hidden= display: none; md:flex= mean in @media (min-width: 768px)=  display: flex;  */}
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold">
                                {item.name}
                            </a>
                        ))}

                    </div>
                </div>
            </div>
        </nav>
    )
}