import { Mail, MapPin, Phone, Linkedin, Facebook, Send, Sparkles, Heart } from 'lucide-react'
import { FaTelegramPlane } from "react-icons/fa"
import React from 'react'
import emailjs from '@emailjs/browser'
import { cn } from "@/lib/utils"
import { useToast } from '@/hooks/use-toast'

const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const formRef = React.useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,   // service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // template ID
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // public key
        )   // in vite we use: import.meta.env
            .then(() => {
                toast({
                    title: "Message sent successfully!",
                    description: "Thank you for reaching out. I will get back to you as soon as possible.",
                });
                formRef.current?.reset();
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                toast({
                    title: "Something went wrong",
                    description: "Please try again or email me directly.",
                    variant: "destructive",
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }
    return (
        <section id="contact" className="py-20 bg-background text-foreground">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center"> Get In <span className="text-primary">Touch</span> </h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-8 flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-6">Contact <span className="text-primary">Information</span></h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:ayetderki@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        ayetderki@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+213784258073"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +213 784 25 80 73
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">
                                        Algeria, Oran, Sidi-Chami
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h4 className="font-medium mb-4 text-lg">Connect With <span className="text-primary">Me</span></h4>
                            <div className="flex gap-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/derki-ayet-35999931a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-muted-foreground hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-400 hover:text-white transition-all duration-300"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://www.facebook.com/derki.ayet.3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-muted-foreground hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-400 hover:text-white transition-all duration-300"
                                >
                                    <Facebook size={20} />
                                </a>
                                <a
                                    href="https://t.me/aytouta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Telegram"
                                    className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-muted-foreground hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-400 hover:text-white transition-all duration-300"
                                >
                                    <FaTelegramPlane size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-8 card-hover">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Sparkles className="w-5 h-5 text-pink-500" />
                            <h3 className="text-2xl font-semibold">Send a <span className="text-pink-500">Message</span></h3>
                        </div>
                        <form ref={formRef} className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='flex items-center gap-2 text-md font-medium mb-2'>
                                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Name
                                </label>
                                <input type="text" id="name"
                                    name="name"
                                    className="w-full p-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-colors"
                                    placeholder="Ex. John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='flex items-center gap-2 text-md font-medium mb-2'>
                                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Email
                                </label>
                                <input type="email" id="email" name="email" className="w-full p-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-colors" placeholder="Ex. john@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="message" className='flex items-center gap-2 text-md font-medium mb-2'>
                                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Message
                                </label>
                                <textarea id="message" name="message" rows={4} className="w-full p-3 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-colors resize-none" placeholder="Ex. Hello, I'd like to know more about your services..." required />
                            </div>
                            <button type="submit" className={cn("cosmic-button flex w-full items-center p-2 text-md md:text-lg justify-center gap-2",
                                "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
                            )}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending
                                        <Heart size={18} className="fill-current animate-pulse-subtle" />
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection