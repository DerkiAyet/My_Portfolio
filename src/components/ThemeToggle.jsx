import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"; 

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {

        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const initialDarkMode = storedTheme === "dark" || (!storedTheme && prefersDark);
        
        setIsDarkMode(initialDarkMode);

        if (initialDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []); 

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        
        localStorage.setItem("theme", newDarkMode ? "dark" : "light");
        
        if (newDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    return (
        <button
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-[9999] p-2 rounded-full transition-colors duration-300",
                "focus:outline-none cursor-pointer bg-background border border-border shadow-sm hover:bg-accent"
            )} 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
        >
            {isDarkMode ?
                <Sun className="h-6 w-6 text-yellow-300" />
                :
                <Moon className="h-6 w-6 text-blue-900" />
            }
        </button>
    )
}