import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]); 
    const [sparkles, setSparkles] = useState([]);

      const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
    const applyTheme = () => {
        const isDark = document.documentElement.classList.contains("dark");
        setIsDarkMode(isDark);
        if (isDark) {
            generateStars();
            generateSparkles();
        } else {
            setStars([]);
            setSparkles([]);
        }
    };

    // run once on mount, using the actual class
    applyTheme();

    const handleResize = () => {
        if (document.documentElement.classList.contains("dark")) {
            generateStars();
        }
    };
    window.addEventListener("resize", handleResize);

    // react to later theme changes
    const observer = new MutationObserver(applyTheme);
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
    });

    return () => {
        window.removeEventListener("resize", handleResize);
        observer.disconnect();
    };
}, []);


    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 6000);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const generateSparkles = () => {
        const numberOfSparkles = 20;
        const newSparkles = [];

        for (let i = 0; i < numberOfSparkles; i++) {
            newSparkles.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 3,
                duration: Math.random() * 2 + 2,
            });
        }

        setSparkles(newSparkles);
    };


    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                    key={star.id}
                />
            ))}

            {sparkles.map((sparkle) => (
                <div
                    className="sparkle animate-sparkle"
                    style={{
                        width: `${sparkle.size * 5}px`,
                        height: `${sparkle.size * 5}px`,
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                        animationDelay: `${sparkle.delay}s`,
                        animationDuration: `${sparkle.duration}s`,
                    }}
                    key={sparkle.id}
                />
            ))}
        </div>
    );
};
