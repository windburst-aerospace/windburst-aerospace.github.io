import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
  Youtube,
  FlaskConical,
} from "lucide-react";
import rocketFlight from "@assets/Screenshot_20260616_182728_Gallery_upscayl_4x_high-fidelity-4x_1781631734645.png";

const spring = { type: "spring" as const, stiffness: 80, damping: 20 };

const reasons = [
  {
    icon: Wrench,
    title: "Put your name near the work",
    copy: "Your support helps us turn sketches, simulations, and shop hours into real hardware built by a focused student team.",
  },
  {
    icon: ShieldCheck,
    title: "Back disciplined experimentation",
    copy: "We are building the test infrastructure, recovery systems, and flight process that make ambitious propulsion work safer and smarter.",
  },
  {
    icon: Sparkles,
    title: "Follow the long program",
    copy: "Sponsors get a closer view of the decisions, setbacks, and breakthroughs behind our future liquid-rocket effort.",
  },
];

const supportAreas = [
  "Custom liquid engine development",
  "Static-fire and instrumentation hardware",
  "Composite airframes and recovery systems",
  "Machining, materials, and electronics",
  "Launch operations and flight analysis",
];

const sponsorTiers = [
  {
    name: "FIBERGLASS",
    amount: "£100",
    icon: Rocket,
    accent: "text-orange-300",
    border: "border-orange-300/25",
    copy: "Put your brand behind the next test, tool, and iteration.",
    benefits: ["Build updates", "Sponsor roll call", "Digital partner badge"],
  },
  {
    name: "COPPER",
    amount: "£250",
    icon: Rocket,
    accent: "text-orange-200",
    border: "border-red-300/25",
    copy: "Help Out More and spread your name by being on us. ",
    benefits: ["Everything in Bronze", "Name + logo display on shirts "],
  },
  {
    name: "ALUMINUM",
    amount: "£600",
    icon: Rocket,
    accent: "text-gray-400",
    border: "border-gray-400/25",
    copy: "Make prototypes into a reality and check up on us. ",
    benefits: [
      "Everything in Copper",
      "Detailed Progress Updates",
      "Occasional Build Photos",
    ],
  },
  {
    name: "SILVER",
    amount: "£1k",
    icon: Wrench,
    accent: "text-slate-200",
    border: "border-slate-200/25",
    copy: "Help move a real hardware milestone from design to bench.",
    benefits: [
      "Everything in Aluminum",
      "Build photography",
      "Milestone briefings",
    ],
  },
  {
    name: "Steel",
    amount: "£3K",
    icon: Wrench,
    accent: "text-gray-500",
    border: "border-gray-500/35",
    copy: "Back a full workstream across propulsion, testing, or recovery.",
    benefits: [
      "Everything in Silver",
      "Featured partner presence",
      "Direct team updates",
    ],
  },
  {
    name: "CARBON-FIBER",
    amount: "£5K",
    icon: Sparkles,
    accent: "text-gray-800 [text-shadow:_0_0_15px_#d1d5db]",
    iconStyle: "text-black [filter:drop-shadow(0_0_1px_#d1d5db)]",
    border: "border-gray-500/35 [text-shadow:_0_0_2px_#d1d5db]",
    copy: "Back a full workstream across propulsion, testing, or recovery.",
    benefits: ["Everything in Steel", "", "Logo on every rocket"],
  },
  {
    name: "TUNGSTUN",
    amount: "£10K",
    icon: Sparkles,
    accent: "text-primary [text-shadow:_0_0_15px_#7DD3FC]",
    border: "border-primary/70",
    copy: "Become an anchor partner for the future height-record liquid rocket program.",
    benefits: [
      "Everything in Steel",
      "Anchor partner status",
      "Custom partnership plan",
    ],
    featured: true,
  },
  {
    name: "DIAMOND",
    amount: "£20K",
    icon: Sparkles,
    accent: "text-yellow-300 [text-shadow:_0_0_15px_#FFD700]",
    border: "border-primary/70",
    copy: "Funding an entire program for the height-record liquid rocket and be the reason we continue to succeed",
    benefits: [
      "Everything in Tungstun",
      "Logo and Name mentions everytime in any presentation",
      "Call us anytime or Consult us anytime ",
      "discounts up to 40% on custom orders",
    ],
    featured: true,
  },
  {
    name: "CUSTOM",
    amount: "TAILORED",
    icon: FlaskConical,
    accent: "text-accent",
    border: "border-accent/40",
    copy: "Have a different budget, capability, or campaign in mind? Let’s shape the partnership around it.",
    benefits: ["Flexible scope", "Mutual deliverables", "Direct planning call"],
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...spring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SponsorsPage() {
  return (
    <div className="wb-atmosphere min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary/25">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            data-testid="link-sponsors-home"
          >
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-base font-bold tracking-[0.14em] text-white">
              WINDBURST
            </span>
            <span className="hidden border-l border-white/15 pl-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground sm:inline">
              AEROSPACE
            </span>
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden items-center gap-6 font-mono text-[11px] tracking-[0.18em] text-muted-foreground md:flex">
              <Link
                href="/"
                className="transition-colors hover:text-primary"
                data-testid="link-sponsor-nav-home"
              >
                HOME
              </Link>
              <Link
                href="/projects"
                className="transition-colors hover:text-primary"
                data-testid="link-sponsor-nav-projects"
              >
                PROJECTS
              </Link>
              <span className="text-primary">SPONSOR</span>
            </div>
            <Link
              href="/members"
              className="border border-white/15 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              data-testid="link-sponsor-nav-members"
            >
              MEMBERS
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative isolate flex min-h-[760px] items-end overflow-hidden pt-28 md:min-h-[820px] md:items-center">
          <motion.div
            className="absolute inset-0 -z-20"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            <img
              src={rocketFlight}
              alt=""
              className="h-full w-full object-cover object-center opacity-45"
            />
          </motion.div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,hsl(var(--background))_4%,hsla(222,36%,6%,.84)_46%,hsla(222,36%,6%,.25)),linear-gradient(0deg,hsl(var(--background))_2%,transparent_52%,hsla(222,36%,6%,.68))]" />
          <div className="absolute right-[12%] top-[30%] -z-10 h-28 w-28 rounded-full border border-primary/20" />
          <div className="absolute right-[calc(12%+3.4rem)] top-[calc(30%+3.4rem)] -z-10 h-2 w-2 rounded-full bg-accent shadow-[0_0_24px_hsl(var(--accent))]" />

          <div className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={spring}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-primary" />
                <span className="wb-kicker">PROGRAM PARTNERSHIPS / 01</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.08 }}
                className="max-w-5xl text-[3.5rem] font-bold leading-[.88] tracking-[-.075em] text-white sm:text-7xl md:text-[8.3rem]"
              >
                HELP US BUILD
                <br />
                <span className="text-primary">THE NEXT</span>
                <br />
                <span className="text-white/45">FLIGHT.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.18 }}
                className="mt-8 max-w-xl font-mono text-sm leading-7 text-white/65 md:text-base"
              >
                Windburst Aerospace is working toward a record-breaking future
                liquid rocket program, powered by custom engines and built from
                the ground up. We are inviting serious brands to join the work
                before the countdown.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.26 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="mailto:windburst.aerospace@gmail.com?subject=Windburst%20Aerospace%20partnership"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 bg-primary px-6 font-mono text-xs font-bold tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-1 active:translate-y-0"
                  data-testid="link-sponsor-hero-contact"
                >
                  START A CONVERSATION
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/projects"
                  className="inline-flex min-h-14 items-center justify-center gap-2 border border-white/20 px-6 font-mono text-xs tracking-[0.16em] text-white transition-colors hover:border-primary/60 hover:bg-white/5"
                  data-testid="link-sponsor-hero-projects"
                >
                  SEE THE PROGRAM
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="border-y border-white/10 bg-[#091a26]/80">
          <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-hidden px-5 py-3 md:px-8">
            <span className="flex shrink-0 items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              OPEN FOR PARTNERSHIPS
            </span>
            <div className="hidden h-px w-full bg-white/10 sm:block" />
            <span className="shrink-0 font-mono text-[10px] tracking-[0.18em] text-white/45">
              CUSTOM PROPULSION / REAL HARDWARE / LONG HORIZON
            </span>
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <span className="wb-kicker">WHY THIS / 02</span>
              <h2 className="mt-5 max-w-lg text-4xl font-bold leading-[.94] tracking-[-.05em] text-white md:text-6xl">
                Serious hardware needs serious backing.
              </h2>
              <p className="mt-6 max-w-md font-mono text-sm leading-7 text-muted-foreground">
                Sponsorship is not a logo placement exercise. It is fuel for the
                materials, test equipment, machining, and launch work that move
                a young team from a promising design to a flight-ready system.
              </p>
            </Reveal>
            <div className="grid gap-3 md:grid-cols-3">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <Reveal
                    key={reason.title}
                    delay={index * 0.08}
                    className="wb-panel group relative border border-white/10 p-6 transition-colors hover:border-primary/45"
                  >
                    <div className="mb-10 flex h-10 w-10 items-center justify-center border border-primary/35 bg-primary/10 text-primary transition-transform group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 text-lg font-bold leading-tight text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-4 font-mono text-xs leading-6 text-muted-foreground">
                      {reason.copy}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07131e]/75">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <Reveal>
              <span className="wb-kicker">WHERE SUPPORT GOES / 03</span>
              <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[.95] tracking-[-.05em] text-white md:text-6xl">
                Make the ambitious part possible.
              </h2>
              <p className="mt-6 max-w-xl font-mono text-sm leading-7 text-muted-foreground">
                Every partnership can be shaped around the work that makes the
                biggest difference to the next phase of the program. We will
                show you what is being built, why it matters, and where your
                support lands.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {supportAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-start gap-3 border-t border-white/10 pt-3"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="font-mono text-xs leading-5 text-white/72">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12} className="relative">
              <div className="absolute -inset-4 border border-primary/10" />
              <div className="wb-panel relative overflow-hidden border border-white/10 p-7 md:p-10">
                <div className="absolute right-0 top-0 h-24 w-24 border-l border-b border-accent/30" />
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="wb-kicker">PARTNER BRIEF</span>
                  <span className="font-mono text-[10px] text-accent">
                    WB / FUTURE-01
                  </span>
                </div>
                <p className="mt-8 text-3xl font-bold leading-tight tracking-[-.04em] text-white">
                  Help fund the road from custom engine to future record
                  attempt.
                </p>
                <div className="mt-10 space-y-4 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-white/45">PROGRAM</span>
                    <span className="text-primary">LIQUID PROPULSION</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-white/45">STATUS</span>
                    <span className="text-accent">BUILDING NOW</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-white/45">OUTCOME</span>
                    <span className="max-w-[11rem] text-right text-white/75">
                      FUTURE RECORD PROGRAM
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="support-levels"
          className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36"
        >
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="wb-kicker">30K PROGRAM TARGET / 04</span>
            <h2 className="mt-5 text-4xl font-bold leading-[.95] tracking-[-.05em] text-white md:text-6xl">
              Choose your level of lift.
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-mono text-sm leading-7 text-muted-foreground">
              Our long-term target is about 30K in funding for the custom liquid
              engine and the height-record flight program around it. Every level
              moves a different part of the machine forward.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
            {sponsorTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <Reveal key={tier.name} delay={index * 0.08} className="h-full">
                  <motion.div
                    whileHover={{ y: -10, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`group relative flex h-full min-h-[390px] flex-col overflow-hidden border bg-[#091722]/90 p-6 transition-colors duration-500 md:p-7 ${tier.border} ${tier.featured ? "shadow-[0_0_45px_rgba(24,210,244,.13)]" : ""}`}
                  >
                    {tier.featured && (
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                    )}
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center border bg-white/[.03] ${tier.border} ${tier.accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className={`font-mono text-[10px] tracking-[.2em] ${tier.accent}`}
                      >
                        {tier.featured ? "ANCHOR" : `0${index + 1}`}
                      </span>
                    </div>
                    <div className="mt-10">
                      <div className="font-mono text-[10px] tracking-[.22em] text-white/45">
                        {tier.name} LEVEL
                      </div>
                      <div
                        className={`mt-2 text-4xl font-bold tracking-[-.06em] ${tier.accent}`}
                      >
                        {tier.amount}
                      </div>
                    </div>
                    <p className="mt-5 min-h-[72px] text-lg font-semibold leading-snug text-white">
                      {tier.copy}
                    </p>
                    <div className="mt-auto space-y-3 border-t border-white/10 pt-5">
                      {tier.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-start gap-2 font-mono text-[11px] leading-5 text-white/60"
                        >
                          <Check
                            className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${tier.accent}`}
                          />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
          <Reveal
            delay={0.18}
            className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 font-mono text-[10px] tracking-[.16em] text-white/45 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>PROGRAM TARGET / ABOUT 30K</span>
            <span className="flex items-center gap-2 text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />{" "}
              OPEN FOR ANCHOR PARTNERS
            </span>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="wb-kicker">WHAT PARTNERS RECEIVE / 05</span>
            <h2 className="mt-5 text-4xl font-bold leading-[.95] tracking-[-.05em] text-white md:text-6xl">
              A seat at the workbench.
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-mono text-sm leading-7 text-muted-foreground">
              We will build a partnership around your goals and our actual
              program milestones. No invented reach numbers. No borrowed logos.
              Just a direct line into an ambitious technical build.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              [
                "VISIBILITY",
                "Brand presence across launch documentation, build updates, and selected team materials.",
              ],
              [
                "ACCESS",
                "Direct conversations with the people designing, machining, testing, and learning from the hardware.",
              ],
              [
                "STORY",
                "A grounded technical story your team can follow as the future liquid program takes shape.",
              ],
            ].map(([title, copy], index) => (
              <Reveal
                key={title}
                delay={index * 0.08}
                className="bg-[#091722] p-7 md:p-9"
              >
                <div className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  0{index + 1} / {title}
                </div>
                <p className="mt-8 text-xl font-semibold leading-snug text-white">
                  {copy}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/10 bg-primary px-5 py-20 text-primary-foreground md:px-8 md:py-28">
          <div className="absolute right-[-4rem] top-[-8rem] h-96 w-96 rounded-full border border-primary-foreground/20" />
          <div className="absolute right-[4rem] top-[-1rem] h-48 w-48 rounded-full border border-primary-foreground/15" />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-9 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <span className="font-mono text-[10px] tracking-[0.24em] opacity-70">
                READY WHEN YOU ARE / 06
              </span>
              <h2 className="mt-5 max-w-3xl text-5xl font-bold leading-[.9] tracking-[-.07em] md:text-8xl">
                LET&apos;S TALK
                <br />
                HARDWARE.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-sm">
              <p className="font-mono text-sm leading-7 opacity-75">
                Tell us what your team wants to support and we will send the
                current program brief.
              </p>
              <a
                href="mailto:windburst.aerospace@gmail.com?subject=Windburst%20Aerospace%20sponsorship"
                className="mt-6 inline-flex min-h-14 items-center gap-3 border border-primary-foreground/40 px-5 font-mono text-xs font-bold tracking-[0.13em] transition-colors hover:bg-primary-foreground hover:text-primary"
                data-testid="link-sponsor-footer-contact"
              >
                <Mail className="h-4 w-4" />
                windburst.aerospace@gmail.com
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#040b11]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-center md:flex-row md:items-center md:justify-between md:px-8 md:text-left">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 md:justify-start"
            data-testid="link-sponsor-footer-home"
          >
            <Rocket className="h-4 w-4 text-primary" />
            <span className="font-bold tracking-[0.12em] text-white">
              WINDBURST AEROSPACE
            </span>
          </Link>
          <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
            BUILDING TOWARD THE NEXT FLIGHT
          </span>
          <a
            href="https://www.youtube.com/@WindBurstAero"
            target="_blank"
            rel="noreferrer"
            className="mx-auto text-muted-foreground transition-colors hover:text-primary md:mx-0"
            data-testid="link-sponsor-youtube"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
