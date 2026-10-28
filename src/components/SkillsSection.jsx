import { useEffect, useRef, useState } from "react"
// import { Code2, Server, Cloud, Palette, GitBranch, Database } from "lucide-react"

const skillCategories = [
    {
        title: "Frontend",
        mainColor: "text-pink-500",
        gradient: "from-pink-500 to-rose-300",
        description:
            "Building responsive, accessible interfaces with a focus on clean design, smooth interactions, and a consistent user experience across web and mobile.",
        skills: ["HTML", "CSS", "JavaScript", "React", "React Native", "Flutter", "Tailwind CSS", "TypeScript"],
    },
    {
        title: "Backend",
        mainColor: "text-blue-500",
        gradient: "from-blue-500 to-cyan-400",
        description:
            "Building RESTful APIs and server-side logic with a focus on security, maintainability, and clear communication between application components.",
        skills: ["Node.js", "Express", "Django REST Framework", "REST APIs", "WebSocket", "JWT", "OAuth"],
    },
    {
        title: "DevOps & Distributed Systems",
        mainColor: "text-emerald-500",
        gradient: "from-emerald-500 to-teal-300",
        description:
            "Building containerized, distributed applications where independent services communicate reliably and can be developed and deployed efficiently.",
        skills: ["Docker", "Docker Hub", "CI/CD", "Microservices", "Kafka"],
    },
    {
        title: "Database",
        mainColor: "text-amber-500",
        gradient: "from-amber-500 to-yellow-300",
        description:
            "Designing and working with relational and NoSQL databases based on application requirements, data structure, and access patterns.",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    },
    {
        title: "Design",
        mainColor: "text-purple-500",
        gradient: "from-purple-500 to-violet-300",
        description:
            "Turning ideas and Figma designs into consistent, responsive interfaces while keeping usability and visual clarity in focus.",
        skills: ["Figma", "UI/UX", "Design Systems", "Responsive"],
    },
    {
        title: "Version Control",
        mainColor: "text-slate-500",
        gradient: "from-slate-500 to-gray-400",
        description:
            "Managing source code with Git and GitHub, from organized branching and collaboration to version tracking and project maintenance.",
        skills: ["Git", "GitHub"],
    },
];

const TimelineCard = ({ category, index }) => {
    const cardRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const isLeft = index % 2 === 0
    const Icon = category.icon

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect() // animate in once, don't re-trigger
                }
            },
            { threshold: 0.25 }
        )
        if (cardRef.current) observer.observe(cardRef.current)
        return () => observer.disconnect()
    }, [])

    return (
    <div className={`relative flex items-center w-full mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
        {/* Dot on the line */}
        <div
            className={`absolute left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full
                bg-gradient-to-br ${category.gradient} border-4 border-background z-10
                transition-all duration-500
                ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        />

        {/* Card */}
        <div
            ref={cardRef}
            className={`gradient-border card-hover p-6 md:p-8 w-full md:w-[calc(50%-3rem)]
                ml-12 md:ml-0 relative overflow-hidden
                ${isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}
                transition-all duration-700 ease-out
                ${isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${isLeft ? "md:-translate-x-12" : "md:translate-x-12"} -translate-y-4`}`}
        >
            <span className={`absolute -top-2 ${isLeft ? "right-4 md:right-8" : "right-4"}
                text-7xl md:text-8xl font-bold bg-gradient-to-br ${category.gradient}
                bg-clip-text text-transparent opacity-20 select-none leading-none`}>
                {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative z-10 text-center">
                <h3 className={`font-bold text-xl md:text-2xl mb-2 ${category.mainColor}`} style={{fontFamily: "Belleza, sans-serif"}}>{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 max-w-[96%] mx-auto">
                    {category.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
)}

export const SkillsSection = () => {
    const containerRef = useRef(null)
    const [lineProgress, setLineProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // How far we've scrolled through the container, 0 -> 1
            const total = rect.height - windowHeight * 0.5
            const scrolled = windowHeight * 0.75 - rect.top
            const progress = Math.min(Math.max(scrolled / total, 0), 1)
            setLineProgress(progress)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div ref={containerRef} className="relative">
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/10" />
                    {/* Filled line (grows with scroll) */}
                    <div
                        className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-0.5 bg-primary transition-all duration-150 ease-out"
                        style={{ height: `${lineProgress * 100}%` }}
                    />

                    {skillCategories.map((category, index) => (
                        <TimelineCard key={category.title} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}