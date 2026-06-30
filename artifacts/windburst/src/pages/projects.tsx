import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Rocket, ChevronRight, ArrowLeft, Youtube, X, ZoomIn, ChevronDown, Calendar, Zap, FlaskConical, Target } from "lucide-react";

import engineSection from "@assets/Screenshot_2026-06-21_180703_1782843628196.png";
import railCad from "@assets/Screenshot_2026-06-20_130205_1782843628194.png";
import openRocket from "@assets/Screenshot_2026-05-31_194331_1782843667675.png";
import cadModel from "@assets/Screenshot_2026-06-14_232113_1781629243088.png";
import cadSection from "@assets/Screenshot_2026-06-15_215809_1781629243088.png";
import rocketFlight from "@assets/Screenshot_20260616_182728_Gallery_upscayl_4x_high-fidelity-4x_1781631734645.png";

const spring = { type: "spring" as const, stiffness: 80, damping: 20 };
const springFast = { type: "spring" as const, stiffness: 120, damping: 22 };

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: spring },
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: spring },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

type Status = "ACTIVE" | "IN DEVELOPMENT" | "PLANNING" | "COMPLETE";

interface Update {
  date: string;
  text: string;
}

interface Project {
  id: string;
  name: string;
  subtitle: string;
  status: Status;
  icon: React.ReactNode;
  description: string;
  specs: { label: string; value: string }[];
  images: { img: string; caption: string }[];
  updates: Update[];
}

const statusColor: Record<Status, string> = {
  "ACTIVE":         "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "IN DEVELOPMENT": "text-primary border-primary/30 bg-primary/10",
  "PLANNING":       "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  "COMPLETE":       "text-white/50 border-white/20 bg-white/5",
};

