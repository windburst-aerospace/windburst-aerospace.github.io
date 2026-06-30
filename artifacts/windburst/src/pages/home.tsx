import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, ChevronRight, Mail, Youtube, X, ZoomIn, Menu, ChevronDown } from "lucide-react";
import { Link } from "wouter";

import rocketFlight from "@assets/Screenshot_20260616_182728_Gallery_upscayl_4x_high-fidelity-4x_1781631734645.png";
import parachute from "@assets/Screenshot_2026-04-28_201647_1781629243086.png";
import cadModel from "@assets/Screenshot_2026-06-14_232113_1781629243088.png";
import cadSection from "@assets/Screenshot_2026-06-15_215809_1781629243088.png";
import railCad from "@assets/Screenshot_2026-06-20_130205_1782843628194.png";
import engineSection from "@assets/Screenshot_2026-06-21_180703_1782843628196.png";
import openRocket from "@assets//Screenshot 2026-06-30 201305.png";
import sidAvatar from "@assets/minecraft-render-blazing_phantom-walking-800x1000_(1)_1781639200142.png";
import kpAvatar from "@assets/minecraft-render-kp007-walking-800x1000_(1)_1781639200145.png";
import maxAvatar from "@assets/image_1781980338707.webp";

const spring = { type: "spring" as const, stiffness: 80, damping: 20 };
const springFast = { type: "spring" as const, stiffness: 120, damping: 22 };

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: spring },
};
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: spring },
};
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: spring },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: springFast },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const gallery = [
  { img: rocketFlight,   label: "LAUNCH",               caption: "Rocket ascending under full thrust" },
  { img: parachute,      label: "RECOVERY",             caption: "Parachute deployment at apogee" },
  { img: engineSection,  label: "CAD — LRE-800",        caption: "800N liquid rocket engine cross-section" },
  { img: cadModel,       label: "CAD — ENGINE INPUT",   caption: "N₂O/IPA propellant input assembly" },
  { img: railCad,        label: "CAD — RAIL SYSTEM",    caption: "Basic Prototype Test Stand interface" },
  { img: openRocket,     label: "SIMULATION",           caption: "OpenRocket Simulation for our Liquid Rocket" },
  { img: cadSection,     label: "CAD — 800N PROTOTYPE", caption: "Combustion chamber cross-section" },
];

const team = [
  { name: "Siddarth Assudani", avatar: sidAvatar },
  { name: "Krishna Pandey",    avatar: kpAvatar },
  { name: "Maxmillan Mokrzanski", avatar: maxAvatar },
];

