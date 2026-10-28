import { Briefcase, Code2, Heart, Palette, Network } from "lucide-react"
import cvPdf from '../assets/my_cv.pdf';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex gap-3 items-center justify-center">
                            <Heart className="w-6 h-6 fill-pink-600 text-pink-600" />
                            <h3 className="text-2xl font-semibold">
                                Create <span className="text-pink-600">Beautiful</span> Degital Experiences
                            </h3>
                        </div>
                        <p className="text-muted-foreground text-lg">
                            Full-Stack Developer with over four years of experience, I specialize in building modern web and mobile applications that combine solid technical performance with thoughtful, user-focused design.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            My background spans full-stack development and distributed systems. I enjoy exploring software architectures, building reliable, user-friendly applications, I am curious about emerging technologies, and continuously seek opportunities to expand my knowledge.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            Beyond writing code, I care about building clean, maintainable solutions, paying attention to the details, and continuously learning to become a better engineer.                        
                            </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a
                                href={cvPdf}
                                download="Ayet-Derki-CV.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-[600]"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="min-w-12 min-h-12 max-w-12 max-h-12 rounded-lg flex items-center justify-center rotate-4 bg-gradient-to-br from-pink-500 to-rose-300">
                                    <Code2 className="text-white" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Web & Mobile Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Building responsive websites and cross-platform mobile applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="min-w-12 min-h-12 max-w-12 max-h-12 rounded-lg flex items-center justify-center -rotate-4 bg-gradient-to-br from-emerald-500 to-teal-300">
                                    <Network className="text-white" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Distributed Systems & DevOps
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Designing microservices and event-driven architectures, with CI/CD and DevOps practices baked in.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="min-w-12 min-h-12 max-w-12 max-h-12 rounded-lg flex items-center justify-center rotate-4 bg-gradient-to-br from-purple-500 to-violet-300">
                                    <Palette className="text-white" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Design & Creativity
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Works with Figma to bridge design concepts and development implementation.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="min-w-12 min-h-12 max-w-12 max-h-12 rounded-lg flex items-center justify-center -rotate-4 bg-gradient-to-br from-blue-500 to-cyan-400 ">
                                    <Briefcase className="text-white" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with agile
                                        methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}