const projects: Project[] = [
  {
    id: "lre-800",
    name: "LRE-800",
    subtitle: "Liquid Rocket Engine",
    status: "IN DEVELOPMENT",
    icon: <FlaskConical className="w-5 h-5" />,
    description:
      "Our flagship project — an 800N thrust liquid bipropellant rocket engine using nitrous oxide and isopropyl alcohol. Designed and manufactured entirely in-house, from injector plate to nozzle geometry.",
    specs: [
      { label: "Thrust",       value: "800 N" },
      { label: "Propellants",  value: "N₂O / IPA" },
      { label: "Chamber P.",   value: "~20 bar" },
      { label: "Nozzle",       value: "Converging-diverging" },
      { label: "Ignition",     value: "Pyrotechnic" },
      { label: "Cooling",      value: "Regenerative (planned)" },
    ],
    images: [
      { img: engineSection, caption: "Combustion chamber cross-section — valve and injector layout" },
      { img: cadModel,      caption: "Propellant input assembly — N₂O/IPA feed system" },
      { img: cadSection,    caption: "Engine CAD — full cross-section view" },
    ],
    updates: [
      { date: "Jun 21, 2026", text: "Finalized combustion chamber geometry and injector plate bolt pattern in CAD." },
      { date: "Jun 14, 2026", text: "Completed full propellant input CAD including oxidizer and fuel feed lines." },
      { date: "Jun 01, 2026", text: "Started material selection for combustion chamber — evaluating 6061-T6 vs 304 SS." },
      { date: "May 15, 2026", text: "Combustion analysis complete. Targeting 800N at 20 bar chamber pressure." },
      { date: "Apr 28, 2026", text: "Project kickoff. Initial thrust and propellant sizing calculations done." },
    ],
  },
  {
    id: "proto-l",
    name: "PROTO-L",
    subtitle: "High-Power Solid Rocket",
    status: "ACTIVE",
    icon: <Rocket className="w-5 h-5" />,
    description:
      "Our current high-power solid rocket build targeting a 14,000+ ft apogee on an L-class motor. Full dual-deploy recovery, onboard altimeters, and GPS tracking. Serves as our primary flight certification vehicle.",
    specs: [
      { label: "Length",      value: "255 cm" },
      { label: "Diameter",    value: "7.62 cm" },
      { label: "Motor",       value: "L619-P" },
      { label: "Apogee",      value: "14,774 ft (sim)" },
      { label: "Max Vel.",    value: "318 m/s (Mach 0.95)" },
      { label: "Mass (wet)",  value: "13,693 g" },
    ],
    images: [
      { img: openRocket, caption: "OpenRocket simulation — L619-P configuration, 14,774 ft predicted apogee" },
      { img: railCad,    caption: "Launch rail / fin-can interface — CAD render" },
      { img: rocketFlight, caption: "Previous launch — rocket ascending under full thrust" },
    ],
    updates: [
      { date: "Jun 20, 2026", text: "Launch rail interface and fin-can CAD complete. Moving to physical fabrication." },
      { date: "May 31, 2026", text: "OpenRocket sim locked in — 14,774 ft apogee, Mach 0.948 peak velocity, 2.74 cal stability." },
      { date: "May 10, 2026", text: "Airframe tubes ordered. Centering rings and bulkheads being machined." },
      { date: "Apr 28, 2026", text: "Parachute deployment test successful — main and drogue both deployed correctly." },
      { date: "Mar 15, 2026", text: "Recovery system designed. Dual-deploy with redundant altimeters selected." },
    ],
  },
  {
    id: "recovery-v2",
    name: "RECOVERY V2",
    subtitle: "Dual-Deploy Recovery System",
    status: "PLANNING",
    icon: <Target className="w-5 h-5" />,
    description:
      "Next-generation recovery system with GPS telemetry, redundant altimeter triggering, and a custom sled design to fit tighter airframe diameters. Targeting sub-100m landing accuracy.",
    specs: [
      { label: "Drogue",     value: "18\" elliptical" },
      { label: "Main",       value: "72\" toroidal" },
      { label: "Altimeters", value: "2× redundant" },
      { label: "Telemetry",  value: "GPS + 433 MHz" },
      { label: "Target",     value: "<100m landing radius" },
      { label: "Ejection",   value: "Black powder charges" },
    ],
    images: [],
    updates: [
      { date: "Jun 15, 2026", text: "Altimeter sled dimensions finalized to fit 54mm airframe ID." },
      { date: "Jun 01, 2026", text: "GPS module selected — ublox M8N with 433 MHz telemetry link." },
      { date: "May 20, 2026", text: "Project scoped. Recovery V2 will fly on PROTO-L once complete." },
    ],
  },
  {
    id: "hotfire-stand",
    name: "HOTFIRE STAND",
    subtitle: "Static Test Infrastructure",
    status: "PLANNING",
    icon: <Zap className="w-5 h-5" />,
    description:
      "A dedicated static test stand for the LRE-800 engine. Will measure thrust via load cell, log chamber pressure, and allow safe hotfire testing before flight integration. Designed for outdoor use.",
    specs: [
      { label: "Load Cell",    value: "0–1000 N" },
      { label: "Logging",      value: "50 Hz data rate" },
      { label: "Sensors",      value: "Pressure, temp, thrust" },
      { label: "Interface",    value: "Laptop via USB DAQ" },
      { label: "Material",     value: "Welded steel frame" },
      { label: "Propellant",   value: "Remote-fill, remote-ignite" },
    ],
    images: [],
    updates: [
      { date: "Jun 10, 2026", text: "Load cell spec selected. Preliminary frame dimensions drawn up." },
      { date: "May 28, 2026", text: "Safety protocol drafted. Remote fill and remote ignition required for all hotfires." },
    ],
  },
];

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ img: string; caption: string } | null>(null);
  const [expanded, setExpanded] = useState<string | null>("lre-800");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto px-5 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Rocket className="text-primary w-5 h-5" />
            <span className="text-lg md:text-xl font-bold tracking-tight text-white">WINDBURST</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="font-mono text-xs text-muted-foreground hover:text-white transition-colors flex items-center gap-1.5">
              <ArrowLeft className="w-3 h-3" /> HOME
            </Link>
            <a href="https://www.youtube.com/@WindBurstAero" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-5 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={slideLeft} className="flex items-center gap-4 mb-5">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="font-mono text-primary text-xs tracking-widest">WHAT WE'RE BUILDING</span>
            </motion.div>
            <motion.h1 variants={slideUp} className="text-5xl md:text-8xl font-bold tracking-tighter mb-5 leading-[0.9]">
              UPCOMING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">PROJECTS</span>
            </motion.h1>
            <motion.p variants={slideUp} className="font-mono text-muted-foreground text-sm max-w-lg leading-relaxed">
              Live status and latest updates on every active build. From solid rocket airframes to liquid engines and test infrastructure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects accordion */}
      <section className="pb-24 md:pb-36">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="flex flex-col gap-3">
            {projects.map((p, i) => {
              const isOpen = expanded === p.id;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: i * 0.08 }}
                  className="border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden"
                >
                  {/* Header */}
                  <button
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left group hover:bg-white/3 transition-colors"
                    onClick={() => setExpanded(isOpen ? null : p.id)}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="text-primary flex-shrink-0">{p.icon}</div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className="text-lg md:text-xl font-bold text-white tracking-tight">{p.name}</span>
                          <span className={`font-mono text-[10px] tracking-widest px-2 py-0.5 border rounded-full ${statusColor[p.status]}`}>
                            {p.status}
                          </span>
                        </div>
                        <p className="font-mono text-xs text-muted-foreground">{p.subtitle}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 ml-4 text-muted-foreground"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/8 px-5 md:px-6 py-6 md:py-8 flex flex-col gap-8">

                          {/* Description + specs */}
                          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                            <div>
                              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-5">
                                {p.description}
                              </p>
                              {/* Specs */}
                              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                {p.specs.map((s) => (
                                  <div key={s.label}>
                                    <div className="text-[10px] font-mono text-primary tracking-widest mb-0.5">{s.label}</div>
                                    <div className="text-sm font-mono text-white">{s.value}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Images */}
                            {p.images.length > 0 && (
                              <div className="flex flex-col gap-2">
                                <div className="grid grid-cols-2 gap-2">
                                  {p.images.slice(0, 2).map((img, j) => (
                                    <motion.div
                                      key={j}
                                      whileHover={{ scale: 1.02 }}
                                      className="relative overflow-hidden border border-white/10 cursor-zoom-in group aspect-[4/3]"
                                      onClick={() => setLightbox(img)}
                                    >
                                      <img src={img.img} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ZoomIn className="w-4 h-4 text-white" />
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                                {p.images[2] && (
                                  <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="relative overflow-hidden border border-white/10 cursor-zoom-in group aspect-[16/6]"
                                    onClick={() => setLightbox(p.images[2])}
                                  >
                                    <img src={p.images[2].img} alt={p.images[2].caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                      <ZoomIn className="w-4 h-4 text-white" />
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Update log */}
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <Calendar className="w-3.5 h-3.5 text-primary" />
                              <span className="font-mono text-xs text-primary tracking-widest">LATEST UPDATES</span>
                            </div>
                            <div className="flex flex-col gap-0">
                              {p.updates.map((u, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.05 }}
                                  className="flex gap-4 py-3 border-b border-white/5 last:border-0"
                                >
                                  <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap pt-0.5 w-24 flex-shrink-0">{u.date}</span>
                                  <p className="font-mono text-xs text-white/70 leading-relaxed">{u.text}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-black">
        <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary w-4 h-4" />
            <span className="text-sm font-bold tracking-tight text-white">WINDBURST AEROSPACE</span>
          </div>
          <Link href="/" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            ← Back to home
          </Link>
          <a href="https://www.youtube.com/@WindBurstAero" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors">
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
              exit={{ scale: 0.92, opacity: 0 }}
              transition={springFast}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <img src={lightbox.img} alt={lightbox.caption} className="w-full max-h-[80vh] object-contain border border-white/10" />
              <p className="mt-4 font-mono text-sm text-white/60">{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
