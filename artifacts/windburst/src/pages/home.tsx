import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  ChevronRight,
  Github,
  Mail,
} from "lucide-react";

import rocketFlight from "@assets/Screenshot_20260616_182728_Gallery_upscayl_4x_high-fidelity-4x_1781631734645.png";
import parachute from "@assets/Screenshot_2026-04-28_201647_1781629243086.png";
import cadModel from "@assets/Screenshot_2026-06-14_232113_1781629243088.png";
import cadSection from "@assets/Screenshot_2026-06-15_215809_1781629243088.png";

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

const team = [
  { name: "Siddarth Assudani" },
  { name: "Krishna Pandey" },
  { name: "Maxmillan Mokrzanski" },
];

const gallery = [
  { img: rocketFlight, label: "LAUNCH", caption: "Rocket ascending under full thrust" },
  { img: parachute, label: "RECOVERY", caption: "Parachute deployment at apogee" },
  { img: cadModel, label: "CAD — ENGINE INPUT", caption: "N\u2082O/IPA liquid rocket engine propellant input" },
  { img: cadSection, label: "CAD — 800N PROTOTYPE", caption: "800N liquid rocket engine cross-section" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary w-5 h-5" />
            <span className="text-xl font-bold tracking-tight text-white">WINDBURST</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
            <a href="#gallery" className="hover:text-primary transition-colors">GALLERY</a>
            <a href="#team" className="hover:text-primary transition-colors">TEAM</a>
            <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Button variant="outline" className="rounded-none font-mono text-xs font-bold tracking-wider border-white/20 hover:bg-white/5">
              <Github className="w-4 h-4 mr-2" /> GITHUB
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-end justify-start pb-24 pt-20">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent z-10" />
          <img
            src={rocketFlight}
            alt="Windburst rocket in flight"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="container relative z-20 px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="font-mono text-primary text-sm tracking-widest uppercase">Amateur High-Power Rocketry</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8"
            >
              WINDBURST<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AEROSPACE</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground max-w-xl font-mono leading-relaxed mb-10"
            >
              {/* Edit this tagline */}
              We design, build, and fly high-powered rockets. Every flight teaches us something new.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <a href="#gallery">
                <Button size="lg" className="rounded-none h-14 px-8 font-mono text-sm tracking-widest group">
                  SEE OUR WORK
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#team">
                <Button size="lg" variant="outline" className="rounded-none h-14 px-8 font-mono text-sm tracking-widest border-white/20 hover:bg-white/5">
                  MEET THE TEAM
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-primary" />
                <span className="font-mono text-primary text-xs tracking-widest">WHO WE ARE</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                {/* Edit heading */}
                BUILD.<br />LAUNCH.<br />LEARN.
              </motion.h2>
              <motion.p variants={fadeInUp} className="font-mono text-muted-foreground leading-relaxed mb-6">
                {/* Edit this paragraph */}
                Windburst Aerospace is a small, passionate team of students building high-powered rockets from the ground up. We handle everything ourselves — airframe construction, motor selection, recovery systems, and flight analysis.
              </motion.p>
              <motion.p variants={fadeInUp} className="font-mono text-muted-foreground leading-relaxed">
                {/* Edit this paragraph */}
                We compete, experiment, and occasionally watch things go sideways. That's how we learn.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />
              <div className="relative overflow-hidden border border-white/10">
                <img
                  src={parachute}
                  alt="Parachute recovery"
                  className="w-full h-72 object-cover object-center"
                  style={{ filter: "brightness(0.85)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 font-mono">
                  <div className="text-xs text-primary tracking-widest mb-1">RECOVERY</div>
                  <div className="text-white text-sm">Chute deployment — successful</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 relative border-t border-white/5 bg-black/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="font-mono text-primary text-xs tracking-widest">WHAT WE BUILD</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight">
              HARDWARE &amp; FLIGHTS
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative border border-white/10 overflow-hidden cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden relative bg-black/60">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-20" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-30">
                  <div className="text-xs font-mono text-primary mb-1 tracking-widest">{item.label}</div>
                  <p className="text-sm text-white/80 font-mono">{item.caption}</p>
                </div>
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-colors pointer-events-none z-40" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="font-mono text-primary text-xs tracking-widest">THE CREW</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              TEAM
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-mono text-muted-foreground max-w-md">
              {/* Edit this */}
              Three students building rockets out of passion.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="group relative border border-white/10 bg-black/40 backdrop-blur-sm p-8 hover:bg-white/5 transition-colors"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="w-14 h-14 bg-white/5 border border-white/10 mb-6 flex items-center justify-center text-primary font-mono text-sm font-bold">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="text-xs font-mono text-primary tracking-widest mb-1">CO-FOUNDER</div>
                <h4 className="text-lg font-bold text-white tracking-tight">{member.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 bg-black/40 backdrop-blur-lg p-12 md:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {/* Edit heading */}
              GET IN TOUCH
            </h2>
            <p className="font-mono text-muted-foreground mb-10 max-w-md mx-auto">
              {/* Edit this */}
              Interested in following our builds or collaborating? Reach out.
            </p>
            <a
              href="mailto:windburstaerospace@gmail.com"
              className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-mono text-sm tracking-widest hover:bg-white/5 hover:border-primary/50 transition-all text-white"
            >
              <Mail className="w-4 h-4" />
              windburstaerospace@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary w-4 h-4" />
            <span className="text-base font-bold tracking-tight text-white">WINDBURST AEROSPACE</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            Siddarth Assudani · Krishna Pandey · Maxmillan Mokrzanski
          </span>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
