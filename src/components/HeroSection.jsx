import { ArrowDown, ArrowRight, Heart } from "lucide-react"
import myImage from "../assets/Main_Hero_Portrait.png"

export const HeroSection = () => {

    return (
        <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 gap-8 pt-20 md:pt-0">
            <div className="flex-1 max-w-[700px] text-center space-y-6 order-2 md:order-1">
                <div className="ml-4 md:ml-6 flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-6">
                        <Heart className="w-4 h-4 text-pink-600" />
                        <span className="text-pink-700">Available for new projects</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold relative z-10" style={{ position: "relative", zIndex: 0 }}>
                        <span className="opacity-0 animate-fade-in relative z-10">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Ayet </span>
                        <span className="text-gradiant ml-2 opacity-0 animate-fade-in-delay-2">Derki</span>
                    </h1>

                    <p className="text-left text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 mt-4 relative z-10" style={{ position: "relative", zIndex: 0 }}>
                        I'm a Software Engineer passionate about building modern, scalable, and user-friendly web and mobile applications. With a strong interest in AI and emerging technologies, I enjoy turning ideas into practical solutions while continuously learning, exploring, and improving my craft.
                    </p>

                    <div className="flex gap-4 justify-center pt-12 flex-wrap relative z-10" style={{ position: "relative", zIndex: 0 }}>
                        <a href="#projects" className="cosmic-button flex gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl animate-fade-in-delay-4">
                            <ArrowRight size={24} />
                            View My Work
                        </a>

                        <a href="#contact" className="px-4 py-2 hover:scale-105 font-medium active:scale-95 border border-pink-300 text-pink-600 hover:bg-pink-50 transition-all duration-300 rounded-xl animate-fade-in-delay-5">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
            <img src={myImage} alt="Ayet Derki" className="relative flex-1 w-[380px] md:w-[400px] lg:w-[500px] md:order-2 order-1" />

        </section>

    )

}