const navLinks = [
  { label: "ABOUT",    href: "#about" },
  { label: "GALLERY",  href: "#gallery" },
  { label: "TEAM",     href: "#team" },
  { label: "PROJECTS", href: "/projects", isPage: true },
  { label: "CONTACT",  href: "#contact" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const [lightbox, setLightbox] = useState<null | { img: string; label: string; caption: string }>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto px-5 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary w-5 h-5" />
            <span className="text-lg md:text-xl font-bold tracking-tight text-white">WINDBURST</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 text-sm font-mono text-muted-foreground">
            {navLinks.map((l) =>
              l.isPage ? (
                <Link key={l.label} href={l.href} className="hover:text-primary transition-colors duration-200">{l.label}</Link>
              ) : (
                <a key={l.label} href={l.href} className="hover:text-primary transition-colors duration-200">{l.label}</a>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.youtube.com/@WindBurstAero" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors duration-200">
              <Youtube className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href={import.meta.env.VITE_MEMBERS_URL ?? "/members"} className="hidden md:block font-mono text-xs text-muted-foreground hover:text-primary transition-colors border border-white/10 hover:border-primary/40 px-3 py-1.5">
              MEMBERS
            </a>
            {/* Hamburger */}
            <button
              className="md:hidden p-1 text-muted-foreground hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-white/5 bg-background/95 backdrop-blur-xl"
            >
              <div className="flex flex-col py-4 px-5 gap-1">
                {navLinks.map((l) =>
                  l.isPage ? (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="py-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors border-b border-white/5"
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      className="py-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors border-b border-white/5"
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </a>
                  )
                )}
                <a
                  href={import.meta.env.VITE_MEMBERS_URL ?? "/members"}
                  className="py-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  MEMBERS
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-end justify-start pb-20 md:pb-28 pt-16">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent z-10" />
          <img src={rocketFlight} alt="Windburst rocket in flight" className="w-full h-full object-cover object-center" />
        </motion.div>

        <div className="container relative z-20 px-5">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={slideLeft} className="flex items-center gap-4 mb-5">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="font-mono text-primary text-xs tracking-widest uppercase">Amateur High-Power Rocketry</span>
            </motion.div>
            <motion.h1
              variants={slideUp}
              className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-6"
            >
              WINDBURST<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">AEROSPACE</span>
            </motion.h1>
            <motion.p variants={slideUp} className="text-sm md:text-base text-muted-foreground max-w-md font-mono leading-relaxed mb-8">
              We design, build, and fly high-powered rockets. Every flight teaches us something new.
            </motion.p>
            <motion.div variants={slideUp} className="flex flex-col sm:flex-row gap-3">
              <a href="#gallery">
                <Button size="lg" className="rounded-none w-full sm:w-auto h-12 md:h-14 px-7 font-mono text-xs tracking-widest group">
                  SEE OUR WORK
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="rounded-none w-full sm:w-auto h-12 md:h-14 px-7 font-mono text-xs tracking-widest border-white/20 hover:bg-white/5">
                  OUR PROJECTS
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-36 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-5 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            <div>
              <motion.div variants={slideLeft} className="flex items-center gap-4 mb-5">
                <div className="h-[1px] w-8 bg-primary" />
                <span className="font-mono text-primary text-xs tracking-widest">WHO WE ARE</span>
              </motion.div>
              <motion.h2 variants={slideLeft} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                BUILD.<br />LAUNCH.<br />LEARN.
              </motion.h2>
              <motion.p variants={slideLeft} className="font-mono text-muted-foreground leading-relaxed mb-4 text-sm">
                Windburst Aerospace is a small, passionate team of students building high-powered rockets from the ground up. We handle everything ourselves — airframe construction, motor selection, recovery systems, and flight analysis.
              </motion.p>
              <motion.p variants={slideLeft} className="font-mono text-muted-foreground leading-relaxed text-sm">
                We compete, experiment, and occasionally watch things go sideways. That's how we learn.
              </motion.p>
              <motion.div variants={slideLeft} className="mt-8">
                <Link href="/projects">
                  <button className="font-mono text-xs text-primary tracking-widest flex items-center gap-2 hover:gap-3 transition-all duration-200 group">
                    VIEW PROJECTS <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </div>

            <motion.div variants={slideRight} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />
              <div
                className="relative overflow-hidden border border-white/10 cursor-zoom-in group"
                onClick={() => setLightbox({ img: parachute, label: "RECOVERY", caption: "Parachute deployment at apogee" })}
              >
                <img
                  src={parachute}
                  alt="Parachute recovery"
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: "brightness(0.85)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-8 h-8 text-white/80" />
                </div>
                <div className="absolute bottom-0 left-0 p-4 font-mono">
                  <div className="text-xs text-primary tracking-widest mb-1">RECOVERY</div>
                  <div className="text-white text-sm">Chute deployment — successful</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 md:py-36 relative border-t border-white/5 bg-black/50">
        <div className="container mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mb-12 md:mb-16"
          >
            <motion.div variants={slideLeft} className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="font-mono text-primary text-xs tracking-widest">WHAT WE BUILD</span>
            </motion.div>
            <motion.h2 variants={slideLeft} className="text-4xl md:text-6xl font-bold tracking-tight">
              HARDWARE &amp; FLIGHTS
            </motion.h2>
            <motion.p variants={slideLeft} className="font-mono text-muted-foreground text-sm mt-3">
              Click any image to view fullscreen.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...spring, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group relative border border-white/10 overflow-hidden cursor-zoom-in"
                onClick={() => setLightbox(item)}
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-black/60">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-300" />
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent z-20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-30 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-[10px] font-mono text-primary mb-1 tracking-widest">{item.label}</div>
                  <p className="text-xs text-white/80 font-mono leading-snug">{item.caption}</p>
                </div>
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 pointer-events-none z-40" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 md:py-36 relative bg-background">
        <div className="container mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mb-12 md:mb-16"
          >
            <motion.div variants={slideLeft} className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="font-mono text-primary text-xs tracking-widest">THE CREW</span>
            </motion.div>
            <motion.h2 variants={slideLeft} className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
              TEAM
            </motion.h2>
            <motion.p variants={slideLeft} className="font-mono text-muted-foreground text-sm">
              Three students building rockets out of passion.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...spring, delay: i * 0.13 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative border border-white/10 bg-black/40 backdrop-blur-sm p-6 md:p-8 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="w-20 h-20 md:w-24 md:h-24 mb-5 overflow-hidden bg-black border border-white/10">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-[10px] font-mono text-primary tracking-widest mb-1">CO-FOUNDER</div>
                <h4 className="text-base md:text-lg font-bold text-white tracking-tight">{member.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects CTA */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <motion.div variants={slideLeft} className="flex items-center gap-4 mb-3">
                <div className="h-[1px] w-8 bg-primary" />
                <span className="font-mono text-primary text-xs tracking-widest">WHAT'S NEXT</span>
              </motion.div>
              <motion.h2 variants={slideLeft} className="text-3xl md:text-5xl font-bold tracking-tight">
                UPCOMING<br className="md:hidden" /> PROJECTS
              </motion.h2>
            </div>
            <motion.div variants={slideRight}>
              <Link href="/projects">
                <Button size="lg" className="rounded-none h-12 md:h-14 px-8 font-mono text-xs tracking-widest group whitespace-nowrap">
                  VIEW ALL PROJECTS
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-36 relative border-t border-white/5">
        <div className="container mx-auto px-5 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="border border-white/10 bg-black/40 backdrop-blur-lg p-10 md:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h2 className="text-3xl md:text-5xl font-bold mb-5">GET IN TOUCH</h2>
            <p className="font-mono text-muted-foreground mb-8 max-w-md mx-auto text-sm">
              Interested in following our builds or collaborating? Reach out.
            </p>
            <a
              href="mailto:windburst.aerospace@gmail.com"
              className="inline-flex items-center gap-3 border border-white/20 px-6 md:px-8 py-4 font-mono text-xs tracking-widest hover:bg-white/5 hover:border-primary/50 transition-all duration-300 text-white"
            >
              <Mail className="w-4 h-4" />
              windburst.aerospace@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-black">
        <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary w-4 h-4" />
            <span className="text-sm font-bold tracking-tight text-white">WINDBURST AEROSPACE</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            Siddarth Assudani · Krishna Pandey · Maxmillan Mokrzanski
          </span>
          <a href="https://www.youtube.com/@WindBurstAero" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors duration-200">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 10 }}
              transition={springFast}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={lightbox.img}
                alt={lightbox.label}
                className="w-full max-h-[80vh] object-contain border border-white/10"
              />
              <div className="mt-4 font-mono">
                <div className="text-xs text-primary tracking-widest mb-1">{lightbox.label}</div>
                <p className="text-sm text-white/70">{lightbox.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
