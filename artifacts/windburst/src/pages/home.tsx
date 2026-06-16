import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Rocket, 
  Target, 
  Cpu, 
  ChevronRight, 
  Github, 
  Mail, 
  MapPin, 
  ExternalLink 
} from "lucide-react";

import heroBg from "@/assets/images/hero.png";
import project1 from "@/assets/images/project-1.png";
import project2 from "@/assets/images/project-2.png";
import project3 from "@/assets/images/project-3.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary w-6 h-6" />
            <span className="text-xl font-bold tracking-tight text-white">WINDBURST</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
            <a href="#projects" className="hover:text-primary transition-colors">PROJECTS</a>
            <a href="#team" className="hover:text-primary transition-colors">TEAM</a>
            <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
          </div>
          <Button variant="default" className="rounded-none font-mono text-xs font-bold tracking-wider">
            JOIN PROGRAM
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
          <div className="absolute inset-0 bg-background/40 z-10" />
          <img src={heroBg} alt="Rocket Launch" className="w-full h-full object-cover" />
        </motion.div>

        <div className="container relative z-20 px-6 mt-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="font-mono text-primary text-sm tracking-widest uppercase">Collegiate Aerospace Program</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
              ORBIT IS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">NOT A LIMIT.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl font-mono leading-relaxed mb-10">
              Windburst Aerospace engineers high-altitude sounding rockets and suborbital payloads. We push the boundaries of collegiate engineering.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-none h-14 px-8 font-mono text-sm tracking-widest group">
                DISCOVER OUR PROJECTS
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-none h-14 px-8 font-mono text-sm tracking-widest border-white/20 hover:bg-white/5">
                VIEW STATS
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">PRECISION.<br />PURPOSE.</h2>
              <p className="font-mono text-muted-foreground leading-relaxed mb-8">
                We are a student-led organization dedicated to designing, building, and launching high-powered rockets. Our mission is to cultivate the next generation of aerospace engineers by tackling complex technical challenges head-on.
              </p>
              <div className="grid grid-cols-2 gap-8 font-mono">
                <div>
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-white font-bold mb-2">TARGET DRIVEN</h3>
                  <p className="text-sm text-muted-foreground">Every system is designed with specific mission parameters in mind.</p>
                </div>
                <div>
                  <Cpu className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-white font-bold mb-2">CUSTOM AVIONICS</h3>
                  <p className="text-sm text-muted-foreground">In-house flight computers and telemetry systems.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />
              <div className="border border-white/10 bg-black/40 backdrop-blur-md p-8 relative z-10 font-mono text-sm">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <span className="text-muted-foreground">SYSTEM_STATUS</span>
                  <span className="text-green-500">NOMINAL</span>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex justify-between"><span>MAIN_ENGINE</span> <span className="text-white">ARMED</span></div>
                  <div className="flex justify-between"><span>TELEMETRY</span> <span className="text-white">LINKED</span></div>
                  <div className="flex justify-between"><span>PAYLOAD</span> <span className="text-white">SECURED</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative border-t border-white/5 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">HARDWARE</h2>
              <p className="font-mono text-muted-foreground max-w-xl">Our fleet of competition rockets and specialized payload systems designed for extreme environments.</p>
            </div>
            <Button variant="outline" className="rounded-none font-mono text-xs tracking-widest">ALL SYSTEMS <ExternalLink className="w-4 h-4 ml-2" /></Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "PROJECT AETHER", desc: "Suborbital sounding rocket targeting 100,000 ft.", img: project2, tag: "VEHICLE" },
              { title: "NEXUS AVIONICS", desc: "Custom flight computer with redundant deployment channels.", img: project1, tag: "SYSTEMS" },
              { title: "PROMETHEUS", desc: "Scientific payload measuring atmospheric density and radiation.", img: project3, tag: "PAYLOAD" }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="group relative border border-white/10 bg-background overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                </div>
                <div className="p-6 relative z-20 bg-background/90 backdrop-blur-md border-t border-white/5">
                  <div className="text-xs font-mono text-primary mb-2">{project.tag}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{project.desc}</p>
                </div>
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors pointer-events-none z-30" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-white/10 text-center">
            {[
              { num: "30K+", label: "ALTITUDE RECORD (FT)" },
              { num: "4", label: "ACTIVE VEHICLES" },
              { num: "65+", label: "TEAM MEMBERS" },
              { num: "12", label: "SUCCESSFUL LAUNCHES" }
            ].map((stat, i) => (
              <div key={i} className="px-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.num}</div>
                <div className="text-xs font-mono text-primary tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">FLIGHT CREW</h2>
            <p className="font-mono text-muted-foreground max-w-xl">The engineering minds behind our aerospace hardware.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ELENA ROSTOVA", role: "CHIEF ENGINEER", squad: "AERODYNAMICS" },
              { name: "MARCUS CHEN", role: "LEAD AVIONICS", squad: "SYSTEMS" },
              { name: "SARAH JENKINS", role: "PROPULSION LEAD", squad: "ENGINES" },
              { name: "DAVID ODUYA", role: "PAYLOAD SPECIALIST", squad: "SCIENCE" },
              { name: "CHLOE KIM", role: "RECOVERY LEAD", squad: "MECHANICAL" },
              { name: "JAMES WRIGHT", role: "SOFTWARE LEAD", squad: "FLIGHT CODE" },
              { name: "AMIRA TARIQ", role: "STRUCTURES", squad: "MATERIALS" },
              { name: "BEN FOSTER", role: "MISSION CONTROL", squad: "OPERATIONS" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group relative border border-white/10 bg-black/40 backdrop-blur-sm p-6 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="w-12 h-12 bg-white/5 border border-white/10 mb-6 flex items-center justify-center text-primary font-mono text-xs">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-xs font-mono text-muted-foreground mb-1">{member.squad}</div>
                <h4 className="text-lg font-bold text-white tracking-tight">{member.name}</h4>
                <div className="text-sm font-mono text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  VIEW PROFILE <ChevronRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 bg-black/40 backdrop-blur-lg p-12 md:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">READY TO LAUNCH?</h2>
            <p className="font-mono text-muted-foreground mb-10 max-w-lg mx-auto">
              We are actively recruiting passionate engineering, software, and business students to join our next mission cycle.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="YOUR.EMAIL@EDU" 
                className="rounded-none h-12 bg-white/5 border-white/10 font-mono focus-visible:ring-primary"
              />
              <Button type="submit" className="rounded-none h-12 px-8 font-mono tracking-widest shrink-0">
                APPLY
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary w-5 h-5" />
            <span className="text-lg font-bold tracking-tight text-white">WINDBURST</span>
          </div>
          <div className="text-sm font-mono text-muted-foreground flex gap-6">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> University Campus, CA</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> ops@windburst.edu</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
