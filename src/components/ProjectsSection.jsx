import { ArrowRight, ArrowLeft, ExternalLink, Github, Figma } from 'lucide-react'
import { useRef } from 'react'
import adminDashboard from "../assets/admin_dashboard.png"

const img = (name) => new URL(`../assets/${name}`, import.meta.url).href

const projects = [
    {
        id: 1,
        title: "SnapLearn",
        description: "A learning platform built to encourage collaboration between students, developed as my graduation project.",
        image: img("SnapLearn_Presentation.png"),
        tags: ["Microservices", "React", "Expo", "Spring Boot", "Node.js", "FastAPI", "Kafka", "Redis", "Docker"],
        link: "http://snaplearn.ddns.net:3000/",
        github: "https://github.com/DerkiAyet/Projet_Startup.git"
    },
    {
        id: 2,
        title: "Perfect Recipes",
        description: "A multilingual recipe community to browse, share, rate, and save recipes.",
        image: img("PerfectRecipes_Presentation.png"),
        tags: ["React", "Node.js", "Express", "MongoDB", "i18next"],
        github: "https://github.com/DerkiAyet/Recipes_Project"
    },
    {
        id: 3,
        title: "Instagram Clone",
        description: "A social media app inspired by Instagram, with posts, follows, comments, and real-time messaging.",
        image: img("InstaClone_Presentation.png"),
        tags: ["React", "Node.js", "Express", "MySQL", "Socket.io"],
        github: "https://github.com/DerkiAyet/Instgram_Project"
    },
    {
        id: 4,
        title: "Safe Home",
        description: "IoT home monitoring app with real-time sensor visualization.",
        image: img("SafeHome_Presentation.jpg"),
        tags: ["Flutter", "Dart", "Firebase", "IoT", "UI/UX Design", "Figma"],
        type: "Multidisciplinary",
        role: "Mobile Developer · UI/UX Designer",
        link: "",
        github: "",
        uiLink: "https://www.figma.com/design/iB7JbbZ6Z20LeBWa0enkuS/Smart-Home?node-id=0-1&t=0S8irDgY7IBXJWhJ-1"
    },
    {
        id: 5,
        title: "Horae+",
        type: "Multidisciplinary",
        role: "Frontend Lead · API Integration",
        description: "A teacher management system for scheduling, absence tracking and automatic payroll for teachers, with admin and teacher dashboards.",
        image: img("Horae_Presentation.png"),
        tags: ["React", "Django REST", "REST API", "MySQL"],
        github: "https://github.com/DerkiAyet/Horae_3eme_Project"
    },
    {
        id: 6,
        title: "CodeGrade",
        type: "Multidisciplinary",
        role: "UI/UX Designer · Frontend Lead · Backend",
        description: "A PFE management platform built on a Microservices architecture to manage end-of-studies projects: themes, groups, assignments, documents and defenses.",
        image: img("CodeGrade_Presentation1.png"),
        tags: ["Microservices", "React", "Django REST", "Node.js", "MySQL", "MongoDB", "Docker"],
        github: "https://github.com/DerkiAyet/CodeGrade_Project_2CS",
        uiLink: "https://www.figma.com/design/dJg7dbL7vjW8poDgdHVgPD/Projet-2CS-SIW?node-id=0-1&t=0Gk5fZYkmoQXSaqC-1"
    },
    {
        id: 7,
        title: "Flutter Playground",
        description: "A Flutter learning repo with small apps, reusable widgets and tips, all launched from one app.",
        image: img("Flutter_Playground.jpg"), // replace with img("FlutterPlayground_Presentation.png")
        tags: ["Flutter", "Dart", "Provider", "Responsive Design", "Theming"],
        github: "https://github.com/DerkiAyet/DevMobile"
    },
    {
        id: 8,
        title: "Dashly",
        description: "A Flutter food delivery app with menu browsing, cart, payment flow and order tracking.",
        image: img("Dashly_Presentation.png"),
        tags: ["Flutter", "Dart", "Provider", "Firebase", "Stripe"],
        github: "https://github.com/DerkiAyet/Food_Delivery",
        objectCover: true
    },
    {
        id: 9,
        title: "Machine Learning Fundamentals",
        description: "Hands-on notebooks covering core machine learning algorithms, plus two end-to-end projects.",
        image: img("ML_Presentation.jpg"), // replace with img("MachineLearning_Presentation.png")
        tags: ["Python", "scikit-learn", "pandas", "Jupyter", "Flask"],
        github: "https://github.com/DerkiAyet/MachineLearning"
    },
    {
        id: 10,
        title: "Credit Card Fraud Detection",
        description: "Web app that scores card transactions with an ML model, using each card's history to flag fraud.",
        image: img("FraudGuard_Presentation.png"),
        tags: ["React", "Flask", "scikit-learn", "pandas", "MySQL"],
        github: "https://github.com/DerkiAyet/Fraud_Detection"
    },
]

const ProjectsSection = () => {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        if (!scrollRef.current) return
        const { clientWidth } = scrollRef.current
        scrollRef.current.scrollBy({
            left: direction === "left" ? -clientWidth * 0.9 : clientWidth * 0.9,
            behavior: "smooth",
        })
    }

    return (
        <section id="projects" className='py-24 px-4 relative'>
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured <span className="text-primary">Projects</span> </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of the projects I've worked on, showcasing my skills in full-stack development, UI/UX design, and problem-solving. Each project demonstrates my ability to create modern, efficient, and user-friendly web applications.
                </p>

                <div className="relative">
                    <button
                        onClick={() => scroll("left")}
                        className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20
                            w-10 h-10 rounded-full bg-card border border-border shadow-md
                            flex items-center justify-center hover:bg-primary hover:text-primary-foreground
                            transition-colors duration-300"
                        aria-label="Scroll projects left"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory
                            no-scrollbar px-2 py-2"
                    >
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group gradient-border bg-card rounded-lg shadow-xs overflow-hidden card-hover
                                flex flex-col flex-shrink-0 w-[80%] sm:w-[350px] snap-center"
                            >
                                <div className="relative h-54 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full ${project.objectCover ? "object-cover" : "object-fill"} transform transition-transform duration-500 group-hover:scale-110`}
                                    />
                                    {project.type && (
                                        <span className="absolute top-3 left-3 z-10 text-white text-[11px] font-medium px-2 py-0.5 rounded-full
        bg-black/15 border border-white/20 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                                            {project.type} Project
                                        </span>
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="bg-primary/10 text-primary border border-primary/20 text-xs font-medium px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                    {project.role && (
                                        <p className="text-xs font-medium text-primary mb-2">{project.role}</p>
                                    )}
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <div className="flex space-x-3">
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Source code"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            {project.uiLink && (
                                                <a href={project.uiLink} target="_blank" rel="noopener noreferrer" aria-label="UI design (Figma)"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                    <Figma size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20
                            w-10 h-10 rounded-full bg-card border border-border shadow-md
                            flex items-center justify-center hover:bg-primary hover:text-primary-foreground
                            transition-colors duration-300"
                        aria-label="Scroll projects right"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/DerkiAyet"
                        target="_blank"
                        className="cosmic-button flex gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 w-fit flex items-center mx-auto gap-2"
                    >
                        Intrested in Seeing More? Check out My Github! <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection